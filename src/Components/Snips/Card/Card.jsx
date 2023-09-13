import React from "react";
import './Card.css';

import {
    CircularProgressbar ,buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Card = (props)=>{


    return (    
        <div className="Card">
            <div className="CardDetails">
                <span >{props.title}</span>
                <div className="Attenedance">
                     <span className="PresentFT">{props.PresentFT}</span>" "
                     <span className="LeaveFT">{props.LeaveFT}</span>
                     <span className="TotalFT">{props.TotalFT}</span>                     
                </div>
               
            </div>  
            <div className="CardChart">
            <CircularProgressbar
                    value={props.Percentage}
                    text={`${props.Percentage}%`}
                    circleRatio={0.75}
                    strokeWidth={9}
                    styles={buildStyles({
                      textColor: "#75e091",
                      pathColor: "#75e091", 
                      trailColor: "#f7afb2",
                      rotation: 1 / 2 + 1 / 8,
                    })}
                />
            </div>
        </div>

    );
}
export default Card;