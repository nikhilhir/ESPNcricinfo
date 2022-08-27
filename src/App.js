

import NavbarComponent from "./Components/fw17_0230/NavbarComponent";
import Top from "./Components/fw17_0230/Top";
import Livescore from "./Components/LiveScore/Livescore";

import Mycarousal from "./Components/Mycarousal";

import MainRouter from "./Pages/MainRouter";


// import Sidebar from "./Components/Sidebar/Sidebar";



function App() {
  return (
    <div className="App">


      <Mycarousal />
      <NavbarComponent />
    
      <Livescore />

       <MainRouter /> 


    </div>
  );
}

export default App;
