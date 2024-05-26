import find from "../routes/action/find.js";
import findOne from "../routes/action/findOne.js";
import updateOne from "../routes/action/updateOne.js";
import deleteOne from "../routes/action/deleteOne.js";
import updateMany from "../routes/action/updateMany.js";
import deleteMany from "../routes/action/deleteMany.js";
import insertOne from "../routes/action/insertOne.js";
import insertMany from "../routes/action/insertMany.js";
import aggregate from "../routes/action/aggregate.js";

export const Routes = [
	{
		Route: "/action/find",
		Handler: find,
		Middleware: [],
	},
	{
		Route: "/action/findOne",
		Handler: findOne,
		Middleware: [],
	},
	{
		Route: "/action/updateOne",
		Handler: updateOne,
		Middleware: [],
	},
	{
		Route: "/action/deleteOne",
		Handler: deleteOne,
		Middleware: [],
	},
	{
		Route: "/action/updateMany",
		Handler: updateMany,
		Middleware: [],
	},
	{
		Route: "/action/deleteMany",
		Handler: deleteMany,
		Middleware: [],
	},
	{
		Route: "/action/insertOne",
		Handler: insertOne,
		Middleware: [],
	},
	{
		Route: "/action/insertMany",
		Handler: insertMany,
		Middleware: [],
	},
	{
		Route: "/action/aggregate",
		Handler: aggregate,
		Middleware: [],
	},
];
