import React, { useEffect } from 'react';
import './App.css';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveUser } from './action/user-action';
import { AuthRoute, ProtectedRoute } from "./util/route-util";

import { auth, createUserProfileDocument } from './firebase/firebase.util';
import Header from './components/header/header';
import HomePage from './pages/home/home-page';

function App({ setCurrentUser }) {
    useEffect(() => {
        let unsubscribeFromAuth = null;
        unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              
            });
          })
        } else {
          setCurrentUser(userAuth)
        }
        
      });

      return () => {
        unsubscribeFromAuth()
      }
    }, [setCurrentUser]) 

    return (
        <div>
          <Header /> 
          <Switch>
            <Route path= '/signin' component={SignInAndSignUp} />
            <Route path='/' component={HomePage}/>
            <Redirect to='/' />
          </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  }

}

const mapDispatchToProps = (dispatch) => {
  return ({
    setCurrentUser: user => dispatch(receiveUser(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
