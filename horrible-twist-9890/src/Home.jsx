import { About } from "./About";
import { FixNavbar } from "./FixNavbar/FixNavbar";
import { Footer } from "./Footer/Footer";
import { FrontBody } from "./FrontBody/FrontBody";
import BasicUsage from "./MidNavbar/MidNavbar";
import Avter from "./MidNavbar/TopAvtar";


function Home(){
    return(
        <>
          <Avter/>
      
      
      <FixNavbar/>
      <FrontBody/>
      
      <About/>
      <Footer/>
        </>
    )
}

export default Home