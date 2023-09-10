import React from "react";
import './Home.css';
const Home = () =>{
    return(
        // "Your Data, Our Canvas"
        // Draft 1:
        // excels at turning complex data into clear, impactful visualizations. Our innovative approach  transform raw information into actionable insights, enhance decision-making, and optimize business processes, helping you achieve efficiency, transparency, and sustainable growth.
        <>
            <div className='homeContainer'>
                <div className='homeSummary'>
                <div className='homeCompanyName'>
                    Management Information Systems <span className='homeCompanyNameEdit'>Visualization</span>
                </div>
                <div className='homeCompanyTagline'> 
                    Your Data, <div className='homeCompanyTaglineEdit'>Our Canvas.</div>
                </div>
                <div className='homeCompanySummary'>
                    Excels at turning complex data into clear, impactful visualizations. Our innovative approach  transform raw information into actionable insights, enhance decision-making, and optimize business processes, helping you achieve efficiency, transparency, and sustainable growth.
                </div>

                </div>
                <div className='homeVisual'>+IMG..+</div>
            </div>
        </>
    );

}
export default Home;