import { useEffect, useState } from "react";
import Header from "./Header";
import ClueForm from "./ClueForm";
import Gameboard from "./Gameboard";
import SavedClues from "./SavedClues";
import {Switch, Route} from "react-router-dom";

function App() {
  const [clues, setClues] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:4000/clues")
      .then((response) => response.json())
      .then((clueData) => setClues(clueData))
  }, [])
  console.log(clues)

  return (
    <div className="App">
      
      <Header />
      <Switch>
        <Route exact path="/">
          <Gameboard clues={clues} />
        </Route>
        <Route path="/submit">
          <ClueForm />
        </Route>
        <Route>
          <SavedClues path="/saved" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
