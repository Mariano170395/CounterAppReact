import React, {useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({value}) => {
    // const state = useState('Goku')
    //Desestructurando lo de arriba
    // const[nombre, setNombre] = useState('Goku')    
    // console.log(nombre, setNombre)

    //Haciendolo con counter

    const [counter, setCounter] = useState(0);
    

    //handleAdd
    const handleAdd = ()=>{
        setCounter(counter+1)
    }

    //handleSubstract

    const handleSubstract=()=>{
        setCounter(counter-1)
    }

    //handleReset

    const handleReset = () => {
        setCounter(value)
    }

  return (
    <div>
      <h1>Holi</h1>
      <p>{counter}</p>
      <button onClick={handleAdd}>suma 1</button>
      <button onClick={handleSubstract}>resta 1</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

CounterApp.propTypes={
    value: PropTypes.number.isRequired
}

export default CounterApp;
