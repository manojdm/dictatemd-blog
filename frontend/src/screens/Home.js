import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../Actions/blogActions";

const Home = () => {
	const dispatch = useDispatch();
	const { loading, success, data } = useSelector(state => state.fetchBlogs);

	const [posts, setPosts] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		dispatch(fetchBlogs());
	}, []);

	useEffect(() => {
		if (!loading && success && data) {
			setPosts(data);
		}
	}, [loading, success, data]);

	const handleSubmit = e => {
		e.preventDefault();

		const newPosts = data.filter((post, idx) => {
			const { title, content } = post;

			return (
				title.toLowerCase().includes(searchTerm) ||
				content.toLowerCase().includes(searchTerm)
			);
		});

		setPosts(newPosts);

		console.log(newPosts);
	};

	useEffect(() => {
		console.log(posts);
	}, [posts]);

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="search-bar">
				<i className="fas fa-search"></i>
				<input
					value={searchTerm}
					onChange={e => {
						setSearchTerm(e.target.value);
						handleSubmit(e);
					}}
					type="text"
					placeholder="Search..."
				/>
			</form>

			<div className="cards-container">
				{!loading &&
					success &&
					posts &&
					posts.map(post => (
						<div className="card">
							<div className="card-title">{post?.title}</div>
							<div className="card-content">{post?.content}</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Home;
