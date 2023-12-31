import HeaderOne from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Navbar from "../components/Navbar.jsx";


export default function About() {
    return(
        <>
            <Navbar/>
            <HeaderOne/>
            <p>Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! </p>
            <Footer/>
        </> // Fragment to run more than one component. Without this fragment, this function will not run.
    );
}