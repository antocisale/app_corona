import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InfectedCountries from '../Components/InfectedCountries/InfectedCountries';
import InfectedTable from '../Components/InfectedTable/InfectedTable';
import hero from '../images/home.jpg';
import LineChart from '../Components/Charts/LineChart';
import PieChart from '../Components/Charts/PieChart';

import '../App.scss';


const SwitchComponent = () =>{
    return (
        <Switch>
            <Route exact path="/">
                <div  className="hero" style={{
                    backgroundImage:`url(${hero})`,
                }}>
                    <h1 className="title main">Coronavirus</h1>
                    <h2 className="title sub">Real Time Progress</h2>
                    <div>
                        <a href={'/infected'} ><span className="button home">Infected People</span></a>
                        <a href={'./countries'} ><span className="button home">Infected Countries</span></a>
                    </div>
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