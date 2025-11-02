import {Outlet} from "react-router-dom";
import NavBar from "../components/main/navbar/NavBar.jsx";

const MainLayout = () => {
    return (<>
        <NavBar></NavBar>
        <Outlet></Outlet>
        {/*    footer*/}
    </>)
}
export default MainLayout