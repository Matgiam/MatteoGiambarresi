import { useState } from "react";
import Home from "../pages/Home.jsx";
import Projects from "../components/Projects.jsx";
import LandingScreen from "../components/LandingScreen";
import ProjectCard from "../components/ProjectCard.jsx";
import { Link, Route, Routes, BrowserRouter } from "react-router";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
