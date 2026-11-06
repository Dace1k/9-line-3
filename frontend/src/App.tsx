import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
    );
}

export default App;