import axios from "axios";

import {
	LOAD_BLOGS_DISPATCH,
	LOAD_BLOGS_SUCCESS,
	LOAD_BLOGS_ERROR,
	ADD_BLOG_DISPATCH,
	ADD_BLOG_SUCCESS,
	ADD_BLOG_ERROR,
} from "../constants/blogConstants";

export const fetchBlogs = () => async (dispatch, getState) => {
	dispatch({ type: LOAD_BLOGS_DISPATCH, loading: true });

	try {
		const { data } = await axios.get("http://localhost:5500/blogs");
		dispatch({ type: LOAD_BLOGS_SUCCESS, payload: data, success: true });
	} catch (e) {
		dispatch({ type: LOAD_BLOGS_ERROR, success: false });
		console.log(e);
	}
};

export const addBlog = blog => async (dispatch, getState) => {
	dispatch({ type: ADD_BLOG_DISPATCH, loading: true });

	try {
		const { data } = await axios.post("http://localhost:5500/blogs", blog, {});
		dispatch({ type: ADD_BLOG_SUCCESS, payload: data, success: true });
	} catch (e) {
		dispatch({ type: ADD_BLOG_ERROR, success: false });
		console.log(e);
	}
};
