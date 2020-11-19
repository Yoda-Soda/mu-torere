import Logo from "./images/Mu_Torere.svg";
import Perepere from "./components/Perepere";
import "./App.css";

function App() {
  return (

    <div class="container">
      <div class="board">
        <button class="square white pos0"></button>
        <button class="square white pos1"></button>
        <button class="square black pos2"></button>
        <button class="square black pos3"></button>
        <button class="square black pos4"></button>
        <button class="square white pos5"></button>
        <button class="square white pos6"></button>
        <button class="square black pos7"></button>
        <button class="square black pos8"></button>
      </div>

   
        <Perepere position="3" team="black" enable="true" />
      
    </div>
  );
}

export default App;