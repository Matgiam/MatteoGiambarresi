import ProjectCard from "./ProjectCard";
import DATA from "../data/projects.json";

function Projects() {
	return (
		<header>
			<div className="projects">
				{DATA.map((project) => (
					<div key={project.id}>
						<ProjectCard
							name={project.name}
							technologies={project.technologies}
							content={project.content}
							link={project.link}
							image={project.image}
							extra1={project.extra1}
							extra2={project.extra2}
							extra3={project.extra3}
						/>
					</div>
				))}
			</div>
		</header>
	);
}

export default Projects;
