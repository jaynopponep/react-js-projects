import React, {useState} from "react";
import './Login.css'
import { auth } from './FirebaseConfig.jsx';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import user_icon from '../../assets/user.png'
import password_icon from '../../assets/password.jpg'
import AuthDetails from "./AuthDetails.jsx";
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <>
            <AuthDetails />
        <div className='container'>
            <div className="inputs">
                <div className="input">
                    <form onSubmit={signUp}>
                        <div className="header">
                            <div className="text">Create an account</div>
                            <div className="underline"></div>
                        </div>
                        <img src={user_icon} alt="User Icon" className="icon"/>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/><br/>
                        <img src={password_icon} alt="Password Icon" className="icon"/>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                        <button type="submit" className="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}
export default SignUp