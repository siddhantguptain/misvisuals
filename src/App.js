import './App.css';
import SideBar from "./Components/Sidebar/SideBar.js";
import ParseExcel from './Components/ParseExcel/ParseExcel.js';
import SpanData from './Components/SpanData/SpanData.js';


function App() {
  return (
    <div className="container">
      <SideBar />
     <div className="mainContainer">
     <ParseExcel />
     <SpanData />
     </div>
       

    </div>
  );
}

export default App;
