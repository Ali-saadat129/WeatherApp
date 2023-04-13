// Api
import {Getapi} from './Api/Api.js'
// Hooks
import { useState,useEffect } from 'react';
import axios from 'axios';
// css
import Styles from "./styles/App.module.css"
// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
// icons and picture
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip } from '@fortawesome/free-solid-svg-icons'
import suncloudy from './icons/cludy_sun.png'




function App() {

  const [data,setdata] = useState([])
  const [city1,setcity1] = useState([])
  const [city2,setcity2] = useState([])
  const [city3,setcity3] = useState([])

  const datalist = []

  useEffect( () => {
    
    Getapi(setdata,"Tehran")
    Getapi(setcity1,"Tehran")
    Getapi(setcity2,"London")
    Getapi(setcity3,"New-york")

  },[])
  

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

      <div className={`container-fluid ${Styles.middle_part}`}>
        <div className={` row ${Styles.middle_row}`}>

          <div className={`col-6`}> 
            <h1>10</h1>
          </div>

          <div className={`col-6`}>
            <h2>{data?.location?.name}</h2>
            <h2><img alt='weathericons' src={suncloudy}></img></h2>
          </div>

        </div>
      </div>
      
      <div className={` container-fluid ${Styles.footer}`} >
        <div className={` row ${Styles.footer_parent}`}>

      
          <div className={`col-4 ${Styles.globalpart}`}>
           <h3>{city1?.location?.country} /{city1?.location?.name}</h3>
            <p>Time : {city1?.location?.localtime}</p>
            <p> Temp : {city1?.current?.temp_c} </p>
          </div>

          <div className={`col-4 ${Styles.globalpart}`}>
           <h3>{city2?.location?.country} /{city2?.location?.name}</h3>
            <p>Time : {city2?.location?.localtime}</p>
            <p> Temp : {city2?.current?.temp_c} </p>
          </div>

          <div className={`col-4 ${Styles.globalpart}`}>
           <h3>{city3?.location?.country} /{city3?.location?.name}</h3>
            <p>Time : {city3?.location?.localtime}</p>
            <p> Temp : {city3?.current?.temp_c} </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
