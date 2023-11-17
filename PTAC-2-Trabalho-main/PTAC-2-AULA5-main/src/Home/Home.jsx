import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
   
    return (
        <div>
            <h1>Home</h1>
            <button to="/proxima-pagina"><Link to="/proxima-pagina">Próxima</Link></button>
        </div>

    );
}