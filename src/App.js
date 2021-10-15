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
    img: "images/viktor.png",
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
    img: "images/mich.png",
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
  const [liuid, setLiuid] = useState("1")
  const [name, setName] = useState("2")

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
  
  const FetchLiuId = async () => {
    let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Origin': '',authorization:"Bearer " + window.localStorage.getItem("token")}
    let options = {method:"get", headers: new Headers(headers)}
    await fetch("https://backend.d-sektionen.se/account/me", options).
      then(res => res.json()).
      then((data) => {
        setLiuid(data.username)
        setName(data.pretty_name)
      })
  }

  const urlParams = new URLSearchParams(window.location.search);
  const access = urlParams.get("access")
  if(access != null){
    window.localStorage.setItem("token", access)
    window.history.replaceState({}, document.title, "/")
    FetchLiuId()
  } else if(window.localStorage.getItem("token") != "null" || window.localStorage.getItem("token") != null){
    FetchLiuId()
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
              name={name}
              liuid={liuid}
              time={currentTime - startTime}
              correct={finishedCards.length / 2}
              left={cardSetsLeft}
              guesses={moves}
            />
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
