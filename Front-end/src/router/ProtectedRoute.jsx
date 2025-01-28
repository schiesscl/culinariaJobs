import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles, path }) => {

    const userRole = useSelector(store => store.userReducer.user.rol);

    if(allowedRoles.includes("anyone") && !userRole)
    {
        return children;
    }

    if (allowedRoles.includes(userRole)) {
        return children;
    }

    return <Navigate to={path} />;
};

export default ProtectedRoute;
