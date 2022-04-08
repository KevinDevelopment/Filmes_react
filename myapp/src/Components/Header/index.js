import React from "react";
import { Link } from "react-router-dom"
import './header.css'

function Header(){
    return(
        <header>           
            <Link className="logo" to="/">Filmaria</Link>
            <Link className="favoritos" to="/favoritos">Salvar</Link>
        </header>
    );
}
export default Header