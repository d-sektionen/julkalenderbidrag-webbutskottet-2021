import { memo, useEffect, useState, useCallback } from "react"
import logo from './logo.svg';
import './App.css';
import './components/Card'
import './components/Header'

import Card from './components/Card';
import Header from './components/Header';

const cards = [
  { 
    name: 'Book',
    img: 'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80', 
  },
  { 
    name: 'Monkey',
    img: 'https://images.unsplash.com/photo-1632845510162-c1c7c8d53780?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80', 
  },
  {
    name: 'Avocado',
    img: 'https://images.unsplash.com/photo-1632871704132-d21dfc90b74c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
  },
  {
    name: 'Pumpkin',
    img: 'https://images.unsplash.com/photo-1632769096411-a3c1e3aa1c3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80',
  },
  {
    name: 'Picnick',
    img: 'https://images.unsplash.com/photo-1632836986357-09388f7465e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Dog',
    img: 'https://images.unsplash.com/photo-1632769092277-83b8c526a673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80',
  },
  {
    name: 'Mushroom',
    img: 'https://images.unsplash.com/photo-1632813881026-73d8df009015?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Computer',
    img: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80',
  },
]

const shuffle = (array) => {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array
} 

const memoryDeck = shuffle([ ...cards, ...cards])
console.log(memoryDeck)
function App() {

  const [openCards, setOpenCards] = useState([])
  const [finishedCards, setFinishedCards] = useState([])
  const [moves, setMoves] = useState(0)

  // const cards = Array(6*3).fill('')

  const handleClick = (data) => {
    if (openCards.length === 1 && openCards[0] !== data) {
      setOpenCards((prev) => [...prev, data]);
      setMoves((moves) => moves + 1)
    } else {
      // clear timer?
      setOpenCards([data])
    }
  }

  // Check if cards flipped are the same
  useEffect(() => {
    if (openCards.length === 2 && memoryDeck[openCards[0]].name === memoryDeck[openCards[1]].name) {
      setFinishedCards(finishedCards => [ ...finishedCards, ...openCards])
    }
}, [openCards])

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

  const cardSets = cards.length
  const cardSetsLeft = cardSets - finishedCards.length/2

  return (
    <div className="App">

      <Header name="Name Nameson" liuid="namna404" correct={finishedCards.length/2} left={cardSetsLeft}/>

      <div className="card-area">
        {
          cardSetsLeft > 0 ? (memoryDeck.map(({ img, name }, i) => (
            <Card 
              key={i}
              index={i}
              name={name}
              img={img}
              description="Back"
              isFlipped={() => openCards.includes(i)}
              isMatched={() => finishedCards.includes(i)}
              handleCardClick={() => handleClick(i)}
            />
          ))) :
          (<div>
            <h1>U did it!</h1>
          </div>)
        }
      </div>

      <div></div>

    </div>
  );
}

export default App;
