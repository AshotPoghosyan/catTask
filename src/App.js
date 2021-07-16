import React from 'react';
import { Cat } from './features/cat/Cat';
import { SelectCategory } from './features/select/SelectCategory';
import './App.css';
import { Button } from './features/button/Button';

function App() {


  
  return (
    <div>
     
        <Cat />
        <SelectCategory />
        <Button />
        
    </div>
  );
}

export default App;
