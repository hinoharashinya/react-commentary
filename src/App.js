import './App.css';
import {BrowserRouter, Link} from "react-router-dom";
import {Routes} from "./components/routing/Routes"
import { UserProvider } from './providers/UserProvider';

function App() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;
