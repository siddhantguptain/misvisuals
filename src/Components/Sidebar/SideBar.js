import React from "react";
import logo from '../../Assets/MisVisLOGO.png'
import './SideBar.css'
import { FaHome } from 'react-icons/fa';
import { HiTemplate,HiPresentationChartLine  } from 'react-icons/hi';
import { BiMailSend,BiSolidBarChartAlt2 } from 'react-icons/bi';
import { BsFillBuildingsFill } from 'react-icons/bs';

const SideBar =()=>{
    return(
        <div className='sidebar grid'>
            <div className='logoDiv flex'>
                <img src={logo} alt='mis Visuals'/>
                {/* <h2>MIS_Visuals</h2> */}
            </div>
            <div className="menuDiv">
                <ul className="menuLists grid">
                   <li className="listItems">
                    <a href="#" className="menuLink Flex">
                        <FaHome className="icon"/>
                        <span className="smallText">Home</span>
                    </a>
                   </li>
                   <li className="TempItem">
                    <a href="#" className="menuLink Flex">
                        <HiTemplate className="icon"/>
                        <span className="smallText">Templates</span>
                     </a>
                                   <br />  <br />    
                                 <ul className="tempLists grid">
                                     <li className="listItems">
                                      <a href="#" className="menuLink Flex">
                                          <BsFillBuildingsFill className="icon"/>
                                          <span className="smallText">Entire Night Attn.</span>
                                      </a>
                                     </li>
                                     <li className="listItems">
                                      <a href="#" className="menuLink Flex">
                                          <HiPresentationChartLine className="icon"/>
                                          <span className="smallText">Spans Attn.</span>
                                      </a>
                                     </li>
                                     <li className="listItems">
                                      <a href="#" className="menuLink Flex">
                                          <BiSolidBarChartAlt2 className="icon"/>
                                          <span className="smallText">Productivity Tracker</span>
                                      </a>
                                     </li>

                                  </ul>
                    
                   </li>
                   <li className="listItems">
                    <a href="#" className="menuLink Flex">
                        <BiMailSend className="icon"/>
                        <span className="smallText">Contact</span>
                    </a>
                   </li>

                </ul>
            
            </div>
        </div>
    )
}
export default SideBar;