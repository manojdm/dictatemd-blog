import mongoose from "mongoose";

const schema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
});

const Blog = mongoose.model("Blog", schema);

export default Blog;
