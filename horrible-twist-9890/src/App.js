// import logo from './logo.svg';
import './App.css';
import { Nav } from './TopNaerbar/TopNav';
import BasicUsage from './MidNavbar/MidNavbar';
import { FixNavbar } from './FixNavbar/FixNavbar';
import { FrontBody } from './FrontBody/FrontBody';
import { Footer } from './Footer/Footer';

import AllRoutes from './AllRoutes/Routers';

// eslint-disable-next-line
function App() {
  return (
    <div className="App">
      <AllRoutes/>
    
    </div>
  );
}

export default App;
