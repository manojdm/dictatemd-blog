import React from "react";

const AddBlog = () => {
	return (
		<div className="add-post-banner">
			<h2>Add a New Post</h2>
			<form className="add-post-form">
				<label for="post-title">Title:</label>
				<input
					type="text"
					id="post-title"
					name="post-title"
					placeholder="Enter post title"
					required
				/>

				<label for="post-content">Content:</label>
				<textarea
					id="post-content"
					name="post-content"
					placeholder="Enter post content"
					rows="4"
					required
				></textarea>

				<button type="submit">Add Post</button>
			</form>
		</div>
	);
};

export default AddBlog;
