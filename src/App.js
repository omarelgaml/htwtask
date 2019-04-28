import React, { Component } from 'react';
import './App.css';
import Game from './components/Game';
import HallOfFame from './components/HallOfFame';
import Glossary from './components/Glossary';
import 'bootstrap/dist/css/bootstrap.css';

//import {  Route, Switch } from 'react-router'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends Component {
  
  constructor(props){
     
    super(props);
    this.state = {
      
    }
    
  }


  render(){
    
    return (
      
      <div>
        
        
    
         <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Glossary} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/hallOfFame" component={HallOfFame} />
          </Switch>
         </BrowserRouter>
      </div>
      
    );
  }
}

 export default App;
