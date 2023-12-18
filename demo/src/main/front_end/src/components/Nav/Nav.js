import { Link } from "react-router-dom";
import React from "react";
import './Nav.css';

function Nav() {
    return (
        <div>
            <div className="navbar">
                <Link className="navbarMeni" to={'/'}>Main</Link>
            </div>
        </div>
    );
}

export default Nav;