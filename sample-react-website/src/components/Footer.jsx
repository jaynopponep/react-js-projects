import github_icon from '../assets/github_icon.png'
import linkedin_icon from '../assets/linkedin_icon.png'
function Footer(){
    return(
        <footer>
            <a href="https://github.com/jaynopponep" target="_blank" rel="noopener noreferrer">
                <img src={github_icon} alt="github_icon" className="github_icon"/>
            </a>
            <a href="https://www.linkedin.com/in/jay-noppone-pornpitaksuk-770462198/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin_icon} alt="linkedin_icon" className="linkedin_icon"/>
            </a>
        </footer>
    );
}

export default Footer;
// %copy = Copyright symbol, new Date().getFullYear shows current year.
