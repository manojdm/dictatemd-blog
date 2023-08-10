import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="navbar">
			<div className="navbar-inner">
				<div>DictateMD</div>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/new">Add Post</Link>
				</nav>
			</div>
		</div>
	);
};

export default Header;
