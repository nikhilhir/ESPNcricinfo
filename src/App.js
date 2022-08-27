import "./App.css";
import NavbarComponent from "./Components/fw17_0230/NavbarComponent";
import Top from "./Components/fw17_0230/Top";
import Livescore from "./Components/LiveScore/Livescore";

import Mycarousal from "./Components/Mycarousal";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainRouter from "./Pages/MainRouter";

// import Sidebar from "./Components/Sidebar/Sidebar";

// import MainRouter from "./Pages/MainRouter";

function App() {
  return (
    <div className="App">
      <Top />
      <Mycarousal />
      <NavbarComponent />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ESPN CLONE
        </a>
      </header> */}

      <Livescore />

      {/* <MainRouter /> */}
    </div>
  );
}

export default App;
