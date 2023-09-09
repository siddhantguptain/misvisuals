import React from "react";
import './Home.css';
const Home = () =>{
    return(
        // "Your Data, Our Canvas"
        // Draft 1:
        // excels at turning complex data into clear, impactful visualizations. Our innovative approach  transform raw information into actionable insights, enhance decision-making, and optimize business processes, helping you achieve efficiency, transparency, and sustainable growth.
        <>
            <div classname='homeContainer'>
                <div classname='homeSummary'>
                <div classname='homeCompanyName'>
                    Management Information Systems <span>Visualization</span>
                </div>
                <div classname='homeCompanyTagline'> 
                    Your Data, <span>Our Canvas</span>
                </div>
                <div classname='homeCompanySummary'>
                    Excels at turning complex data into clear, impactful visualizations. Our innovative approach  transform raw information into actionable insights, enhance decision-making, and optimize business processes, helping you achieve efficiency, transparency, and sustainable growth.
                </div>
                </div>
                <div classname='homeVisual'></div>
            </div>
        </>
    );

}
export default Home;