import React from 'react';
import './App.css';
import TypeAheadDropDown from './TypeAheadDropDown';
import cities from './indianCities.js'
function App() {
 return (
   <div className="App">
       <TypeAheadDropDown iteams={cities} />
   </div>
 );
}
 
export default App;