import "../styling/reset.css";
import "../styling/index.css";
import LandingScreen from "../components/LandingScreen";
import ProjectsText from "../components/Projectstext";
import ScrollingText from "../components/ScrollingText";
import ScrollingText2 from "../components/ScrollingText2";
import ProjectCard from "../components/ProjectCard";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import AboutMeSection from "../components/AboutMeSection";
import AboutMeSection2 from "../components/AboutMeSection2";
import FoolishMindsText from "../components/FoolishMinds";
import FoolishMindsFoto from "../components/FoolishMindsFoto";
import Contact from "../components/Contact";
function Home() {
	return (
		<div>
			<LandingScreen />
			<ProjectsText />
			<ProjectCard />
			<ScrollingText2 content=" React React React React React React React React React React React React React React React React React React" />
			<ProjectCard />
			<ScrollingText2 content=" design design design design design design design design design design design design design design design design design design" />
			<AboutMe />
			<AboutMeSection />
			<AboutMeSection2 />
			<FoolishMindsFoto />
			<FoolishMindsText />
			<Contact />
		</div>
	);
}
export default Home;
