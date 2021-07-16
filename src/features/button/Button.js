import { useState, useEffect } from 'react';
import { Cat } from '../cat/Cat';
import styles from './Button.module.css';


export function Button({getNewCat}) {
    const [newCatImage, setNewCatImage] = useState([])
    const [hasError, setHasError] = useState(false)

    const handleClick = () => {
        async function getData() {
          await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${4}`)
            .then((res) => res.json())
            .then(data => setNewCatImage(data))
            .catch(err => setHasError(true))
        }
        console.log(newCatImage)
        getData();
      }

    //   getNewCat = () => {
    //     <div>
    //     {newCatImage.length !== 0 &&newCatImage.map((cat, index) => {return <div key = {index} className="gallery__item">           
    //         <img src={cat.url} alt="Alt text" className="gallery__img"  width="300" height="300"></img>
    //     </div>})}
    // </div>
    //   }

    return <div>
     <button onClick={handleClick} className={styles.buttontCss}>Upload</button>   
       
    </div>
}