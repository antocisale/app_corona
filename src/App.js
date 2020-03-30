import React, { useState,useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
import { API_INFECTED, API_COUNTRIES, handleError } from './config';
import infectedContext from './infectedContext';
import Links from './Sections/Links';
import SwitchComponent from './Sections/SwitchComponent';
import useSwitchBoolean from './Hooks/switchBoolean';
import './App.scss';


const App = ()=> {
  const [ infectedPeople, setInfectedPeople ] = useState([]);
  const [ counter, setCounter ] = useState(0);
  const [ infectedCountries, setInfectedCountries ] = useState([]);
  const [ show, toggleShow ] = useSwitchBoolean(false);
 
  const showModal = ()=>{
      toggleShow();
  };

  useEffect(()=>{
    getInfectedPeople();
    getInfectedCountries();
  },[counter]);

  const getInfectedPeople = async()=>{
    try {
    const res = await Axios.get(API_INFECTED);
        setInfectedPeople(res.data);
        setCounter(res.data.length);
    } catch (err) {
        handleError();
    }
  };

  const getInfectedCountries = async()=>{
    try {
    const res = await Axios.get(API_COUNTRIES);
        setInfectedCountries(res.data);
    } catch (err) {
        handleError();
    }
  };

  return (
    <div>
      <infectedContext.Provider value={
        {
          infectedPeople,
          setInfectedPeople,
          counter,
          setCounter,
          infectedCountries,
          show,
          showModal
        }
      }>
        <BrowserRouter>
          <Links></Links>
          <SwitchComponent></SwitchComponent>
        </BrowserRouter>
      </infectedContext.Provider>
    </div>
  );
}

export default App;
