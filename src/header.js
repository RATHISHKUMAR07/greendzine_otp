const Header = () => {
    

    return (
        <div style={{ display: "flex", height: "100vh", background: "linear-gradient(135deg, #3a7bd5, #00d2ff)", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                <div className="header" style={{ background: "#2d5f73", color: "white", padding: "40px", width: "400px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "24px", fontSize: "24px" }}>Analytics Dashboard</h2>
                    

                </div>
                <div className="footer">
                    ©️2025, Greendzine Technologies Pvt. Ltd, All Rights Reserver.
                </div>
            </div>
        </div>

        
        
    );
};


export default Header;
