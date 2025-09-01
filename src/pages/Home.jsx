import "../styling/reset.css";
import "../styling/index.css";
import LandingScreen from "../components/LandingScreen";
import ProjectsText from "../components/Projectstext";
import Projects from "../components/Projects";
function Home() {
	return (
		<div>
			<LandingScreen />
			<ProjectsText />
			<Projects content="React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React React ReactReact React React React React React React React React React React React " />
		</div>
	);
}
export default Home;
