import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {API_INFECTED} from '../../config';

import './InfectedTable.scss';

const handleError = err => {
    alert(`Error getting data from Api.`);
};

const InfectedTable = () =>{
    const [infected,setInfected] = useState([]);
    
    useEffect(()=>{
        componentDidMount();
    },[])

    const componentDidMount = async()=>{
        try {
        const res = await Axios.get(API_INFECTED);
                setInfected(res.data);
        } catch (err) {
            handleError();
        }
    }

    const isAlive = state =>{
        let alive;

        if(state){
            alive = "Yes";
        }else{
            alive = "No"; 
        }
        return alive;
    
    }

    const getSex = sex =>{
        let gender = sex ? "Female" : "Male";

        return gender;
    }

    const setDate = date=>{
        let modDate = date.slice(0,10);
        return modDate;
    }
    
    const sort = ()=>{
        let clon = [...infected];
        clon.sort((a, b) => (a.age > b.age) ? 1 : -1);
        setInfected (clon)
    }

    const renderInfected = list =>{
        list.map()
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                    <th>Alive</th>
                    <th><button onClick={sort}>Age</button></th>
                    <th>Infected Date</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
            {infected.map(person =>{
        return <tr key={person.id}>
            <td>{person.first_name}</td>
            <td>{person.last_name}</td>
            <td>{person.country}</td>
            <td>{isAlive(person.live)}</td>
            <td>{person.age}</td>
            <td>{setDate(person.infect_date)}</td>
            <td>{getSex(person.female)}</td>
            </tr> 
        })}
            </tbody>
        </table>
        )
}

export default InfectedTable;