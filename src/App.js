import logo from "./logo.svg";
import "./App.css";
import Exemple from './components/exemples/Exemple';
import Exemple2 from './components/exemples/Exemple2';
import Exemple3 from "./components/exemples/Exemple3";
import Exemple4 from "./components/exemples/Exemple4";
import Header from "./components/layout/Header"
import Todo from "./components/todolist/Todo";
import ApiExemple from "./components/exemples/ApiExemple"
import React, { useState, useEffect } from 'react';



function App() {

  const [theme, setTheme] = useState('');

  return (
    <div className={`App ${theme}`} >
      <Header />
      <Todo />
    </div>
  );
}

export default App;
