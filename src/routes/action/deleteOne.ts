import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import connectToClient from "../../lib/mongo.js";
import { z } from "zod";

const app = new Hono();

// Schema for the request body
const bodySchema = z.object({
	database: z.string(),
	collection: z.string(),
	filter: z.record(z.any()),
});

// Schema for the request headers
const headerSchema = z.object({
	authorization: z
		.string()
		.startsWith("mongodb")
		.regex(
			new RegExp(
				"^(mongodb(?:\\+srv)?(\\:)(?:\\/{2}){1})(?:\\w+\\:\\w+\\@)?(\\w+?(?:\\.\\w+?)*)(\\:)(\\d+(?:\\/){0,1})(?:\\/\\w+?)?(?:\\?\\w+?\\=\\w+?(?:\\&\\w+?\\=\\w+?)*)?$",
				"gm"
			)
		),
});

app.post(
	"/",
	zValidator("json", bodySchema),
	zValidator("header", headerSchema),

	async (c) => {
		let client;
		try {
			client = await connectToClient(
				c.req.header("authorization") as string
			);
			const parsedBody = bodySchema.parse(await c.req.json());

			const db = client.db(parsedBody.database);
			const collection = db.collection(parsedBody.collection);
			const result = await collection.deleteOne(parsedBody.filter);

			await client.close();
			return c.json({
				deletedCount: result.deletedCount,
			});
		} catch {
			if (client) {
				await client.close();
			}
			return c.json({ success: false, message: "An error occurred" }, 500);
		}
	}
);

app.all("/", (c) => {
	return c.json({ success: false, message: "Method not allowed" }, 405);
});

export default app;
