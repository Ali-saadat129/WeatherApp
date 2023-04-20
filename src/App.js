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
import snow from './icons/snow.png'
import sun from './icons/sun.png'
// backgpund color 
import snowback from './icons/pic/snowback.jpg'
import sunback from './icons/pic/sunback.jpg'


function App() {

  //  input and resive data 
  const [inputValue , setInputValue] = useState("")

  // resive data -use state
  const [data,setdata] = useState([])
  const [city1,setcity1] = useState([])
  const [city2,setcity2] = useState([])
  const [city3,setcity3] = useState([])

  // error handler
  const [error ,setError] = useState(false)
  // background
  const [bgstate , setbgstate] = useState(sunback)


  useEffect( () => {
    
    Getapi(setdata,"Tehran",setError)
    Getapi(setcity1,"Tehran",setError)
    Getapi(setcity2,"africa",setError)
    Getapi(setcity3,"vancouver",setError)

  },[])
  
  // value of input 
  const inputHandler = (event) => {
    setInputValue(event.target.value)
  }
  // searching function (send data to server and recive data with api)
  const searcher = (event) =>{
    if(event.key == 'Enter'){
      Getapi(setdata,event.target.value,setError)
      if(data?.current?.temp_c <10){
        setbgstate(snowback)
        console.log("now have to change");
      }else if(data?.current?.temp_c >10){
        setbgstate(sunback)
      }
    }
   
  }
  // open and close setting
  const openSetting= () => {
    const setting = document.querySelector('#setting')
    setting.style.display = 'block'
  } 
  const closeSetting = () => {
    const setting = document.querySelector('#setting')
    setting.style.display = 'none'
  }
// oncliclk on down part 
  const changedata = (city) => {
    setdata(city)
  }


  return (
    <div className={` App ${Styles.App}`}  style={{backgroundImage:`url(${bgstate})`}}>
      {/* ------------------------- Top part ------------------- */}
      <div className={Styles.headermeno}> 
        <h1 className={`${Styles.open}`} onClick={openSetting}><FontAwesomeIcon icon={faGrip} /></h1>
      </div> 

      <div className={`${Styles.searchbar}`}>
          <div className={`${Styles.inputparentt}`}> 
            <input type="text" className={`form-control ${Styles.input}`} placeholder="Search your town " value={inputValue} onChange={inputHandler} onKeyDown={searcher}></input>
            {error&&<p>name of the city is wrong . </p>}
          </div>
      </div>
      {/* ----------------------middle part --------------------- */}
      <div className={`container-fluid ${Styles.middle_part}`}>
        <div className={` row ${Styles.middle_row}`}>

          <div className={`col-6 ${Styles.dataName}`}> 
            <h1>{data?.current?.temp_c}℃ / {data?.current?.temp_f}°F </h1>
          </div>

          <div className={`col-6 ${Styles.dataName}`}>
            <h2>{data?.location?.name}</h2>
            <h2 className={`${Styles.conditionimage}`}><img alt='weathericons' src={suncloudy}></img></h2>
          </div>

        </div>
        <div className={`row `}>
          <div className=" col-2" >&nbsp;</div>
          <div className={`col-2 ${Styles.info_part}`}><h4>Condition : {data?.current?.condition?.text}</h4></div>
          <div className="col-1" >&nbsp;</div>
          <div className={`col-2 ${Styles.info_part}`}><h4>Wind speed : {data?.current?.wind_kph}</h4></div>
          <div className="col-1" >&nbsp;</div>
          <div className={`col-2 ${Styles.info_part}`}><h4>Time : {data?.location?.localtime}</h4></div>
          <div className="col-md-2" >&nbsp;</div>
        </div>
      </div>
      {/* -------------------------------- footer part ---------------------- */}

      <div className={` container-fluid ${Styles.footer}`} >
        <div className={` row ${Styles.footer_parent}`}>

      
          <div onClick={() => changedata(city1)} className={`col-4 ${Styles.globalpart}`}>
           <h3>{city1?.location?.country} /{city1?.location?.name}</h3>
            <p>Time : {city1?.location?.localtime}</p>
            <p> Temp : {city1?.current?.temp_c}℃  / {city1?.current?.temp_f} °F
            <span>{city1?.current?.temp_c <10 && <img src={snow}></img>}</span>
            <span>{10<city1?.current?.temp_c <15 && <img src={suncloudy}></img>}</span>
            <span>{city1?.current?.temp_c >20 && <img src={sun}></img>}</span>

            </p>
            <p>conditional : {city1?.current?.condition?.text}</p>
          </div>

          <div onClick={() => changedata(city2)} className={`col-4 ${Styles.globalpart}`}>
           <h3>{city2?.location?.country} /{city2?.location?.name}</h3>
            <p>Time : {city2?.location?.localtime}</p>
            <p> Temp : {city2?.current?.temp_c}℃ / {city2?.current?.temp_f} °F

            <span>{city2?.current?.temp_c <10 && <img src={snow}></img>}</span>
            <span>{10 < city2?.current?.temp_c < 15 && <img src={suncloudy}></img>}</span>
            <span>{city2?.current?.temp_c >20 && <img src={sun}></img>}</span>

             </p>
            <p>conditional : {city2?.current?.condition?.text}</p>

          </div>

          <div onClick={() => changedata(city3)} className={`col-4 ${Styles.globalpart}`}>
           <h3>{city3?.location?.country} /{city3?.location?.name}</h3>
            <p>Time : {city3?.location?.localtime}</p>
            <p> Temp : {city3?.current?.temp_c}℃  / {city3?.current?.temp_f} °F

            <span>{city3?.current?.temp_c <10 && <img src={snow}></img>}</span>
            <span>{10<city3?.current?.temp_c <15 && <img src={suncloudy}></img>}</span>
            <span>{city3?.current?.temp_c >20 && <img src={sun}></img>}</span>

            </p>
            <p>conditional : {city3?.current?.condition?.text}</p>
            
          </div>
        </div>
      </div>
      {/* ---------------------- ------------------------ */}

      <div id='setting' className={`${Styles.setting}`}>
        <p onClick={closeSetting} className={`${Styles.close}`}>close</p>
        <div className={` ${Styles.settingHeader}`}>
            <h4>alisaadt129@gmail.com</h4>
        </div>
        <div>
          <ul className={`list-group`}>
            <li className={`list-group-item`}>Home</li>
            <li className={`list-group-item`}>Github</li>
            <li className={`list-group-item`}>CV</li>
            <li className={`list-group-item`}>Aout us</li>
            <li className={`list-group-item`}>Help</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
