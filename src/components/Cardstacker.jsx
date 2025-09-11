import React from "react";
import { motion } from "framer-motion";
import move from "lodash-move";

// Replace these URLs with your own image URLs
const CARD_IMAGES = [
	"./src/assets/foolish_minds.jpg",
	"./src/assets/stick_underground_image_1.png",
	"./src/assets/stick_underground_image_2.png",
	"./src/assets/stick_underground_image_3.png",
	"./src/assets/stick_underground_image_4.png",
];

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;
const ROTATION_FACTOR = 5; // degrees for fanning

const CardStack = () => {
	const [cards, setCards] = React.useState(CARD_IMAGES);

	const moveToEnd = (from) => {
		setCards(move(cards, from, cards.length - 1));
	};

	return (
		<div style={wrapperStyle}>
			<ul style={cardWrapStyle}>
				{cards.map((image, index) => {
					const canDrag = index === 0;
					const offsetX = index * 20; // horizontal offset
					const rotation = index * ROTATION_FACTOR; // rotation for fanning

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

export default CardStack;
