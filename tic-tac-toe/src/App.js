import GameBoard from "./components/GameBoard.js";
import Player from "./components/Player.js";

function App() {
  return (
    <main>
      <div className = "game-container"> 
        <ol>
          
          
          <Player initialName="player 1" symbol =' X' />
          <Player initialName="player 2" symbol =' O' />
  
        </ol>
        <GameBoard/>
      </div>
      GAME BOARD
    </main>
  )}
export default App;
