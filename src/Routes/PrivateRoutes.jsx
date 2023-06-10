import { Children, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    
    if(loading){
        return <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{ width:"25%" }}></div>
        </div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" replace></Navigate>;

}

export default PrivateRoutes;