import React from "react";
import TodaysDate from "./TodaysDate";


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
                <img src= {props.data.iconUrl}
                alt={props.data.description}/>
            <span className="Temperature">{Math.round(props.data.temperature)}</span>
            <span className="Unit">°F </span>
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