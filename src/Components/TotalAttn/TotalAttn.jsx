import './TotalAttn.css';

import GroupAttn from "../GroupAttn/GroupAttn.jsx";
// Chart 
import {
    CircularProgressbar ,buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const TotalAttn = () =>{
    return(
       <>
            <div className='totalAttnContainer'>
              <div className='totalAttnSubContainer'>  
                <div className='totalAttnHead'>
                    <h3>Entire Span</h3>
                </div>
                <div className='totalAttnChart'>
                <CircularProgressbar
                    value={88}
                    text={`${88}%`}
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
                <div className='totalAttnData'>
                <div className='totalAttnDataSubOne'>
                    <h2 className='totalAttnDataPresent'>429 / <span className='totalAttnDataTotal'>469</span></h2>
                </div>

                <div className='totalAttnDataSubTwo'></div>

                </div>
            </div>
            
            <GroupAttn />
       </>
    );
}
export default TotalAttn;