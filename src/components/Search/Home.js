import React, { useState } from 'react';
import { searchPokemon } from '../../services/pokemon';
import Card from '../Card/Card';
import './style.css';
import {Spring} from 'react-spring/renderprops';

function Home(){
    const [pokemonInput , setPokemonInput] = useState('');
    const [data, setData] = useState('');
    const Url = 'https://pokeapi.co/api/v2/pokemon/';

    const handleSubmit = (e) => {
        e.preventDefault();
        async function fetchData() {
            let response = await searchPokemon(Url + pokemonInput)
            setData(response);
            }
            fetchData(); 
            setPokemonInput('');
    }  
    
    return(
    <Spring 
        from ={{opacity: 0, marginTop: -150}}
        to ={{opacity: 1, marginTop: 0}}
        config={{delay: 0.03}}
        >
            { props => (
                <div style={props}>
                    <form className="container" onSubmit={handleSubmit}>
                        <label className="form-label">Choose Pokemon</label>
                        <input className="input-field" type="text" value={pokemonInput} required onChange={(e) => setPokemonInput(e.target.value)} placeholder="Enter Name"></input>
                        <div><p id="Error"></p></div>
                        <input className="choose-btn" type="submit" value="I Choose You"></input>
                    </form>
                    <div className="card-container">
                    <div className="grid-container">
                        {data && <Card pokemon={data}/>}
                    </div>
                    </div>
                </div>
            )}
        </Spring> 
    )
}

export default Home