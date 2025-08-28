import { useState } from "react";
import Home from "../pages/Home.jsx";
import { Link, Route, Routes, BrowserRouter } from "react-router";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
