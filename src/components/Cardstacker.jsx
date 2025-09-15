import React, { useState } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";


const CARD_IMAGES = [
  "./src/assets/matteo_4.jpeg",
  "./src/assets/matteo_1.jpg",
  "./src/assets/matteo_2.png",
  "./src/assets/matteo_3.jpeg",
  "./src/assets/matteo_5.jpeg",
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
    <div className="cardstacker-wrapper">
      <ul className="cardstacker-cardwrap">
        {cards.map((image, index) => {
          const canDrag = index === 0;
          const offsetX = index * 20;
          const rotation = index * ROTATION_FACTOR;

          return (
            <motion.li
              key={image}
              className={`cardstacker-card ${canDrag ? "cardstacker-card--draggable" : ""}`}
              style={{
                backgroundImage: `url(${image})`,
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

export default CardStack;
