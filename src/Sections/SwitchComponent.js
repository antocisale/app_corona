import React from 'react';
import {Switch, Route} from 'react-router-dom';
import InfectedCountries from '../Components/InfectedCountries/InfectedCountries';
import InfectedTable from '../Components/InfectedTable/InfectedTable';
import hero from '../images/covid home.png';


const SwitchComponent = () =>{
    return (
        <Switch>
            <Route exact path="/">
                <div>
                    <img src={hero}/>
                </div>
            </Route>
            <Route path="/infected" component={InfectedTable} />
            <Route path="/countries" component={InfectedCountries} />
        </Switch>
    )
}

export default SwitchComponent;