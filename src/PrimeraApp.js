import React, { Fragment } from "react";
import PropTypes from "prop-types"

// Functional components es la mejor manera de trabajar react
//Todo debe de ir dentro de un div de orden mayor, si no no funciona la app
const PrimeraApp = ({saludo="Hola soy un valor por defecto", subtitulo}) => { //Antes de la desestructuracion era (saludo)

    // const saludo = "Holi Crayoli"

    const saludo1 = {
        nombre: "Mariano",
        edad: 26,
    }

    //Error si no hay saludo

    // if(!saludo){
    //     throw new Error('El saludo es necesario')
    // }

  return (
    <Fragment> 
      <h1>Hola Mundo</h1>
      <p>Holi</p>
      <p>{saludo}</p>
      <p>{subtitulo}</p>
      <pre> {JSON.stringify(saludo1)}</pre>
    </Fragment>
  );
};

//PropTypes
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired //bool, number, array, objext //is required es que se necesita poner
}

//Default PropTypes
PrimeraApp.defaultProps = {
  subtitulo: "Este es un valor por defecto y soy un subtitulo"
}

export default PrimeraApp;
