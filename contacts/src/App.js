import React from 'react';
import Joke from "./components/Joke"
import './App.css';
import JokesData from "./components/JokesData"

function App() {

  const jokeComponents = JokesData.map( joke => 
      <Joke key={joke.id} question={joke.question} punchline={joke.answer}/>
  )
  
  return (
    <div className="App">
      {jokeComponents}
    </div>
  );
}

export default App;
