import {
	ADD_BLOG_DISPATCH,
	ADD_BLOG_ERROR,
	ADD_BLOG_SUCCESS,
	LOAD_BLOGS_DISPATCH,
	LOAD_BLOGS_ERROR,
	LOAD_BLOGS_SUCCESS,
} from "../constants/blogConstants";

const fetchBlogsReducer = (state = {}, action) => {
	switch (action.type) {
		case LOAD_BLOGS_DISPATCH:
			return { loading: true, success: false };
		case LOAD_BLOGS_SUCCESS:
			return { loading: false, success: true, data: action.payload };
		case LOAD_BLOGS_ERROR:
			return { loading: false, success: false };
		default:
			return false;
	}
};

const addBlogReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_BLOG_DISPATCH:
			return { loading: true, success: false };
		case ADD_BLOG_SUCCESS:
			return { loading: false, success: true, data: action.payload };
		case ADD_BLOG_ERROR:
			return { loading: false, success: false };
		default:
			return false;
	}
};

export { fetchBlogsReducer, addBlogReducer };
