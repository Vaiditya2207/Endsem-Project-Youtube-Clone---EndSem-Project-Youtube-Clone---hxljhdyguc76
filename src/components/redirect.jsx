import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Redirect(){
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {

        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        if (countdown === 0) {
            navigate('/home');
        }
        return () => clearInterval(timer);
    }, [navigate, countdown]);


    return (
        <div style= {{height: "100vh", width: "100vw", alignItems: "center", backgroundColor: "black", display: "flex", justifyContent: "center", flexDirection:"column"}}>
            <h1 style={{alignItems: "center", color :"silver"}}>You should have not came here </h1>
            <h1 style={{alignItems: "center", color :"silver", marginTop:"-10px"}}>You have {countdown} seconds to run away</h1>
        </div>
    )
} 

export default Redirect;