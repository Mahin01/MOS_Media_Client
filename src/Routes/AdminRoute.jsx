import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin , isAdminLoading] = useAdmin();
    const location = useLocation();


    if(loading || isAdminLoading){
        return <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{ width:"25%" }}></div>
        </div>
    }

    if(user?.email && isAdmin){
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>;

}

export default AdminRoute;