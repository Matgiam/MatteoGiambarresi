import "../styling/reset.css";
import "../styling/index.css";
import LandingScreen from "../components/LandingScreen";
import ProjectsText from "../components/Projectstext";
import ScrollingText from "../components/ScrollingText";
import Projects from "../components/Projects";
function Home() {
	return (
		<div>
			<LandingScreen />
			<ProjectsText />
			<Projects />
			<ScrollingText content=" React React React React React React React React React React React React React React React React React React" />
		</div>
	);
}
export default Home;
