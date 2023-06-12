import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isInstructor , isInstructorLoading] = useInstructor();
    const location = useLocation();


    if(loading || isInstructorLoading){
        return <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{ width:"25%" }}></div>
        </div>
    }

    if(user?.email && isInstructor){
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>;

}

export default InstructorRoute;