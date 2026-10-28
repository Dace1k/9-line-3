
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import Requester from "./pages/Requester.tsx";
import Responder from "./pages/Responder.tsx";
import Dispatcher from "./pages/Dispatcher.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <section id="center">

                    <nav className="NavBar">
                        <Link to="pages/Requester">Requester</Link>
                        <br/>
                        <Link to="pages/Responder">Responder</Link>
                        <br/>
                        <Link to="pages/Dispatcher">Dispatcher</Link>
                        <br/>
                    </nav>


                </section>

                <section>
                    <Routes>
                        <Route path="/pages/requester" element={<Requester/>}/>
                        <Route path="/pages/responder" element={<Responder/>}/>
                        <Route path="/pages/dispatcher" element={<Dispatcher/>}/>
                    </Routes>
                </section>
            </BrowserRouter>
            <section id="spacer"></section>
        </>
    )
}

export default App
