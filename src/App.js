import React, { useState, useEffect, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Header from "./components/header";
function App() {
  //初始state
  const [state, setState] = useState({ text: "hi , what's up , bro !" });

// 类似componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    setTimeout(() => setState(({text})=>({text:text+"hey hey hey!!!" })), 2000);
  },[]);
  return (
    <div className="App">
      <Header></Header>
      <div>{state.text}</div>
  
    </div>
  );
}

export default App;
