import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import './App.css';
import {Route,Switch} from "react-router-dom";

const Hats = () => 
{
  return(
  <div>
    <h1>Hats</h1>
  </div>
)}

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/hats" component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
