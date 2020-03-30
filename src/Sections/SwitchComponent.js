import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InfectedCountries from '../Components/InfectedCountries/InfectedCountries';
import InfectedTable from '../Components/InfectedTable/InfectedTable';
import hero from '../images/covid home.png';
import LineChart from '../Components/Charts/LineChart';
import PieChart from '../Components/Charts/PieChart';


const SwitchComponent = () =>{
    return (
        <Switch>
            <Route exact path="/">
                <div>
                    <img src={hero} alt="hero"/>
                </div>
            </Route>
            <Route exact path="/infected" component={InfectedTable} />
            <Route path="/infected/graphic" component={LineChart}/>
            <Route exact path="/countries" component={InfectedCountries} />
            <Route path="/countries/graphic"  component={PieChart}/>
        </Switch>
    )
}

export default SwitchComponent;