import { Route,Routes,BrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
     );
}
 
export default Router;