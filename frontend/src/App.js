import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import AddBlog from "./screens/AddBlog";
import Home from "./screens/Home";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new" element={<AddBlog />} />
			</Routes>
		</Router>
	);
}

export default App;
