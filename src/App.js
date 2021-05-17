import './App.css';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import {CountUp} from "./components/memo/CountUp";
import {Routes} from "./components/routing/Routes"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
