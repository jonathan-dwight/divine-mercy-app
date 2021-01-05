import React, { useEffect } from 'react';
import './App.css';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveUser } from './action/user-action'

import { auth, createUserProfileDocument } from './firebase/firebase.util'

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
          {/* <Header />  */}
          <Switch>
            <Route path= '/signin' component={SignInAndSignUp} />

            <Redirect to='/' />
          </Switch>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setCurrentUser: user => dispatch(receiveUser(user))
  })
}

export default connect(null, mapDispatchToProps)(App);
