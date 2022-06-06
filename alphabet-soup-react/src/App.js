import "./assets/styles/App.css";
import React from "react";
import { useState } from "react";
import { tabuleiroInicial } from "./helpers";
import { palavras } from "./constants/tabuleiros"
import { shuffleArray } from "./helpers";
import { palvrasLengh } from "./helpers";



import {
  Header,
  Footer,
  Gamepanel,
  ControlPanel,
} from "./components";


function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [blocos, setBlocos] = useState([]);
  const [palavrasJogo, setPalavrasJogo] = useState([]);


  const handleGameStart = () => {
    if (gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
    } else {
      console.log("Inicia Jogo");
      setGameStarted(true);
    }
  };

  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);

    let randomPalavra = shuffleArray(palavras);
    let arrayJogo = [];
    

    let numOfColunas;
    let numOfLinhas;
    let numOfPalavras;
    
    switch (value) {
      // Level: Beginner
      case "1":
        numOfColunas = 9;
        numOfLinhas = 11;
        numOfPalavras = 6;
        break;
      // Level: Intermediate
      case "2":
        numOfColunas = 12;
        numOfLinhas = 12;
        numOfPalavras = 8;
        break;
      // Level: Advanced
      case "3":
        numOfColunas = 12;
        numOfLinhas = 15;
        numOfPalavras = 10;
        break;
      default:
        numOfColunas = 0;
        numOfLinhas = 0;
        numOfPalavras = 0;
        break;
    }
    arrayJogo = randomPalavra.slice(0, numOfPalavras);
    setBlocos(tabuleiroInicial(numOfLinhas, numOfColunas));
    while(palvrasLengh(arrayJogo,numOfLinhas) === false){
      randomPalavra = shuffleArray(palavras);
      arrayJogo = randomPalavra.slice(0, numOfPalavras);
    }
    
    setPalavrasJogo([...arrayJogo]);

    
   };

   
  return (
    <div id="container" className="SoupaLetras">
      <Header />
      <main className="main-content">
        <ControlPanel
          gameStarted={gameStarted}
          onGameStart={handleGameStart}
          onLevelChange={handleLevelChange}
          selectedLevel={selectedLevel}
        />
        <Gamepanel letras = {blocos} selectedLevel={selectedLevel} palavras = {palavrasJogo}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
