import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles, path }) => {
    
    const userActive = useSelector(store => store.userReducer.user);

    if (allowedRoles.includes("anyone") && userActive == null) {
        console.log("usuario: ", userActive)
        return children;
    } else if (userActive && allowedRoles.includes(userActive.rol)) {
        console.log("usuario: ", userActive)
        return children;
    }

    return <Navigate to={path} />;
};

export default ProtectedRoute;
