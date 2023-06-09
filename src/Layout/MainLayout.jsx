import { Outlet } from 'react-router-dom';
import NavMenu from '../Pages/Shared/Navbar/NavMenu';
import Footer from '../Pages/Shared/Footer/Footer';


const MainLayout = () => {
    return (
        <>
            <NavMenu></NavMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};
export default MainLayout;