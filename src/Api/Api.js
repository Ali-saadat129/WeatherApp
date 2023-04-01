// axios for fetch data
import axios from "axios"


const Getapi = async (setdata,City) => {
    const Url = `https://api.weatherapi.com/v1/current.json?key=ded7eb6daea94485bc2130029232903&q=Tehran`
    // const Url = "https://jsonplaceholder.typicode.com/todos/1"
    const response = await axios.get(Url)
    setdata(response.data)
    // return response.data
};

export  {Getapi};