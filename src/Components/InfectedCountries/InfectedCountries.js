import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {API_COUNTRIES, handleError} from '../../config';
import PieChart from '../Charts/PieChart';

const InfectedCountries = () =>{
    const [infectedCountries,setInfectedCountries] = useState([]);
    
    useEffect(()=>{
        componentDidMount();
    },[])

    const componentDidMount = async()=>{
        try {
        const res = await Axios.get(API_COUNTRIES);
            setInfectedCountries(res.data);
        } catch (err) {
            handleError();
        }
    }
        
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
            <PieChart data={infectedCountries}></PieChart>
        </div>
        )
}

export default InfectedCountries;