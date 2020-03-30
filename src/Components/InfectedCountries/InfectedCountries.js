import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import PieChart from '../Charts/PieChart';
import infectedContext from '../../infectedContext'

const InfectedCountries = () =>{
    const { infectedCountries } = useContext(infectedContext);

    return(
        <div className="infected">
            <header className="content-header">
                <h2>Countries infected by Coronavirus</h2>
                <div>
                    <a href={"/countries/graphic"}><span className="table-buttons"><FontAwesomeIcon icon={faChartLine}/> Show Graphic</span></a>
                </div>
            </header>
            <table className="table">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Infected People</th>
                    </tr>
                </thead>
                <tbody>
                    {infectedCountries.map(country =>{
                        return <tr key={country.id}>
                            <td>{country.name}</td>
                            <td>{country.infected}</td>
                            </tr> 
                    })}
                </tbody>
            </table>
        </div>
        )
}

export default InfectedCountries;