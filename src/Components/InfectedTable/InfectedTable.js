import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {API_INFECTED, handleError} from '../../config';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';


import './InfectedTable.scss';
import Download from '../Download/Download';
import LineChart from '../Charts/LineChart';
import NewInfected from '../Form/Form';

const InfectedTable = () =>{
    const [infectedPeople,setInfectedPeople] = useState([]);
    const [order, setOrder] = useState(faAngleDown);
    const [counter,setCounter] = useState(0);

    
    useEffect(()=>{
        getInfectedPeople();
    },[counter])

    const getInfectedPeople = async()=>{
        try {
        const res = await Axios.get(API_INFECTED);
            setInfectedPeople(res.data);
            setCounter(res.data.length);
        } catch (err) {
            handleError();
        }
    }

    const aliveClass = state =>{
        let aliveClass = state ? "alive" : "not-alive";
        return aliveClass;
    }

    const isAlive = state =>{
        let alive = state ? "Yes":"No";

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
        let clon = [...infectedPeople];
        if(order ===faAngleDown){
            clon.sort((a, b) => (a.age > b.age) ? 1 : -1);
            setInfectedPeople (clon);
            setOrder(faAngleUp);
        }else{
            clon.sort((a, b) => (a.age > b.age) ? -1 : 1);
            setInfectedPeople (clon);
            setOrder(faAngleDown);
        }

    }

    return(
        <div>
            <h3>Total number of infected People: <span>{counter}</span></h3>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Country</th>
                        <th>Alive</th>
                        <th><button onClick={sort}>Age <FontAwesomeIcon icon={order}/></button></th>
                        <th>Infected Date</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {infectedPeople.map(person =>{
                        return <tr key={person.id} className={aliveClass(person.live)}>
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
            <Download data={infectedPeople}></Download>
            <LineChart data={infectedPeople}></LineChart>
            <NewInfected setCounter={setCounter} counter={counter}></NewInfected>
        </div>
        )
}

export default InfectedTable;