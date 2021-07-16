import { useState, useEffect } from 'react';
import { Button } from '../button/Button';
// import { useSelector, useDispatch } from 'react-redux';
import styles from './Cat.module.css';




export function Cat({getNewCat}) {
  const [catImage, setCatImage] = useState([])
  // const [newCatImage, setNewCatImage] = useState([])
  const [hasError, setHasError] = useState(false)

  

      useEffect(() => {
        async function getData() {
          await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${5}`)
            .then((res) => res.json())
            .then(data => setCatImage(data))
            .catch(err => setHasError(true))
        }

        getData();
        
      }, [])
    

  return (
    <div>
      <div className={styles.container}>

            {hasError ? <div>Error occured.</div> 
            :  catImage.length !== 0 && 
               catImage.map((cat, index) => {return <div key = {index} className="gallery__item">           
                <img src={cat.url} alt="Alt text" className="gallery__img"  width="300" height="300"></img>
            </div>})}
            {/* {getNewCat(newCatImage)} */}

      </div>
     
    </div>
  );
}



