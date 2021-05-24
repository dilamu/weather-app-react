import React from "react";
import TodaysDate from "./TodaysDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
         <h1>
            {props.data.city}
        </h1>
        <ul>
            <li>
               <TodaysDate date={props.data.date} />
            </li>
            <li className="text-capitalize">
                {props.data.description}
            </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <div className="float-left">
                    <WeatherIcon code={props.data.icon} />
                </div>
            <WeatherTemperature celsius={props.data.temperature}/>
            
             </div>
            <div className="col-6">
           
            <ul>
                <li>Precipitation: 1%</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} mph</li>
            </ul>
            </div>
        </div>
    </div>
    );
}