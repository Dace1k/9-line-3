
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import {Requester} from "./pages/Requester.tsx";

import Responder from "./pages/Responder.tsx";
import {Dispatcher} from "./pages/Dispatcher.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <h4>
                <section id="center">
                    <nav className="NavBar">
                        <Link to="/pages/requester">Requester</Link>
                        <Link to="/pages/responder">Responder</Link>
                        <Link to="/pages/dispatcher">Dispatcher</Link>
                    </nav>
                </section>
                    </h4>

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
