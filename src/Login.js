import React, { useState } from "react";
import { HashRouter as useNavigate } from "react-router-dom";


const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const Login = () => {
    const [email, setEmail] = useState("");
        const [otp, setOtp] = useState("");
        const [countdown, setCountdown] = useState(0);
        const [disabled, setDisabled] = useState(false);
        const navigate = useNavigate();
    
        const handleSendOtp = () => {
            if (!email) {
                alert("Please enter your email.");
                return;
            }
            const newOtp = generateOTP();
            setOtp(newOtp);
            alert(`Your OTP: ${newOtp}`);
            localStorage.setItem("otp", newOtp);
            setCountdown(30);
            setDisabled(true);
            const timer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev === 1) {
                        clearInterval(timer);
                        localStorage.removeItem("otp");
                        alert("OTP expired. Request a new one.");
                        setDisabled(false);
                    }
                    return prev - 1;
                });
            }, 1000);
            navigate("validate-otp")
        };
    
   

    const navOtp = () => {
        const storedOtp = localStorage.getItem("email");
            navigate("/validate-otp");
    };
   
    return (
        <div style={{ display: "flex", height: "100vh", background: "linear-gradient(135deg,rgb(20, 162, 91),rgb(12, 131, 157))", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                <div style={{ background: "#2d5f73", color: "white", padding: "40px", width: "400px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "24px", fontSize: "24px", margin:"10%"}}>Sign In</h2>
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        style={{ background: "#1b3a4b", margin:"5%", color: "white", border: "none", borderRadius: "12px", padding: "16px", marginBottom: "16px", fontSize: "20px", textAlign: "center" }}
                    />
                    <button 
                        onClick={handleSendOtp} 
                        disabled={disabled}
                        style={{ background: "linear-gradient(to bottom,rgb(14, 94, 45),rgb(17, 77, 72))", margin:"5%",alignContent:"center", padding: "16px", border: "none", borderRadius: "20px", width:"60%", color: "white", fontWeight: "bold", fontSize: "18px", cursor: "pointer" , marginLeft:"20%"}}
                    >
                        Send Otp
                    </button>
                </div>
                <div style={{background: "linear-gradient(135deg,rgb(84, 139, 118),rgb(36, 133, 155))", color: "white", padding: "10px", width: "400px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
                    Web Application with Analytics Dashboard
                </div>
            </div>
        </div>
    );
};


export default Login;
