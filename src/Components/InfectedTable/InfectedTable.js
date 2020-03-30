import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import infectedContext from '../../infectedContext';
import '../../Sass/InfectedTable.scss';
import Download from '../Download/Download';
import LineChart from '../Charts/LineChart';
import NewInfected from '../Form/Form';

const InfectedTable = () =>{
    const { infectedPeople, setInfectedPeople, counter, setCounter, showModal } = useContext(infectedContext);
    const [ order, setOrder ] = useState(faAngleDown);

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
            <a href={"/infected/graphic"}>Show Graphic</a>
            <NewInfected setCounter={setCounter} counter={counter}></NewInfected>
            <button onClick={showModal}>Add</button>
        </div>
        )
}

export default InfectedTable;