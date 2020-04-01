import React from 'react';
import { Link } from 'react-router-dom';
import useSwitchBoolean from '../Hooks/switchBoolean';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import '../App.scss'; 


const Links = ()=>{
    const [menu,toggleMenu] = useSwitchBoolean();
    

    const showMenu = e=>{
        toggleMenu();
    };

    const unwrapMenu = menu ? "nav wrapper shown" : "nav wrapper";

    return(
        <div className="header">
            <div>
                <h1 className="title">Coronavirus</h1>
            </div>
            <button className="burger-menu-button"onClick={showMenu}>
                {
                    menu ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>
                }
                
            </button>
            <nav className={unwrapMenu}>
                <Link to="/">
                    Home
                </Link>
                <Link to="/infected">
                    Infected People
                </Link>
                <Link to="/countries">
                    Countries
                </Link>
            </nav>
        </div>

    )
}


export default Links;