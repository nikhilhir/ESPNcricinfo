
import "./App.css";
import Livescore from "./Components/LiveScore/Livescore";
 import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
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
      <Sidebar/>
      {/* <Livescore/> */}
    </div>
  );
}

export default App;
