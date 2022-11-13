import { FixNavbar } from "./FixNavbar/FixNavbar";
import { Footer } from "./Footer/Footer";
import BasicUsage from "./MidNavbar/MidNavbar";
import { NewAll } from "./NewAll/NewAll";
import { Nav } from "./TopNaerbar/TopNav";

function New_cloth(){
    return(
        <>
        <Nav/>
        
        <FixNavbar/>
        <NewAll/>
        <Footer/>
        </>
    )
}
export default New_cloth