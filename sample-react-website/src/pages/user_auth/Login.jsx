import React, {useState} from "react";
import './Login.css'
import { auth } from './FirebaseConfig.jsx';
import { signInWithEmailAndPassword } from 'firebase/auth';
import user_icon from '../../assets/user.png'
import password_icon from '../../assets/password.jpg'
import AuthDetails from "./AuthDetails.jsx";
import HeaderOne from "../../components/Header.jsx";
import Navbar from "../../components/Navbar.jsx";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
        })
    }


    return (
        <>
            <Navbar/>
            <HeaderOne/>
            <AuthDetails />
        <div className='container'>
            <div className="inputs">
                <div className="input">
                    <form onSubmit={signIn}>
                        <div className="header">
                            <div className="text">Sign In</div>
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
                        <button type="submit" className="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login