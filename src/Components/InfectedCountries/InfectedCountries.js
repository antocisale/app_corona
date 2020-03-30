import React, { useState, useContext } from 'react';
import PieChart from '../Charts/PieChart';
import infectedContext from '../../infectedContext'

const InfectedCountries = () =>{
    const { infectedCountries } = useContext(infectedContext);

    return(
        <div>
            <table>
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
            <a href={"/countries/graphic"}>Show Graphic</a>
        </div>
        )
}

export default InfectedCountries;