import React, { useState, useEffect, } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import { cleanup } from "@testing-library/react";


export default function WeatherForecast(props) {  
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]); 

    function handleResponse(response)   {
        setForecast(response.data.daily);
        setLoaded(true);
}

if (loaded) {
  return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col-2">
                <ForecastDay data={forecast[0]}/>
            </div>
              <div className="col-2">
                <ForecastDay data={forecast[1]}/>
            </div>
             <div className="col-2">
                <ForecastDay data={forecast[2]}/>
            </div>
             <div className="col-2">
                <ForecastDay data={forecast[3]}/>
            </div>
             <div className="col-2">
                <ForecastDay data={forecast[4]}/>
            </div>
            

        </div>
    </div>
);
   
} else { 
    let apiKey = "57002d4532decad95ef606ed2fed7ca8";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   
    axios.get(apiUrl).then(handleResponse);
           
    return null;
   }
} 


//follow the code
//give code to each file to follow each code