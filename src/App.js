import Person from './Component/Person';
import './App.css';
import React, { useState } from 'react';
import Total from './Component/Total';
import Pokemon from './Component/Pokemon';

const pokemon = [
  { name: "Bulbasaur", stage: "unevolved", type: "grass/poison", id: 1},
  { name: "Ivysaur", stage: "first evolution", type: "grass/poison", id: 2},
  { name: "Venusaur", stage: "second evolution", type: "grass/poison", id: 3},
  { name: "Charmander", stage: "unevolved", type: "fire", id: 4},
  { name: "Charmeleon", stage: "first evolution", type: "fire", id: 5},
  { name: "Charizard", stage: "second evolution", type: "fire/flying", id: 6},
  { name: "Squirtle", stage: "unevolved", type: "water", id: 7},
  { name: "Wartortle", stage: "first evolution", type: "water", id: 8},
  { name: "Blastoise", stage: "second evolution", type: "water", id: 9},
]

function App() {

  const [add, setAdd] = useState(0)
  const [sub, setSub] = useState(0)
  const [total, setTotal] = useState(100)
  const [time, setTime] = useState(new Date().toLocaleString())
  const [poke, setPoke] = useState(pokemon)

  setTimeout(function() {
    setTime(new Date().toLocaleString())
  },1000)

  return (
    <div className="App">
      <h1>Step 1. Learning about passing around props</h1>
      <Person name="Max" why="because I passed in props!"/>
      <button onClick={(() => setAdd(add + 1))}>Click this to add 1 to state!</button>
      <button onClick={(() => setSub(sub - 1))}>Click this to minus 1 to state!</button>
      <h4>State = {add + sub} </h4>
      <Total newValue={total / 2} />
      <Total newValue={total / 2} />
      <h2>The current time is {time} and it is updating with state!</h2>
      <h2>Let's see some pokemon!</h2>
      <ul>
        <Pokemon poke={poke}/>
      </ul>
    </div>
  );
}

export default App;