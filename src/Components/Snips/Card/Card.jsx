import React from "react";
import './Card.css';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Card = (props)=>{


    return (    
        <div className="Card">
            <div className="Details">
                <span >{props.title}</span>
                <div className="Attenedance">
                     <span className="PresentFT">{props.PresentFT}</span>" "
                     <span className="LeaveFT">{props.LeaveFT}</span>
                     <span className="TotalFT">{props.TotalFT}</span>                     
                </div>
               
            </div>
            <div className="radialBar">
                <CircularProgressbar value={props.Percentage} text={`${props.Percentage}%`} />
            </div>
        </div>

    );
}
export default Card;