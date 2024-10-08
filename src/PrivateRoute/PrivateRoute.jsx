import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
     const {user, loading} = useContext(AuthContext);
     if(loading){
        return <div className="text-center">
            <span className="loading loading-spinner text-secondary text-[52px] "></span>
        </div>
     }
     if(user?.email){
        return children;
     }
    return <Navigate state={location?.pathname} to="login"></Navigate>
};

export default PrivateRoute;