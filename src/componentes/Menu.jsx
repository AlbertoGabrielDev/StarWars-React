import React from "react";
import "./Menu.css"
import { Link } from "react-router-dom";

const Menu = () => {
    return (

        <header className="menu">
            <Link className="nome" to="/planets">Planetas</Link>
            <Link  className="nome" to="/people">Pessoas</Link>
            <Link  className="nome" to="/starships">Naves</Link>

        </header>
    )

}

export default Menu;