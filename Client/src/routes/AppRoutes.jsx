import {Route, Routes} from 'react-router-dom';
import LandingPage from "../pages/main/LandingPage.jsx";
import MainLayout from "../layouts/mainLayout.jsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<LandingPage/>}/>
            </Route>
        </Routes>
    )
}
