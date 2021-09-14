import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { getAuth } from '@firebase/auth';
import { createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component';

import { setCurrentUser } from './redux/user/user.action'

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    const auth = getAuth();
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth && userAuth.displayName) {
        const userDoc = await createUserProfileDocument(userAuth);        
        setCurrentUser({
          id: userDoc.id,
          ...userDoc.data(),
        })
      } else {
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact component={HomePage} path='/' />
          <Route component={ShopPage} path='/shop' />
          <Route component={SignInAndUp} path='/signin' />
        </Switch> 
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
