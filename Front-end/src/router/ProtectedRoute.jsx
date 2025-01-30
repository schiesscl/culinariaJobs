import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles, path }) => {

    const userActive = useSelector(store => store.userReducer.user);

    if(allowedRoles.includes("anyone") && userActive == null) 
    {
        return children;
    }

    if (allowedRoles.includes(userActive.rol)) {
        return children;
    }

    return <Navigate to={path} />;
};

export default ProtectedRoute;
