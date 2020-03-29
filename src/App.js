import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Links from './Sections/LInks';
import SwitchComponent from './Sections/SwitchComponent';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Links></Links>
        <SwitchComponent></SwitchComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
