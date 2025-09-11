import { motion } from "motion/react";
function AboutMeSection2() {
	return (
		<header>
			<div className="about-container2">
				<div className="about-content2">
					<p>I can work with multiple tools going from coding to design to music.</p>
				</div>
				<div className="rectangles2">
					<motion.div
						whileInView={{ y: [200, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					></motion.div>
					<motion.div
						whileInView={{ y: [300, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					></motion.div>
					<motion.div
						whileInView={{ y: [400, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					></motion.div>
					<motion.div
						whileInView={{ y: [500, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					></motion.div>
					<motion.div
						whileInView={{ y: [600, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					></motion.div>
				</div>
			</div>
		</header>
	);
}

export default AboutMeSection2;
