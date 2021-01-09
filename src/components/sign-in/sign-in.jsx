import React, { useState } from 'react';
import FormInput from '../form-input/form-input'
import { auth, signInWithGoogle } from '../../firebase/firebase.util'
import './sign-in.scss';

const SignIn = () => {
    
    const [userCredentials, setCredentials] = useState({ email: "", password: "" })

    const { email, password } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setCredentials({ email: "", password: ""})
        } catch(err) {
            console.log(err)
        }
    }

    const handleChange = (event) => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={handleChange}
                    label='email'
                    required/>
                
                <FormInput
                    type="password" 
                    name="password" 
                    value={password}
                    handleChange={handleChange}
                    label="password"
                    required />
                
                <div className="button">
                <button type="submit">Sign In</button>
                <button onClick={signInWithGoogle}>
                    Sign In with Google</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;