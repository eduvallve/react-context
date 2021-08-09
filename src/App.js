import React, {useState, useContext} from 'react';
import Button from './Button';
import Card from './Card';
import Form from './Form';

const themes = {
  'dark':{
    backgroundColor:'black',
    color:'white'
  },
  'light':{
    backgroundColor:'white',
    color:'black'
  }
}

export const ThemeContext = React.createContext();

function App(){
  return(
    <div>
      <Form />
    </div>
  );
}

export default App;