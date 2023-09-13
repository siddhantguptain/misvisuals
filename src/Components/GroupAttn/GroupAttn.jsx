import './GroupAttn.css';

// Chart 
// import {
//     CircularProgressbar ,buildStyles ,CircularProgressbarWithChildren } from "react-circular-progressbar";
// import 'react-circular-progressbar/dist/styles.css';


const GroupAttn =()=>{
    return(
        <>
            <div className='groupAttnContainer'>
                <div className='groupAttnContainerSub'>
                <div className='groupAttnContainerSub'></div>
                    <div className='groupAttnContainerSubGroupOne'></div>
                    <div className='groupAttnContainerSubGroupTwo'></div>

                </div>
                <div className='groupAttnContainerChart'>
                        Chart
                </div>

            </div>
        </>
    );
}
export default GroupAttn;