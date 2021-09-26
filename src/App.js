import { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';
import './components/Card'
import './components/Header'

import Card from './components/Card';
import Header from './components/Header';

function App() {

  const [openCards, setOpenCards] = useState([])
  const [finishedCards, setFinishedCards] = useState([])
  const [moves, setMoves] = useState(0)

  const cards = Array(6*3).fill('')

  const handleClick = (data) => {
    if (openCards.length === 1 && openCards[0] !== data) {
      setOpenCards((prev) => [...prev, data]);
      setMoves((moves) => moves + 1)
      if (/*check if cards match*/ true) {
        setFinishedCards([ ...finishedCards, ...openCards, data])
      }
    } else {
      // clear timer?
      setOpenCards([data])
    }
  }

  // Varje par behöver ha, två bilder, två beskrivningar
  const generateCardPair = (cards) => {
    let card1 = {}
    let card2 = {}
    card1.description = cards.description1;
    card1.img = cards.img1;
    card1.turned = false
    card1.completed = false
    cards.push(card1);
    
    card2.description = cards.description2;
    card2.img = cards.img2;
    card2.turned = false
    card2.completed = false
    cards.push(card2);
    // lägger till två kort med, {id, bild, vänd: bool} i cards
  }

  const timer = () => {
    let timerActive = false;
    const startTime = Date.now();
    let currentTime = 0;
    
  }

  return (
    <div className="App">

      <Header name="Name Nameson" liuid="namna404" correct="2" left="3"/>

      <div className="card-area">
        {
          cards.map((cardEntry, i) => (
            <Card 
              key={i}
              index={i}
              name={cardEntry}
              description="Back"
              isFlipped={() => openCards.includes(i)}
              isMatched={() => finishedCards.includes(i)}
              handleCardClick={() => handleClick(i)}
            />
          ))
        }
      </div>

      <div></div>

    </div>
  );
}

export default App;
