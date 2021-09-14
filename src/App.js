import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { getAuth } from '@firebase/auth';
import { createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const auth = getAuth();
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth && userAuth.displayName) {
        const userDoc = await createUserProfileDocument(userAuth);        
        this.setState({
          currentUser: {
            id: userDoc.id,
            ...userDoc.data(),
          }
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact component={HomePage} path='/' />
          <Route component={ShopPage} path='/shop' />
          <Route component={SignInAndUp} path='/signin' />
        </Switch> 
      </div>
    );
  }
  
}

export default App;
