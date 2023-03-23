import { useEffect, useState } from "react";
import imgOne from "../images/one.jpg";
import imgTwo from "../images/two.png";
import Card from "./Card";

const defaultCards = [
  {
    id: 1,
    image: imgOne,
    caption: "Sleepy",
  },
  {
    id: 2,
    image: imgTwo,
    caption: "Blue Eyes",
  },
];

function Board({ increaseScore, resetScore }) {
  const [cards, setCards] = useState(defaultCards);
  const [selectedCards, setSelectedCards] = useState([]);

  const selectCard = (card) => {
    const cardAlreadySelected = selectedCards.find((selected) => card.id === selected.id);
    if (cardAlreadySelected) {
      setSelectedCards([]);
      resetScore();
    } else {
      setSelectedCards([...selectedCards, card]);
      increaseScore();
    }
  };

  const cardBoard = cards.map((card) => {
    return <Card image={card.image} caption={card.caption} select={selectCard.bind(this, card)} key={card.id} />;
  });

  return <div className="Board">{cardBoard}</div>;
}

export default Board;
