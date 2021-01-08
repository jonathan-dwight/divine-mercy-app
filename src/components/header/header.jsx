import React from "react";
import { Link } from "react-router-dom";
// import SignInAndSignUp from "../../pages/sign-in-and-sign-up"

const Header = () => {
    // can change this to use be dynamic

    return (
        <>
            <Link className="login-signup" to={'/signin'}>Sign In</Link>
        </>
    )
}

export default Header;