import { motion } from "motion/react";
function AboutMeSection2() {
	return (
		<header>
			<div className="about-container2">
				<motion.div
					whileInView={{ y: [200, 0], opacity: [0, 1] }}
					transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: true, amount: 0 }}
					className="about-content2"
				>
					<p>I can work with multiple tools going from coding to design to music.</p>
				</motion.div>
				<div className="rectangles2">
					<motion.div
						whileInView={{ y: [50, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					>
						{" "}
						<img src="./src/assets/ai_icon.png" alt="" />
					</motion.div>
					<motion.div
						whileInView={{ y: [300, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					>
						<img src="./src/assets/ps_icon.png" alt="" />
					</motion.div>
					<motion.div
						whileInView={{ y: [250, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					>
						<img src="./src/assets/pr_icon.png" alt="" />
					</motion.div>
					<motion.div
						whileInView={{ y: [150, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					>
						{" "}
						<img src="./src/assets/figma_icon.png" alt="" />
					</motion.div>
					<motion.div
						whileInView={{ y: [100, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					>
						{" "}
						<img src="./src/assets/vscode_icon.png" alt="" />
					</motion.div>
					<motion.div
						whileInView={{ y: [250, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					>
						<img src="./src/assets/blender_icon.png" alt="" />
					</motion.div>
					<motion.div
						whileInView={{ y: [200, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					>
						{" "}
						<img src="./src/assets/react_icon.png" alt="" />
					</motion.div>
					<motion.div
						whileInView={{ y: [320, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					>
						<img src="./src/assets/html_icon.png" alt="" />
					</motion.div>
					<motion.div
						whileInView={{ y: [340, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					>
						<img src="./src/assets/css_icon.png" alt="" />
					</motion.div>
					<motion.div
						whileInView={{ y: [360, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					>
						<img src="./src/assets/mongodb_icon.png" alt="" />
					</motion.div>
					<motion.div
						whileInView={{ y: [380, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					>
						<img src="./src/assets/motion_icon.png" alt="" />
					</motion.div>
					<motion.div
						whileInView={{ y: [250, 0], opacity: [0, 1], rotate: [-10, 0] }}
						transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
						className="rectangle4"
					>
						<img src="./src/assets/ableton_icon.webp" alt="" />
					</motion.div>
				</div>
			</div>
		</header>
	);
}

export default AboutMeSection2;
