import React from 'react';
import { Link } from 'react-router-dom';

import '../App.scss';


const Links = ()=>{
    return(
        <div className="header">
            <div>
                <h1 className="title">Coronavirus</h1>
            </div>
            <nav>
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