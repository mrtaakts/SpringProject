import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './login';
import Tablet from './Tablet';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">

          
            <Switch>
            <Route exact path="/" component={Tablet}/>
            <Route path="/login" component={Login}/>
              
            </Switch>
          </div>
        </BrowserRouter>

    );
  }
}

export default App;
