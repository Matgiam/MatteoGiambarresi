import "../styling/reset.css";
import "../styling/index.css";
import LandingScreen from "../components/LandingScreen";
import ProjectsText from "../components/Projectstext";
function Home() {
	return (
		<div>
			<LandingScreen />
			<ProjectsText />
		</div>
	);
}
export default Home;
