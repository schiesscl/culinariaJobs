import { useState, useEffect } from "react";


const HomeScript = () => {
    
    const [homeText, setHomeText] = useState("")

    const textHome = [
        "Welcome to the home page",
        "This is the home page",
        "Home page"
    ]

    




    useEffect(() => {
        const interval = setInterval(() => {
            setHomeText(textHome[Math.floor(Math.random() * textHome.length)]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>{homeText}</h1>
        </div>
    );
}

export default HomeScript;