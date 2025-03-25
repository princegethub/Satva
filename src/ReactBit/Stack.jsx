import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import "./Stack.css";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
        {
          id: 1,
          img: "https://images.unsplash.com/photo-1593642532454-e1aafdf266af?q=80&w=500&auto=format", // Zee News Award Photo
          title: "Zee News - Interior Design Award",
          content:
            "Recognized by Zee News for excellence in sustainable architecture and luxurious interior designs.",
          link: "https://www.zee.com/news/satva-living-award", // Link to Zee News Page
        },
        {
          id: 2,
          img: "https://images.unsplash.com/photo-1581091870620-3c89f1d79572?q=80&w=500&auto=format", // Aaj Tak Article Photo
          title: "Aaj Tak - Modern Interiors Feature",
          content:
            "Featured on Aaj Tak for our innovative approach to modern urban spaces and eco-friendly homes.",
          link: "https://www.aajtak.in/design-news",
        },
        {
          id: 3,
          img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=500&auto=format", // NDTV Article Photo
          title: "NDTV - Innovation in Interior Design",
          content:
            "Covered by NDTV for transforming traditional interiors into smart, sustainable living spaces.",
          link: "https://www.ndtv.com/interior-trends-2025",
        },
        {
          id: 4,
          img: "https://images.unsplash.com/photo-1534515725026-7c5283c17c48?q=80&w=500&auto=format", // India Today Recognition Photo
          title: "India Today - Eco-Friendly Designs Recognition",
          content:
            "Acknowledged by India Today for pioneering innovations in eco-conscious home design.",
          link: "https://www.indiatoday.in/eco-designs",
        },
        {
          id: 5,
          img: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=500&auto=format", // Hindustan Times Feature Photo
          title: "Hindustan Times - Top Sustainable Designs",
          content:
            "Featured in Hindustan Times for redefining sustainable living with cutting-edge designs.",
          link: "https://www.hindustantimes.com/interior-designs",
        },
        {
          id: 6,
          img: "https://images.unsplash.com/photo-1599850843589-5c18eb5803f5?q=80&w=500&auto=format", // Architectural Digest Award Photo
          title: "Architectural Digest - Excellence in Architecture",
          content:
            "Honored by Architectural Digest for creative excellence in modern architecture and interior solutions.",
          link: "https://www.architecturaldigest.com/awards",
        },
      
        ]
  );

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="stack-container"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation
          ? Math.random() * 10 - 5 // Random degree between -5 and 5
          : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
    

            {/* Page 2 - News Content */}
            <motion.div
              className="card bg-white shadow-lg rounded-lg overflow-hidden"
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              {/* Image Section */}
              <img
                src={card.img}
                alt={`card-${card.id}`}
                className="w-full h-[60%]  object-cover"
                draggable={false}
              />

              {/* Text Section */}
              <div className="p-4 h-[40%] flex flex-col justify-between">
                <h3 className="text-lg font-bold text-[#8F5735] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.content}</p>
                <button
                  onClick={() => (window.location.href = card.link)}
                  className="mt-3 px-4 py-2 bg-[#8F5735] text-white rounded hover:bg-[#723e2a] transition"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
