// Api
import {Getapi} from './Api/Api.js'
// Hooks
import { useState,useEffect } from 'react';
import axios from 'axios';
// css
import Styles from "./styles/App.module.css"
// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip } from '@fortawesome/free-solid-svg-icons'





function App() {

  const [data,setdata] = useState([])

  useEffect( () => {

    // Getapi(setdata,"Tehran")

  },[])
  

console.log(data)

  return (
    <div className={`  ${Styles.App}`}>
      <div className={Styles.headermeno}> 
        <h1><FontAwesomeIcon icon={faGrip} /></h1>
      </div> 

      <div className={`${Styles.searchbar}`}>
          <div className={`${Styles.inputparentt}`}> 
            <input type="text" className={`form-control`} placeholder="Search your town " ></input>
          </div>
      </div>

    </div>
  );
}

export default App;
