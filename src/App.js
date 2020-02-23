import React, {useState} from 'react';
import './App.css';
import {getPokemon} from './Api';

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
          setname('');
          setError('');
        }catch (e){
          setError('Something went wrong! Are you sure that\'s a Pokemon name ?')
        }

      }}
      >
        Search by Pokemon name !
        </button>
        {pokemon && pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={name} />
        )}
        {error && <div style={{color:'red'}} id="error">{error}</div>}
        </header>
  </div>
);
        }

export default App;