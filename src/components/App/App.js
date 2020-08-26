import React from "react";
import "./App.scss";
import Cards from "../Cards";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <h1 className="app__header">Ты сегодня покормил кота?</h1>
        <Cards />
      </div>
    </div>
  );
};

export default App;
