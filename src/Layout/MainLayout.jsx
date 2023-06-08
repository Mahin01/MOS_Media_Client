import { Outlet } from 'react-router-dom';
import NavMenu from '../Shared/Navbar/NavMenu';
import Footer from '../Shared/Footer/Footer';

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