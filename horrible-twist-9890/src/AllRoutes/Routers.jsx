import { Routes,Route } from "react-router-dom";
import Home from "../Home";
import New_cloth from "../New_Cloth";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new_cloths" element={<New_cloth/>}/>
        </Routes>
    )
}
export default AllRoutes