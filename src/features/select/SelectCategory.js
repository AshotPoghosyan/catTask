import { useEffect, useState } from 'react'
import { Button } from '../button/Button'
// import { NavLink, Route } from 'react-router-dom'
import styles from './Select.module.css';


function capitalizeName(name) {
    return name.replace(/\b(\w)/g, s => s.toUpperCase());
  }

export function SelectCategory() {
    const [options, setOption] = useState([])


    useEffect(() => {
        async function getData() {
          await fetch("https://api.thecatapi.com/v1/categories ")
            .then((res) => res.json())
            .then(data => setOption(data))
        }
    
        getData();
        
      }, [])

    
  return (
  <div>
    <select className={styles.selectCss}> 
        <option value="none" selected disabled hidden>
                Select an Option
        </option>
        { options.length !== 0 && 
            options.map((option, index) => <option key = {index} value={option.name}> {capitalizeName(option.name)} </option>)} 
    </select>              
  </div>)
}
