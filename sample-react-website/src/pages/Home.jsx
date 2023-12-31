import HeaderOne from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from "../components/Navbar.jsx";
import './home.css'

export default function Home() {
    return(
        <>
            <div>
                <Navbar/>
                <HeaderOne/>
                <Footer/>
            </div>
        </> // Fragment to run more than one component. Without this fragment, this function will not run.
    );
}


