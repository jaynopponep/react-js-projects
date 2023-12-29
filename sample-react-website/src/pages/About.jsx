import HeaderOne from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'


export default function About() {
    return(
        <>
            <p>Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! Yummy pizza! </p>
            <HeaderOne/>
            <Footer/>
        </> // Fragment to run more than one component. Without this fragment, this function will not run.
    );
}