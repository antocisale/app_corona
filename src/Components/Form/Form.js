import React, { useState, useContext } from 'react';
import Axios from 'axios';
import { API_INFECTED, handleError } from '../../config';
import infectedContext from '../../infectedContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../App.scss';



const NewInfected = () =>{
    const { setCounter, counter, show, showModal } = useContext(infectedContext);
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ country, setCountry ] = useState("");
    const [ age, setAge ] = useState(0);
    const [ alive, setAlive ] = useState("true");
    const [ gender, setGender ] = useState("false");

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const handleValidation =(data)=>{
        let formIsValid;

        if (!data){
            alert("Field cannot be empty");
            return formIsValid = false;
        }
        if (typeof data !== "undefined"){
            if(!data.match(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)){
                alert("Only Letters permitted");
                return formIsValid = false;
            }        
        }

        return formIsValid = true;

    }

    const changeToBoolean = data =>{
        let result = (data ==="true") ?  true : false;
        return result;
    }

    const clearData = (...data)=>{
        setFirstName("");
        setLastName("");
        setCountry("");
        setAge(0);
        setAlive("true");
        setGender("false");
    }

    const ucFirstAllWords = ( str )=>{
        if (str !="usa" && str != "USA"){
            let pieces = str.split(" ");
                for (let i = 0; i < pieces.length; i++ ){
                    let j = pieces[i].charAt(0).toUpperCase();
                    pieces[i] = j + pieces[i].substr(1);
            }
            return pieces.join(" ");
        }
        return str.toUpperCase();
    }

    const addNewInfected=(firstName, lastName, country, age, alive, gender)=>{
        let firstNameValidation = handleValidation(firstName);
        let lastNameValidation = handleValidation(lastName);
        let countryValidation = handleValidation(country);

        if (firstNameValidation && lastNameValidation && countryValidation){
            let booleanGender = changeToBoolean(gender);
            let booleanAlive = changeToBoolean(alive);
            let firstNameUpper = ucFirstAllWords(firstName);
            let lastNameUpper = ucFirstAllWords(lastName);
            let countryUpper = ucFirstAllWords(country);
            createInfectedPerson (firstNameUpper, lastNameUpper, countryUpper, age, booleanAlive, booleanGender);
            clearData();
            showModal();
        }
    }

    const createInfectedPerson = async (firstName, lastName, country, age, alive, gender) => {
        try {
            await Axios.post(API_INFECTED, {
                'first_name': firstName,
                'last_name': lastName,
                country,
                'live': alive,
                age,
                'female':gender
            }
            );
        } catch (err) {
            handleError();
        }
        return setCounter(counter+1);
    };

    return(
        <div className={showHideClassName}>
            <div className="form-container">
                <header className="form-header">
                    <div>
                        <button onClick={showModal} className="close-button">
                            <FontAwesomeIcon icon={faTimes}/>
                        </button>
                    </div>
                    <h2>Add new infected person</h2>
                </header>
                <form className="form">
                    <label htmlFor="first_name" className="name-fields">First Name</label>
                    <input 
                        type="text" 
                        id="first_name" 
                        className="complete-field"
                        value={firstName} 
                        onChange={e=>{setFirstName(e.target.value)}}
                        required/>
                    <label htmlFor="last_name" className="name-fields">Last Name</label>
                    <input 
                        type="text" 
                        id="last_name" 
                        className="complete-field"
                        value={lastName} 
                        placeholder="Last Name" 
                        onChange={e=>{setLastName(e.target.value)}}
                        required/>
                    <label htmlFor="country" className="name-fields">Country</label>
                    <input 
                        type="text" 
                        id="country" 
                        className="complete-field"
                        value={country} 
                        placeholder="Country" 
                        onChange={e=>{setCountry(e.target.value)}}
                        required/>
                    <div className="age-gender-container">
                        <div className="column-container">
                            <label htmlFor="age" className="name-fields">Age</label>
                            <input 
                            type="number" 
                            id="age" 
                            value={age} 
                            min="0"
                            placeholder="Age"
                            className="complete-field age-field" 
                            onChange={e=>{setAge(parseInt(e.target.value))}}/>
                        </div>
                        <div className="column-container">
                            <span className="name-fields">Gender</span>
                            <div>
                                <label htmlFor="male" className="name-fields">Male </label>
                                <input 
                                    id="male"
                                    type="radio" 
                                    value="false"
                                    checked={gender === "false"} 
                                    onChange={e=>{setGender(e.target.value)}}/>
                                <label htmlFor="female" className="name-fields">Female</label>
                                <input 
                                    id="female"
                                    type="radio" 
                                    value="true"
                                    checked={gender === "true"}
                                    onChange={e=>{setGender(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    
                    <span className="name-fields">Is the person alive?</span>
                    <div className="alive-answers-container">
                        <div>
                            <label htmlFor="alive" className="name-fields">Yes</label>
                            <input 
                                id="alive"
                                type="radio" 
                                value="true"
                                checked={alive === "true"} 
                                onChange={e=>{setAlive(e.target.value)}}/>
                        </div>
                        <div>
                            <label htmlFor="dead" className="name-fields">No</label>
                            <input 
                                id="dead"
                                type="radio" 
                                value="false"
                                checked={alive === "false"}
                                onChange={e=>{setAlive(e.target.value)}}/>
                        </div>
                    </div>
                    
                    <input 
                        type="submit" 
                        value="Add"
                        onClick={e=> {e.preventDefault();
                            addNewInfected(firstName, lastName,country,age, alive,gender)}}
                        className="button home"/>
                </form>
            </div>
        </div>

    )
}

export default NewInfected;