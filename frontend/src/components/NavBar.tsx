// components/NavBar.tsx
import { NavLink, Route, Routes } from "react-router-dom";
import { Requester } from "../pages/Requester";
import Responder from "../pages/Responder";
import { Dispatcher } from "../pages/Dispatcher";

const pages = [
    { path: "/requester", label: "Requester", element: <Requester /> },
    { path: "/responder", label: "Responder", element: <Responder /> },
    { path: "/dispatcher", label: "Dispatcher", element: <Dispatcher /> },
];

function NavBar() {
    return (
        <>
            <nav className="NavBar">
                {pages.map((page) => (
                    <NavLink key={page.path} to={page.path}>
                        {page.label}
                    </NavLink>
                ))}
            </nav>

            <Routes>
                {pages.map((page) => (
                    <Route
                        key={page.path}
                        path={page.path}
                        element={page.element}
                    />
                ))}
            </Routes>
        </>
    );
}

export default NavBar;