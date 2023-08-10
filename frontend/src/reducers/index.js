import { combineReducers } from "redux";
import { addBlogReducer, fetchBlogsReducer } from "./blogReducer";

const allReducers = combineReducers({
	fetchBlogs: fetchBlogsReducer,
	addBlog: addBlogReducer,
});

export default allReducers;
