import './App.css';
// import Home from './Components/Home/Home.jsx';

import SideBar from "./Components/Sidebar/SideBar.js";
// import ParseExcel from './Components/ParseExcel/ParseExcel.js';
// import SpanData from './Components/SpanData/SpanData.js';

import TotalAttn from './Components/TotalAttn/TotalAttn.jsx';



function App() {
  return (
    <div className="container">
        {/* <SideBar />  */}
      <TotalAttn />
   
      {/* <Home />  */}
      
      
     {/* <div className="mainContainer">
     <ParseExcel />
     <SpanData />
     </div> */}
       
    </div>
  );
}

export default App;
