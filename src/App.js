import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider , createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Search/Home';
import Pokedex from './components/PokeDex/Pokedex';
import './App.css';
import { useState, useEffect } from 'react';
import storage from 'local-storage-fallback';


const GolbalStyle = createGlobalStyle `
body{
  background-color: ${props => props.theme.mode === 'dark' ? '#222831' : '#EEE'};
  color: ${props => props.theme.mode === 'dark' ? '#F9FFEE' : '#000'};
}

body::-webkit-scrollbar-track {
  background: ${props => props.theme.mode === 'dark' ? '#222831' : '#EEE'};
}
body::-webkit-scrollbar-thumb {
  background: ${props => props.theme.mode === 'dark' ? '#dfa612' : '#6DB65B'};
}

.choose-btn{
  background-color: ${props => props.theme.mode === 'dark' ? '#dfa612' : '#6DB65B'};
}
.choose-btn1{
  background-color: ${props => props.theme.mode === 'dark' ? '#dfa612' : '#6DB65B'};
}
.input-field{
  color: ${props => props.theme.mode === 'dark' ? '#F9FFEE' : '#000'};
}
input:focus {
  border-color: ${props => props.theme.mode === 'dark' ? '#dfa612' : '#6DB65B'};
}
.Card {
  background-color: ${props => props.theme.mode === 'dark' ? '#181C22' : '#fcfcfc'};
  
input:checked .switch-btn {
  background: ${props => props.theme.mode === 'dark' ? '#dfa612' : '#6DB65B'};
}
#Loading{
  color: ${props => props.theme.mode === 'dark' ? '#F9FFEE' : '#000'};
}

`

function getInitialTheme(){
  const saveTheme = storage.getItem('theme');
  return saveTheme ? JSON.parse(saveTheme) : {mode: 'dark'};
}

function App() {
  const [theme , setTheme] = useState(getInitialTheme);
  useEffect(()=>{
    storage.setItem('theme', JSON.stringify(theme))
  }, [theme])
  return (
    <ThemeProvider theme = {theme}>
    <>
      <GolbalStyle/>
      
      <div className='grid-container' id='switch-container'>
      <input type="checkbox" id="switch"onClick = {e => setTheme(
        theme.mode === 'dark'
        ? {mode : 'light'} 
        : {mode: 'dark'}
      )} /> <label className='switch-btn' htmlFor="switch">Toggle</label>
      </div>
      <Router>
      <Navbar />
      <Switch>
      <Route path="/" exact component = {Home}/>
      <Route path="/pokedex" component = {Pokedex}/>
      </Switch>
      </Router>
    </>
    </ThemeProvider>
  );
}

export default App;