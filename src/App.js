import { useEffect, useState } from "react";
import { MemoryRouter, Redirect, Route, Switch } from "react-router";
import "./App.css";
import "./components/Card";
import "./components/Header";

import Card from "./components/Card";
import Header from "./components/Header";
import Victory from "./pages/Victory";
import Menu from "./pages/Menu";
import Scoreboard from "./pages/Scoreboard";
import Snowflakes from "./components/Snowflakes";

const cards = [
  {
    name: "Isak Horvath (Webmaster)",
    img: "images/isse.png",
    description:
      "Programmeringsintreserad person som pluggar sitt tredje år på U-programmet!",
  },
  {
    name: "Viktor Holta",
    img: "images/viktor.png",
    description: "Programmerings- och grafikinriktad mjukvaruingenjör!",
  },
  {
    name: "Martin Kuiper",
    img: "images/martin.jpeg",
    description:
      "Martin gillar att bygga coola saker och sjunga karaoke. Han pluggar IP2 och har en dödsfejd med css.",
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
    description: "Programmering och pengar är fett kul.",
  },
  {
    name: "Felix Lindgren",
    img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80",
    description: "här kan man lägga till beskrivning",
  },
];

const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

function App() {
  const [memoryDeck, setMemoryDeck] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [finishedCards, setFinishedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  const [startTime, setStartTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timerActive, setTimerActive] = useState(false);
  const [liuid, setLiuid] = useState(undefined);
  const [name, setName] = useState(undefined);

  const resetCards = () => {
    setFinishedCards([]);
    setOpenCards([]);
    setMoves(0);
    setMemoryDeck(shuffle([...cards, ...cards]));
  };

  const resetTimer = () => {
    setStartTime(new Date());
    setInterval(() => {
      if (timerActive) {
        setCurrentTime(new Date());
      }
    }, 1000);
    setTimerActive(true);
  };

  const handleClick = (data) => {
    if (openCards.length === 1 && openCards[0] !== data) {
      setOpenCards((prev) => [...prev, data]);
      setMoves((moves) => moves + 1);
    } else {
      // clear timer?
      setOpenCards([data]);
    }
  };

  // Check if cards flipped are the same
  useEffect(() => {
    if (
      openCards.length === 2 &&
      memoryDeck[openCards[0]].name === memoryDeck[openCards[1]].name
    ) {
      setFinishedCards((finishedCards) => [...finishedCards, ...openCards]);
    }
  }, [openCards, memoryDeck]);

  useEffect(() => {
    setTimerActive(true);
  }, []);

  const FetchLiuId = async () => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      authorization: "Bearer " + window.localStorage.getItem("token"),
    };
    let options = { method: "get", headers: new Headers(headers) };
    await fetch("https://backend.d-sektionen.se/account/me", options)
      .then((res) => res.json())
      .then((data) => {
        setLiuid(data.username);
        setName(data.pretty_name);
      });
  };

  const sendScore = async () => {
    /* let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Origin': ''}
    let options = {method:"post", headers: new Headers(headers), mode: 'cors'} */
    let data = JSON.stringify({
      user: liuid,
      time_taken: currentTime - startTime,
      total_tries: moves,
    });
    let url_local = "http://localhost:8000";
    let url_heroku = "https://webbu-julkalender-21.herokuapp.com";
    await fetch(url_heroku + "/scoreboard/create/", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const urlParams = new URLSearchParams(window.location.search);
  const access = urlParams.get("access");
  if (access != null) {
    window.localStorage.setItem("token", access);
    window.history.replaceState({}, document.title, "/");
    FetchLiuId();
  } else if (
    window.localStorage.getItem("token") != "null" ||
    window.localStorage.getItem("token") != null
  ) {
    FetchLiuId();
  }

  const startGame = () => {
    resetTimer();
    resetCards();
  };

  const cardSets = cards.length;
  const cardSetsLeft = cardSets - finishedCards.length / 2;
  const timeValue = currentTime - startTime;

  return (
    <div className="App">
      <Snowflakes />
      <MemoryRouter>
        <Switch>
          <Route exact path="/">
            <Menu
              onStart={startGame}
              resetTimer={resetTimer}
              resetCards={resetCards}
              liuid={liuid}
            />
          </Route>
          <Route path="/scoreboard">
            <Scoreboard />
          </Route>
          <Route path="/game">
            <Header
              name={name}
              liuid={liuid}
              time={timeValue < 0 ? 0 : timeValue}
              correct={finishedCards.length / 2}
              left={cardSetsLeft}
              guesses={moves}
            />
            <button onClick={sendScore}>Send score</button>
            <div className="container">
              <div className="card-area">
                {cardSetsLeft > 0 ? (
                  memoryDeck.map(({ img, name, description }, i) => (
                    <Card
                      key={i}
                      index={i}
                      name={name}
                      profileDescription={description}
                      img={img}
                      description="Back"
                      isFlipped={() => openCards.includes(i)}
                      isMatched={() => finishedCards.includes(i)}
                      handleCardClick={() => handleClick(i)}
                    />
                  ))
                ) : (
                  <Redirect to="/victory" />
                )}
              </div>
            </div>
          </Route>
          <Route path="/victory">
            <Victory
              time={currentTime - startTime}
              guesses={moves}
              onRestart={() => {
                resetTimer();
                resetCards();
              }}
            />
          </Route>
        </Switch>
      </MemoryRouter>

      <div></div>
    </div>
  );
}

export default App;
