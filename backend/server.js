import express from "express";
import colors from "colors";
import { connectToDb } from "./config/db.js";
import cors from "cors";
import blog from "./routes/blog.js";

const app = express();

//cors
app.use(cors());

//connect to db
connectToDb();

//routes & middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/blogs", blog);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`.blue.bold.underline);
});
