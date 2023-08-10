import Blog from "../modals/blog.js";

export const getBlogs = async (req, res) => {
	try {
		const blogs = await Blog.find({});

		res.json(blogs);
	} catch (e) {
		throw new Error(e.message);
	}
};

export const addBlog = async (req, res) => {
	try {
		const { title, content } = req.body;

		const blog = await Blog.create({
			title,
			content,
		});

		res.json(blog);
	} catch (e) {
		throw new Error(e.message);
	}
};
