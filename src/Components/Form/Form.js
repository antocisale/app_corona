import React, {useState} from 'react';
import Axios from 'axios';
import {API_INFECTED,handleError} from '../../config';




const NewInfected = ({setCounter, counter}) =>{
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [country,setCountry] = useState("");
    const [age,setAge] = useState(0);
    const [alive,setAlive] = useState("true");
    const [gender,setGender] = useState("false");

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
        setGender("false")
    }

    const addNewInfected=(firstName, lastName, country, age, alive, gender)=>{
        let firstNameValidation = handleValidation(firstName);
        let lastNameValidation = handleValidation(lastName);
        let countryValidation = handleValidation(country);

        if (firstNameValidation && lastNameValidation && countryValidation){
            let booleanGender = changeToBoolean(gender);
            let booleanAlive = changeToBoolean(alive);
            createInfectedPerson (firstName, lastName, country, age, booleanAlive, booleanGender);
            clearData();
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
        <form>
            <label htmlFor="first_name">
                <input 
                    type="text" 
                    id="first_name" 
                    value={firstName} 
                    placeholder="First Name" 
                    onChange={e=>{setFirstName(e.target.value)}}
                    required/>
            </label>
            <label htmlFor="last_name">
                <input 
                    type="text" 
                    id="last_name" 
                    value={lastName} 
                    placeholder="Last Name" 
                    onChange={e=>{setLastName(e.target.value)}}
                    required/>
            </label>
            <label htmlFor="country">
                <input 
                    type="text" 
                    id="country" 
                    value={country} 
                    placeholder="Country" 
                    onChange={e=>{setCountry(e.target.value)}}
                    required/>
            </label>
            <label htmlFor="age">
                <input 
                    type="number" 
                    id="age" 
                    value={age} 
                    min="0"
                    placeholder="Age" 
                    onChange={e=>{setAge(parseInt(e.target.value))}}
                    />
            </label>
            <label htmlFor="alive">
                <input 
                    id="alive"
                    type="radio" 
                    value="true"
                    checked={alive === "true"} 
                    onChange={e=>{setAlive(e.target.value)}}/>
                Alive
            </label>
            <label htmlFor="dead">
                <input 
                    id="dead"
                    type="radio" 
                    value="false"
                    checked={alive === "false"}
                    onChange={e=>{setAlive(e.target.value)}}/>
                Not Alive
            </label>
            <label htmlFor="male">
                <input 
                    id="male"
                    type="radio" 
                    value="false"
                    checked={gender === "false"} 
                    onChange={e=>{setGender(e.target.value)}}/>
                Male
            </label>
            <label htmlFor="female">
                <input 
                    id="female"
                    type="radio" 
                    value="true"
                    checked={gender === "true"}
                    onChange={e=>{setGender(e.target.value)}}/>
                Female
            </label>

            <input 
                type="submit" 
                placeholder="Add"
                onClick={e=> {e.preventDefault();
                    addNewInfected(firstName, lastName,country,age, alive,gender)}}/>
        </form>

    )
}

export default NewInfected;