import React, {useState} from 'react';
import './App.css';
import {getPokemon} from './API';

function App() {

const [name, setname]  = useState('');
const  [pokemon, setPokemon] = useState(null);
const [error, setError] = useState('')

return(
  <div className="App">
    <header className="App-header">
      <h2>Pokemon Finder</h2>
      <input value={name} onChange={e=>setname(e.target.value.trim())} />
      <button onClick={async()=>{
        if(!name){
          return setError("Please enter the name of a Pokemon !")
        }
        try{
          const result  = await getPokemon(name);
          setPokemon(result);
          
        }
      }}
    </header>
  </div>
)