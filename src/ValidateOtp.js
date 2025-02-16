import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const ValidateOtp = () => {
    const [userOtp, setUserOtp] = useState("");
    const [countdown, setCountdown] = useState(30);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    setDisabled(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleResendOtp = () => {
        const newOtp = generateOTP();
        localStorage.setItem("otp", newOtp);
        alert(`New OTP: ${newOtp}`);
        setCountdown(30);
        setDisabled(true);
        
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    setDisabled(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const verifyOTP = () => {
        const storedOtp = localStorage.getItem("otp");
        if (userOtp === storedOtp) {
            navigate("/dashboard");
        } else {
            alert("Invalid or expired OTP. Request a new one.");
        }
    };

    return (
        <div style={{ display: "flex", height: "100vh", background: "linear-gradient(135deg,rgb(20, 162, 91),rgb(12, 131, 157))", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                <div style={{ background: "#2d5f73", color: "white", padding: "40px", width: "400px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h2 style={{ textAlign: "center", marginBottom: "24px", fontSize: "24px", margin:"10%"}}>Enter OTP sent to Email</h2>
                    <input 
                        type="text" 
                        placeholder="OTP" 
                        value={userOtp} 
                        onChange={(e) => setUserOtp(e.target.value)} 
                        style={{ background: "#1b3a4b", margin:"5%", color: "white", border: "none", borderRadius: "12px", padding: "16px", marginBottom: "16px", fontSize: "20px", textAlign: "center" }}
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "20px", fontSize: "14px" }}>
                        <span 
                            style={{ cursor: disabled ? "not-allowed" : "pointer", textDecoration: "underline", color: disabled ? "gray" : "white", textDecorationLine:"none" }}
                            onClick={!disabled ? handleResendOtp : undefined}
                        >
                            {disabled ? `Resend OTP` : "Resend OTP"}
                        </span>
                        <span>{countdown > 0 ? (countdown < 10 ) ? `0:0${countdown} sec` :`0:${countdown} sec` : "0:00 sec"}</span>
                    </div>
                    <button 
                        onClick={verifyOTP} 
                        style={{ background: "linear-gradient(to bottom,rgb(14, 94, 45),rgb(17, 77, 72))", margin:"5%",alignContent:"center", padding: "16px", border: "none", borderRadius: "20px", width:"60%", color: "white", fontWeight: "bold", fontSize: "18px", cursor: "pointer" , marginLeft:"20%"}}
                    >
                        Validate
                    </button>
                </div>
                <div style={{background: "linear-gradient(135deg,rgb(84, 139, 118),rgb(36, 133, 155))", color: "white", padding: "10px", width: "400px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
                    Web Application with Analytics Dashboard
                </div>
            </div>
        </div>

    );
};

export default ValidateOtp;
