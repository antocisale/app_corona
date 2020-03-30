import React from 'react';
import {Link} from 'react-router-dom';


const Links = ()=>{
    return(
        <div>
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