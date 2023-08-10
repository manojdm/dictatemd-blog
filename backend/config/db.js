import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

export async function connectToDb() {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		console.log("MongoDB successfully connected".yellow.bold.underline);
	} catch (e) {
		throw new Error(e?.message);
	}
}
