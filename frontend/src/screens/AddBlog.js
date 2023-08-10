import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../Actions/blogActions";

const AddBlog = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(addBlog({ title, content }));
	};

	return (
		<div className="add-post-banner">
			<h2>Add a New Post</h2>
			<form onSubmit={e => handleSubmit(e)} className="add-post-form">
				<label htmlFor="post-title">Title:</label>
				<input
					type="text"
					id="post-title"
					name="post-title"
					placeholder="Enter post title"
					value={title}
					onChange={e => setTitle(e.target.value)}
					required
				/>

				<label htmlFor="post-content">Content:</label>
				<textarea
					id="post-content"
					name="post-content"
					placeholder="Enter post content"
					value={content}
					onChange={e => setContent(e.target.value)}
					rows="4"
					required
				></textarea>

				<button type="submit">Add Post</button>
			</form>
		</div>
	);
};

export default AddBlog;
