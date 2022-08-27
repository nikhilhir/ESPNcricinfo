

import NavbarComponent from "./Components/fw17_0230/NavbarComponent";
import Livescore from "./Components/LiveScore/Livescore";

import Mycarousal from "./Components/Mycarousal";

import MainRouter from "./Pages/MainRouter";


function App() {
  return (
    <div className="App">

      
      {/* <Footer/> */}

      <Mycarousal />
      <NavbarComponent />
     

       <Livescore/> 

       <MainRouter /> 


    </div>
  );
}

export default App;
