import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import "./index.css"
import CounterApp from './CounterApp';

// const saludo = <h1>Hola Mundo</h1>

const divRoot = document.querySelector('#app')

// ReactDOM.render(<PrimeraApp  saludo="hola soy Mariano y esto es un prop" />, divRoot);
ReactDOM.render(<CounterApp value={0} />, divRoot)

