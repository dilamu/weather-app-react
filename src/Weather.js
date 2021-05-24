import React, { useState } from "react";
import TodaysDate from "./TodaysDate";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
   //const [ready, setReady] = useState({ ready: false });
    const [weatherData, setWeatherData] = useState({ ready: false });
   
    function handleResponse(response) {
      console.log(response.data);
        setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png",
});
}

if (weatherData.ready) {
        return ( <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Type city.." className="form-control" autoFocus="on"
            /> 
            </div> 
            <div className="col-3">
            <input type="submit" value="Search" className="Button w-100"/> 
             </div>
         </div> 
       </form>

        <h1>
            {weatherData.city}
        </h1>
        <ul>
            <li>
               <TodaysDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">
                {weatherData.description}
            </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src= {weatherData.iconUrl}
                alt={weatherData.description}/>
            <span className="Temperature">{weatherData.temperature}</span>
            <span className="Unit">°F </span>
            </div>
            <div className="col-6">
           
            <ul>
                <li>Precipitation: 1%</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} mph</li>
            </ul>
            </div>
        </div>
    
     </div>
);
} else {
    const apiKey = "57002d4532decad95ef606ed2fed7ca8";
    let city = "Guadalajara";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
}
}