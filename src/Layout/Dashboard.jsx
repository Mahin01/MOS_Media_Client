import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu px-4 py-20 w-60 h-full bg-slate-800 text-white">
                    
                    { isAdmin  ?
                    <>
                        <li><Link to="/dashboard/student-home">Admin Home</Link></li>
                        <li><Link to="/dashboard/manage-classes">Manage Classes</Link></li>
                        <li><Link to="/dashboard/manage-users">Manage Users</Link></li> 
                    </> 
                    : isInstructor ?
                    <>
                        <li><Link to="/dashboard/instructor-home">Instructor Home</Link></li>
                        <li><Link to="/dashboard/add-class">Add a Class</Link></li>
                        <li><Link to="/dashboard/my-classes">My Classes</Link></li>
                    </>
                    :
                    <>
                        <li><Link to="/dashboard/student-home">Student Home</Link></li>
                        <li><Link to="/dashboard/Selected-class">My Selected Class</Link></li>
                        <li><Link to="/dashboard/enrolled-class">My Enrolled Class</Link></li>
                        <li><Link to="/dashboard/enrolled-class">Payment History</Link></li>
                    </>
                    }
                    </ul>
                </div>
            </div> 
        </>
    );
};

export default Dashboard;