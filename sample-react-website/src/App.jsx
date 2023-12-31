import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/user_auth/Login.jsx'
import SignUp from './pages/user_auth/SignUp.jsx'
import Projects from './pages/Projects.jsx'
import './global.css'
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
// Above code sets path for each page.
// - Index element means no path (straight localhost)
// - path="/home" sets path for localhost/home path.