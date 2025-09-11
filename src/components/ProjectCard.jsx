import React, { useState } from "react";
import { motion } from "motion/react";
function ProjectCard() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header>
			<div className="absolute">
				<div className="rectangles">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: false, amount: 0.2 }}
						whileHover={{ scale: 1.05 }}
						className="rectangle"
					>
						<div className="rectangle2">
							
							<h3>Stick underground</h3>
							<div className="rectangle-content">
								<h4>Javascript, html, css, mongoDb</h4>
								<div className="view-project">
									<button onClick={() => setIsOpen(true)}>View Project</button>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: false, amount: 0.2 }}
						whileHover={{ scale: 1.05 }}
						className="rectangle"
					>
						<div className="rectangle2">
							<h3>Stick underground</h3>
							<div className="rectangle-content">
								<h4>Javascript, html, css, mongoDb</h4>
								<div className="view-project">
									<button onClick={() => setIsOpen(true)}>View Project</button>
								</div>
							</div>
						</div>
					</motion.div>
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
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
						>
							Stick underground
						</motion.h1>
						<motion.h4
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
						>
							Javascript, html, css, mongoDb
						</motion.h4>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
						>
							{" "}
							Stick Underground is a website for drummers of all levels and to help them find their drumsticks adapted to their needs.
						</motion.p>
						<br />
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
							className="button"
						>
							<a target="_blank" href="https://ehb-mct.github.io/web2-course-project-front-end-MatteoGiambarresi">
								Visit website
							</a>
						</motion.div>
						<motion.img
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
							src="./src/assets/stick_underground_image_1.png"
							alt="Foolish Minds"
						/>
						<motion.img
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
							src="./src/assets/stick_underground_image_2.png"
							alt="Foolish Minds"
						/>
						<motion.img
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
							src="./src/assets/stick_underground_image_3.png"
							alt="Foolish Minds"
						/>
						<motion.img
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.2 }}
							src="./src/assets/stick_underground_image_4.png"
							alt="Foolish Minds"
						/>
					</div>
				</div>
			)}
		</header>
	);
}

export default ProjectCard;
