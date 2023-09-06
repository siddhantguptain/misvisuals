import React from "react";
import './Cards.css';

import { SpanData } from "../../../Data/Data.js";
import Card from "../Card/Card.jsx";

const Cards = ()=>{
      console.log(SpanData);
    return (    
        <div className="Cards">
            {SpanData.map((card , id)=>{
                return(
                    <div className="parentContainer">
                        <Card 
                           title={card.title}
                           color={card.color}
                           Percentage={card.Percentage}
                           TotalFT={card.TotalFT}
                           PresentFT={card.PresentFT}
                           LeaveFT={card.LeaveFT}
                        />
                    </div>
                )
            })}
        </div>

    );
}

export default Cards;