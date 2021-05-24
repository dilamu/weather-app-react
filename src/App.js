import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Guadalajara"/>
        <footer>  My weather App was coded by <a href="https://github.com/dilamu">Diana L Munoz</a>, {""}
        <a href="https://github.com/dilamu/weather-app-react" target="_blank" rel="noreferrer"> open source on GitHub</a>
        </footer> 
        </div> 
    </div>
  );
}

