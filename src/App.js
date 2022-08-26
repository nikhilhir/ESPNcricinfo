import "./App.css";
import NavbarComponent from "./Components/fw17_0230/NavbarComponent";
import Livescore from "./Components/LiveScore/Livescore";
import Mycarousal from "./Components/Mycarousal";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainRouter from "./Pages/MainRouter";

function App() {
  return (
    <div className="App">
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
      <Sidebar />
      {/* <Livescore/> */}

      <MainRouter />
    </div>
  );
}

export default App;
