import './App.css';
import {BrowserRouter, Link} from "react-router-dom";
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
        <br />
        <Link to="/countUp">CountUp</Link>
      </div>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
