import HeaderOne from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom';
import './home.css'
export default function Home() {
    return(
        <>
            <div>
                <HeaderOne/>
                <ul className="options">
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </ul>
                <Footer/>
            </div>
        </> // Fragment to run more than one component. Without this fragment, this function will not run.
    );
}


