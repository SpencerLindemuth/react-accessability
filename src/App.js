import React, { useState, useEffect } from 'react';
import './App.css';
import { useForm } from './components/useForm'
import Card from './components/card'
import colors from './data/colors'
import ColorCard from './components/colorCard'
import fonts from './data/fonts'

function App() {

  const [values, handleChange] = useForm({firstName: '', lastName: '', email: '', phone: '', businessName: ''})
  const [backgroundColor, setBackgroundColor] = useState('white')
  const [selectedFont, setSelectedFont] = useState({font: 'arial', name: 'Arial'})
  

  return (
    <div className="App">
      <p>Let's make you a business card!</p>
      <label htmlFor="businessName" >Business Name</label>
      <br />
      <input id="businessName" value={values["businessName"]} onChange={handleChange} name="businessName" />
      <br />
      <label htmlFor="fullName" >Full Name</label>
      <br />
      <input id="fullName" value={values["fullName"]} onChange={handleChange} name="fullName" />
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input id="email" value={values["email"]} onChange={handleChange} name="email" />
      <br />
      <label htmlFor="phone">Phone Number</label>
      <br />
      <input id="phone" value={values["phone"]} onChange={handleChange} name="phone" />
      <br />
      <label htmlFor="selectFont">Business Card Font</label>
      <br />
      <select id="selectFont" onChange={(ev) => {
        setSelectedFont({font: ev.target.value, name: ev.target.value})}
        }
      value={selectedFont.name}>
        {fonts().map(font => <option value={font.font}>{font.name}</option>)}/>
      </select>
      <br />
      <br />
      <Card fullName={values.fullName} email={values.email} phone={values.phone} businessName={values.businessName} backgroundColor={backgroundColor} font={selectedFont}/>
      <br />
      <label>Card Background Color</label> 
      <br />   
      <div id="color-grid"> 
        {colors().map(element => {
          return <ColorCard colorName={element.name} handleClick={setBackgroundColor}/>
        })}
      </div>
    </div>
  );
}

export default App;
