import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles, path }) => {
    const userActive = useSelector(store => store.userReducer.user);

    if (!allowedRoles || !path) {
        console.error("Los roles permitidos o la ruta de redirección no están definidos.");
        return <Navigate to="/" />;
    }

    if (allowedRoles.includes("anyone") && !userActive) {
        return children;
    }

    if (userActive && userActive.role && allowedRoles.includes(userActive.role.id)) {
        return children;
    }

    return <Navigate to={path} />;
};

export default ProtectedRoute;
