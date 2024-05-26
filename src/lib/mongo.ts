import { MongoClient } from "mongodb";

async function connectToClient(connectionUri: string) {
	const client = new MongoClient(connectionUri);
	return client;
}

export default connectToClient;
