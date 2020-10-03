import React from 'react';
import { Component } from 'react';
import Add from './components/add.js'
import Main from './components/main.js'
import Menu from './components/menu.js'
import Formulaire from './components/ajouter.js'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
    state ={ }
    render(){
        return (
        <BrowserRouter>
        <div className>
          <Menu/>
          <Add/>

          <Route path="/" component={Formulaire} /> 
           </div>
           </BrowserRouter>
       
      
   )
    }
}

export default App;
