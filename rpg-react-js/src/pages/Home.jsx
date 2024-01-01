import './styles.css'
import { Helmet } from 'react-helmet';
import Game from "../components/Game.jsx"

function Home() {
    return(
        <>
            <Helmet>
                <title>RPG - Dragon Repeller</title>
            </Helmet>
            <Game></Game>
    </>
    )
}

export default Home;