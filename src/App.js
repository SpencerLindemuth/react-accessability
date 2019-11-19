import React, { useState, useEffect } from 'react';
import './App.css';
import { useForm } from './components/useForm'
import Card from './components/card'
import colors from './data/colors'
import ColorCard from './components/colorCard'

function App() {

  const [values, handleChange] = useForm({firstName: '', lastName: '', email: '', phone: '', businessName: ''})
  const [backgroundColor, setBackgroundColor] = useState('white')
  

  return (
    <div className="App">
      <p>Let's make you a business card!</p>
      <label >Business Name</label>
      <br />
      <input value={values["businessName"]} onChange={handleChange} name="businessName" />
      <br />
      <label >Full Name</label>
      <br />
      <input value={values["fullName"]} onChange={handleChange} name="fullName" />
      <br />
      <label >Email</label>
      <br />
      <input value={values["email"]} onChange={handleChange} name="email" />
      <br />
      <label >Phone Number</label>
      <br />
      <input value={values["phone"]} onChange={handleChange} name="phone" />
      <br />
      <br />
      <Card fullName={values.fullName} email={values.email} phone={values.phone} businessName={values.businessName} backgroundColor={backgroundColor}/>
      <br />
      <label>Card Background Color</label> 
      <br />   
      <div id="color-grid"> 
        {colors().map(element => {
          return <ColorCard colorName={element.name} handleClick={setBackgroundColor} />
        })}
      </div>
    </div>
  );
}

export default App;
