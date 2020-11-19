import Logo from "./images/Mu_Torere.svg";
import "./App.css";

function App() {
  return (
    <div class="container">
      <div class="board">
        <button class="square white pos1"></button>
        <button class="square white pos2"></button>
        <button class="square black pos3"></button>
        <button class="square black pos4"></button>
        <button class="square black pos5"></button>
        <button class="square white pos6"></button>
        <button class="square white pos7"></button>
        <button class="square black pos8"></button>
        <button class="square black pos9"></button>
      </div>
    </div>
  );
}

export default App;
