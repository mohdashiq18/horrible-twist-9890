// import logo from './logo.svg';
import './App.css';
import { Nav } from './TopNaerbar/TopNav';
import BasicUsage from './MidNavbar/MidNavbar';
import { FixNavbar } from './FixNavbar/FixNavbar';
import { FrontBody } from './FrontBody/FrontBody';

// eslint-disable-next-line
function App() {
  return (
    <div className="App">
      
      <Nav/>
      <BasicUsage/>
      <FixNavbar/>
      <FrontBody/>
    </div>
  );
}

export default App;
