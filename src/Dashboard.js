import Chart from "react-apexcharts";

const Dashboard = () => {
    const chartData = {
        options: {
            chart: { id: "basic-bar" },
            xaxis: { categories: ["12th Oct", "13th Oct", "14th Oct", "15th Oct", "16th Oct", "17th Oct"] }
        },
        series: [{ name: "Margin %", data: [30, 40, 80, 50, 90, 60] }]
    };

    return (
        <div style={{ minHeight: "100vh", background: "linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)", padding: "32px" }}>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
                <div style={{ width: "300px", height: "200px", backgroundColor: "#fca311", borderRadius: "16px", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>Inventory 93%</div>
                <div style={{ width: "300px", height: "200px", backgroundColor: "#e63946", borderRadius: "16px", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>Orders 65%</div>
                <div style={{ width: "300px", height: "200px", backgroundColor: "#2a9d8f", borderRadius: "16px", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>Battery 65%</div>
            </div>
            <div style={{ marginTop: "20px", background: "white", padding: "20px", borderRadius: "16px" }}>
                <Chart options={chartData.options} series={chartData.series} type="line" height={300} />
            </div>
        </div>
    );
};

export default Dashboard;