import './navbar.css'
import header_icon from '../assets/header_icon.png'
function Navbar() {
    return (
        <nav className="nav">
            <img src={header_icon} alt="Header Icon" className="header_icon"/>
            <ul>
                <li><a href="/home" className="nav_text">Home</a></li>
                <li><a href="/about" className="nav_text">About</a></li>
                <li><a href="/projects" className="nav_text">Projects</a></li>
                <li><a href="/login" className="nav_text">Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar