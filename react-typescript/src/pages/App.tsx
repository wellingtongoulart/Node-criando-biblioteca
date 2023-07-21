import React from 'react';
import Formulario from '../components/Form';
import Lista from '../components/List';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <p>BANANA</p>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;