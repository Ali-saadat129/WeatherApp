import './App.css';

// Api
import {Getapi} from './Api/Api.js'
// Hooks
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {

  const [data,setdata] = useState([])

  useEffect( () => {

    Getapi(setdata,"Tehran")

  },[])
  

console.log(data?.location?.name)

  return (
    <div className="App">
      <p>{data?.location?.name}</p>
    </div>
  );
}

export default App;
