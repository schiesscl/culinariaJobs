import { useSelector } from "react-redux";
import { useState } from "react";
import NavBar from "../nav/NavBar";

const useHeaderScript = () => {
    const [tipeMenu, setTipeMenu] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const UserActive = useSelector(store => store.userReducer.user)

    const ShowMenu = () => {
        if (isMenuOpen) {
            setTipeMenu(null);
        } else {
            setTipeMenu(<NavBar userActive={UserActive} />);
        }
        setIsMenuOpen(!isMenuOpen);
    };


    return { 
        ShowMenu,
        tipeMenu,
        isMenuOpen,
        UserActive
    };
}

export default useHeaderScript;
