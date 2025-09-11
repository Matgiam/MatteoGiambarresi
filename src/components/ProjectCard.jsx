import React, { useState } from "react";
function ProjectCard() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header>
			<div className="absolute">
				<div className="rectangles">
					<div className="rectangle">
						<div className="rectangle2">
							<h3>Stick underground</h3>
							<div className="rectangle-content">
								<h4>Javascript, html, css, mongoDb</h4>
								<div className="view-project">
									<button onClick={() => setIsOpen(true)}>View Projects</button>
								</div>
							</div>
						</div>
					</div>
					<div className="rectangle">
						<div className="rectangle2">
							<h3>Stick underground</h3>
							<div className="rectangle-content">
								<h4>Javascript, html, css, mongoDb</h4>
								<div className="view-project">
									<button onClick={() => setIsOpen(true)}>View Projects</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Modal */}
			{isOpen && (
				<div className="modal" onClick={() => setIsOpen(false)}>
					<div
						className="modal-content"
						onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
					>
						<svg
							onClick={() => setIsOpen(false)}
							xmlns="http://www.w3.org/2000/svg"
							width="1vw"
							viewBox="0 0 16 16"
							fill="none"
							className="modal_close-icon"
						>
							<path d="M1 1L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
							<path d="M1 15L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
						</svg>
						<h1>Stick underground</h1>
						<h4>Javascript, html, css, mongoDb</h4>
						<p> Stick Underground is a website for drummers of all levels and to help them find their drumsticks adapted to their needs.</p>
						<br />
						<div className="button">
							<a target="_blank" href="https://ehb-mct.github.io/web2-course-project-front-end-MatteoGiambarresi">
								Visit website
							</a>
						</div>
						<img src="./src/assets/stick_underground_image_1.png" alt="Foolish Minds" />
						<img src="./src/assets/stick_underground_image_2.png" alt="Foolish Minds" />
						<img src="./src/assets/stick_underground_image_3.png" alt="Foolish Minds" />
						<img src="./src/assets/stick_underground_image_4.png" alt="Foolish Minds" />
						
					</div>
				</div>
			)}
		</header>
	);
}

export default ProjectCard;
