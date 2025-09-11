import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import CardStack from "./Cardstacker";

function AboutMeSection() {
	const ref = useRef(null);

	// Track scroll relative to this section
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.2 1"], // start when section enters, end when it leaves
	});

	// Scale + fade for container
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

	// Helper to stagger paragraphs
	const createParagraphAnimation = (start, end) => {
		return {
			opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
			y: useTransform(scrollYProgress, [start, end], [40, 0]),
		};
	};

	// Each paragraph reveals at different scroll intervals
	const p1 = createParagraphAnimation(0.1, 0.3);
	const p2 = createParagraphAnimation(0.3, 0.5);
	const p3 = createParagraphAnimation(0.5, 0.7);
	const p4 = createParagraphAnimation(0.7, 0.9);
	

	return (
		<header ref={ref} className="relative">
			<div className="about-container">
				<motion.div style={{ scale: scaleProgress, opacity: opacityProgress }} className="about-content">
					<h1>My story</h1>

					<motion.p style={p1}>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud <br /> <br />
					</motion.p>

					<motion.p style={p2}>
						"exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,"" <br /> <br />
					</motion.p>

					<motion.p style={p3}>
						"exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,"" <br /> <br />
					</motion.p>

					<motion.p style={p4}>
						"exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,"" <br /> <br />
					</motion.p>
					
				</motion.div>
				<CardStack/>
			</div>
		</header>
	);
}

export default AboutMeSection;
