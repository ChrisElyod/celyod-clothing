import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact component={HomePage} path='/' />
        <Route component={HatsPage} path='/shop/hats' />
      </Switch> 
    </div>
  );
}

export default App;
