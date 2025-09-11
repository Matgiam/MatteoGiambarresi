import React, {useState}from "react";
import { motion } from "framer-motion";
import move from "lodash-move";

const CARD_IMAGES = [
	"./src/assets/foolish_minds.jpg",
	"./src/assets/stick_underground_image_1.png",
	"./src/assets/stick_underground_image_2.png",
	"./src/assets/stick_underground_image_3.png",
	"./src/assets/stick_underground_image_4.png",
];

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;
const ROTATION_FACTOR = 5;

const CardStack = () => {
	const [cards, setCards] = useState(CARD_IMAGES);

	const moveToEnd = (from) => {
		setCards(move(cards, from, cards.length - 1));
	};

	return (
		<div style={wrapperStyle}>
			<ul style={cardWrapStyle}>
				{cards.map((image, index) => {
					const canDrag = index === 0;
					const offsetX = index * 20;
					const rotation = index * ROTATION_FACTOR;

					return (
						<motion.li
							key={image}
							style={{
								...cardStyle,
								backgroundImage: `url(${image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								cursor: canDrag ? "grab" : "auto",
							}}
							animate={{
								top: index * -CARD_OFFSET,
								left: offsetX,
								scale: 1 - index * SCALE_FACTOR,
								rotate: rotation,
								zIndex: CARD_IMAGES.length - index,
							}}
							drag={canDrag ? "y" : false}
							dragConstraints={{ top: 0, bottom: 0 }}
							onDragEnd={() => moveToEnd(index)}
						/>
					);
				})}
			</ul>
		</div>
	);
};

const wrapperStyle = {
	position: "relative",
};

const cardWrapStyle = {
	position: "relative",
};

const cardStyle = {
	position: "absolute",
	width: "32vw",
	height: "80vh",
	borderRadius: "15px",
	transformOrigin: "bottom right",
};

/* https://codesandbox.io/p/sandbox/card-stack-framer-motion-e0v68?file=%2Fsrc%2Findex.js%3A25%2C23-42%2C13 */
export default CardStack;
