import './TotalAttn.css';

// Chart 
import {
    CircularProgressbar ,buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const TotalAttn = () =>{
    return(
       <>
            <div className='totalAttnContainer'>
                <div className='totalAttnChart'>
                <CircularProgressbar
                    value={88}
                    text={`${88}%`}
                    circleRatio={0.75}
                    strokeWidth={9}s
                    styles={buildStyles({
                      textColor: "#75e091",
                      pathColor: "#75e091", 
                      trailColor: "#f7afb2",
                      rotation: 1 / 2 + 1 / 8,
                    })}
                />
                </div>
                <div className='totalAttnData'>Data</div>
            </div>
            
       </>
    );
}
export default TotalAttn;