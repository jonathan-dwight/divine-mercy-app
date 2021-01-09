import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { auth } from "../../firebase/firebase.util";
// import SignInAndSignUp from "../../pages/sign-in-and-sign-up"

const Header = (props) => {
    // can change this to use be dynamic
    const { currentUser } = props;
    let user = !currentUser ? (
         <Link className="login-signup" to={'/signin'}>Sign In</Link>
    ) : (
        <Link onClick={() => auth.signOut()} 
        className="login-signup" to={'/'}>Sign Out</Link>
    )
    return (
        <>
            {user}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps)(Header);