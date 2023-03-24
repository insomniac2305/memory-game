import { useState } from "react";
import imgOne from "../images/one.jpg";
import imgTwo from "../images/two.png";
import imgThree from "../images/three.jpg";
import imgFour from "../images/four.jpg";
import imgFive from "../images/five.jpg";
import imgSix from "../images/six.jpg";
import imgSeven from "../images/seven.jpg";
import imgEight from "../images/eight.jpg";
import imgNine from "../images/nine.jpg";
import imgTen from "../images/ten.jpg";
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
  {
    id: 3,
    image: imgThree,
    caption: "Chess",
  },
  {
    id: 4,
    image: imgFour,
    caption: "Tongue",
  },
  {
    id: 5,
    image: imgFive,
    caption: "Plant",
  },
  {
    id: 6,
    image: imgSix,
    caption: "Christmas",
  },
  {
    id: 7,
    image: imgSeven,
    caption: "Group",
  },
  {
    id: 8,
    image: imgEight,
    caption: "Log",
  },
  {
    id: 9,
    image: imgNine,
    caption: "Suitcase",
  },
  {
    id: 10,
    image: imgTen,
    caption: "Fight",
  },
];

function Board({ increaseScore, resetScore }) {
  const [cards, setCards] = useState(defaultCards);
  const [selectedCards, setSelectedCards] = useState([]);

  function shuffle(array) {
    const shuffledArray = [...array];
    for (let index = shuffledArray.length - 1; index > 0; index--) {
      let randIndex = Math.floor(Math.random() * (index + 1));
      [shuffledArray[index], shuffledArray[randIndex]] = [shuffledArray[randIndex], shuffledArray[index]];
    }
    return shuffledArray;
  }

  const selectCard = (card) => {
    const cardAlreadySelected = selectedCards.find((selected) => card.id === selected.id);
    if (cardAlreadySelected) {
      setSelectedCards([]);
      resetScore();
    } else {
      setSelectedCards([...selectedCards, card]);
      increaseScore();
    }

    setCards(shuffle(cards));
  };

  const cardBoard = cards.map((card) => {
    return <Card image={card.image} caption={card.caption} select={selectCard.bind(this, card)} key={card.id} />;
  });

  return <div className="grid">{cardBoard}</div>;
}

export default Board;
