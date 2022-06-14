import "./gamepanel.css";

function GamePanel(props) {
  const { letras, selectedLevel , gameStarted,palavras} = props;
  let gameClasse = "";
  
  console.log(`gamePanel Render`);

  if (selectedLevel === "2") {
    gameClasse = "intermedio";
  } else if (selectedLevel === "3") {
    gameClasse = "avancado";
  } else {
    gameClasse = "";
  }

  console.log(letras);
  console.log(selectedLevel); 

  return (
    <section className="game-panel">
      <div className="flex-container">
        <div className="flex-child primeiro">
          
          <h3 className={(gameStarted === false ? "esconder" : "")}>Palavras do Jogo</h3>

          {palavras.map(palavras => <h2 className={(gameStarted === false ? "esconder" : "")}>{palavras}</h2>)}
          
        </div>
        <div id="game" className={`${gameClasse}`} >
           {letras}
        </div>
      </div>
    </section>
  );
}
export default GamePanel;