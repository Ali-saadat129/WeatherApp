// axios for fetch data
import axios from "axios"


const Getapi = async (setdata,City,setError) => {
    const Url = `https://api.weatherapi.com/v1/current.json?key=ded7eb6daea94485bc2130029232903&q=${City}`
    const response = await axios.get(Url).then(response => {    setdata(response.data)
         setError(false)      })
    // setdata(response.data)
    .catch((error) => {
        setError(true)
    })
};

export  {Getapi};
