import { useEffect, useState } from "react"
import { MemoryRouter, Redirect, Route, Switch } from "react-router"
import "./App.css"
import "./components/Card"
import "./components/Header"

import Card from "./components/Card"
import Header from "./components/Header"
import Victory from "./pages/Victory"
import Menu from "./pages/Menu"
import Scoreboard from "./pages/Scoreboard"
import Snowflakes from "./components/Snowflakes"

const cards = [
  {
    name: "Isak Horvath (Webmaster)",
    img: "images/isse.png",
    description: "Programmeringsintreserad person som pluggar sitt tredje år på U-programmet!",
  },
  {
    name: "Viktor Holta",
    img: "https://images.unsplash.com/photo-1632845510162-c1c7c8d53780?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    description: "Programmerings- och grafikinriktad mjukvaruingenjör!",
  },
  {
    name: "Martin Kuiper",
    img: "images/martin.jpeg",
    description: "Martin gillar att bygga coola saker och sjunga karaoke. Han pluggar IP2 och har en dödsfejd med css.",
  },
  {
    name: "Erik Ekelöf",
    img: "images/erik.png",
    description: "Pluggar IP2",
  },
  {
    name: "Albin Thulin",
    img: "images/albin.jpg",
    description: "Går första året på D",
  },
  {
    name: "Jennifer Santos",
    img: "images/jennifer.png",
    description: "Pluggar D1",
  },
  {
    name: "Michelle Krejci",
    img: "https://images.unsplash.com/photo-1632813881026-73d8df009015?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    description: "här kan man lägga till beskrivning",
  },
  {
    name: "Felix Lindgren",
    img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80",
    description: "här kan man lägga till beskrivning",
  },
]

const shuffle = (array) => {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

function App() {
  const [memoryDeck, setMemoryDeck] = useState([])
  const [openCards, setOpenCards] = useState([])
  const [finishedCards, setFinishedCards] = useState([])
  const [moves, setMoves] = useState(0)

  const [startTime, setStartTime] = useState(new Date())
  const [currentTime, setCurrentTime] = useState(new Date())
  const [timerActive, setTimerActive] = useState(false)

  const resetCards = () => {
    setFinishedCards([])
    setOpenCards([])
    setMoves(0)
    setMemoryDeck(shuffle([...cards, ...cards]))
  }

  const resetTimer = () => {
    setStartTime(new Date())
    setInterval(() => {
      if (timerActive) {
        setCurrentTime(new Date())
      }
    }, 1000)
    setTimerActive(true)
  }

  // const cards = Array(6*3).fill('')

  const handleClick = (data) => {
    if (openCards.length === 1 && openCards[0] !== data) {
      setOpenCards((prev) => [...prev, data])
      setMoves((moves) => moves + 1)
    } else {
      // clear timer?
      setOpenCards([data])
    }
  }

  // Check if cards flipped are the same
  useEffect(() => {
    if (
      openCards.length === 2 &&
      memoryDeck[openCards[0]].name === memoryDeck[openCards[1]].name
    ) {
      setFinishedCards((finishedCards) => [...finishedCards, ...openCards])
    }
  }, [openCards, memoryDeck])

  // Varje par behöver ha, två bilder, två beskrivningar
  const generateCardPair = (cards) => {
    let card1 = {}
    let card2 = {}
    card1.description = cards.description1
    card1.img = cards.img1
    card1.turned = false
    card1.completed = false
    cards.push(card1)

    card2.description = cards.description2
    card2.img = cards.img2
    card2.turned = false
    card2.completed = false
    cards.push(card2)
    // lägger till två kort med, {id, bild, vänd: bool} i cards
  }

  const cardSets = cards.length
  const cardSetsLeft = cardSets - finishedCards.length / 2
  
  const FetchLiuId = () => {
    let headers = {"Content-Type": "application/json"}
    headers["Authorization"] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjY1MTQ1LCJqdGkiOiI5NjMzZjZjOWZjNjA0ZWM1OTBhNDg2ZTljYWY5YzQ1ZSIsInVzZXJfaWQiOjU5OH0.bqWQLnhUAIbUHacCDprANUxaFVW3u01l8tQt0VEVdnQ&refresh=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYzNTUyOTE0NSwianRpIjoiOTE0MGExODVkNTYxNDBjMmEyNGZlYWI5OWEzMWExOTAiLCJ1c2VyX2lkIjo1OTh9.o7TqDYd-W1tzePoGKBKCzCAoKeU5epySmrrQYgxQZMo";
    fetch("backend.d-sektionen.se/account/me")//.then(response => response.json()).then(data => console.log(data));
    
  }

  return (
    <div className='App'>
      <Snowflakes />
      <MemoryRouter>
        <Switch>
          <Route exact path='/'>
            <Menu 
              onStart={() => {
                resetTimer()
                resetCards()
              }}
            />
          </Route>
          <Route path='/scoreboard'>
            <Scoreboard />
          </Route>
          <Route path='/game'>
            
            <Header
              name='Name Nameson'
              liuid='namna404'
              time={currentTime - startTime}
              correct={finishedCards.length / 2}
              left={cardSetsLeft}
              guesses={moves}
            />
            <button onClick={FetchLiuId}>fetch</button>
            <div className='container'>
              <div className='card-area'>
                {cardSetsLeft > 0 ? (
                  memoryDeck.map(({ img, name, description }, i) => (
                    <Card
                      key={i}
                      index={i}
                      name={name}
                      profileDescription={description}
                      img={img}
                      description='Back'
                      isFlipped={() => openCards.includes(i)}
                      isMatched={() => finishedCards.includes(i)}
                      handleCardClick={() => handleClick(i)}
                    />
                  ))
                ) : (
                  <Redirect to='/victory' />
                )}
              </div>
            </div>
          </Route>
          <Route path='/victory'>
            <Victory
              time={currentTime - startTime}
              guesses={moves}
              onRestart={() => {
                resetTimer()
                resetCards()
              }}
            />
          </Route>
        </Switch>
      </MemoryRouter>

      <div></div>
    </div>
  )
}

export default App
