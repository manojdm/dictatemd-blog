import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../Actions/blogActions";
import parse from "html-react-parser";

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

	const handleSubmit = async (e, searchTerm) => {
		e.preventDefault();

		const newPosts = data.filter((post, idx) => {
			const { title, content } = post;

			return (
				title.toLowerCase().includes(searchTerm) ||
				content.toLowerCase().includes(searchTerm)
			);
		});

		const updatedPosts = updatePostsWithHighlights(newPosts, searchTerm);

		setPosts(updatedPosts);
	};

	const updatePostsWithHighlights = (items, term) => {
		const newItems = items.map(item => {
			const { title, content } = item;

			const highlightedTitle = title.replace(
				new RegExp(term, "gi"),
				`<span class="highlight">${term}</span>`
			);

			const highlightedContent = content.replace(
				new RegExp(term, "gi"),
				`<span class="highlight">${term}</span>`
			);

			return { ...item, title: highlightedTitle, content: highlightedContent };
		});

		return newItems;
	};

	useEffect(() => {}, [posts]);

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="search-bar">
				<i className="fas fa-search"></i>
				<input
					value={searchTerm}
					onChange={e => {
						setSearchTerm(e.target.value);
						handleSubmit(e, e.target.value);
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
							<div className="card-title">{parse(post?.title)}</div>
							<div className="card-content">{parse(post?.content)}</div>
						</div>
					))}

				{loading && "Loading, Please wait...."}
			</div>
		</div>
	);
};

export default Home;
