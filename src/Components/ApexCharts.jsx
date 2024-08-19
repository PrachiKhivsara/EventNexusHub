import React from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

function BookingsCharts() {
  const [annualData, setAnnualData] = React.useState([]);
  const [monthlyData, setMonthlyData] = React.useState([]);
  const [ageData, setAgeData] = React.useState({ labels: [], series: [] });
  const [revenueData, setRevenueData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const annualResponse = await axios.get(
          "/src/assets/AnnualBookings.json"
        );
        setAnnualData(annualResponse.data.annualBookings);

        const monthlyResponse = await axios.get(
          "/src/assets/monthlyBookings.json"
        );
        setMonthlyData(monthlyResponse.data.monthlyBookings);

        const revenueResponse = await axios.get(
          "/src/assets/monthlyRevenue.json"
        );
        setRevenueData(revenueResponse.data.monthlyRevenue);

        const ageResponse = await axios.get("/src/assets/ageDistribution.json");
        setAgeData({
          labels: ageResponse.data.ageDistribution.map((d) => d.ageGroup),
          series: ageResponse.data.ageDistribution.map(
            (d) => d.numberOfCustomers
          ),
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-4 grid grid-cols-12 gap-4">
      {ageData.labels.length > 0 && ageData.series.length > 0 && (
        <div className="border-2 border-gray-200 rounded-lg p-4 w-[400px] h-[500px] col-span-5">
          <ReactApexChart
            type="donut"
            options={{
              labels: ageData.labels,
              title: {
                text: "Age Distribution",
                align: "center",
                margin: 10,
                offsetY: 0,
                style: {
                  fontSize: "14px", // Adjusted font size for title
                  fontWeight: "bold",
                  color: "#333",
                  fontFamily: "Arial, sans-serif", // Custom font
                },
              },
              legend: {
                // show: true, // Show the legend
                position: "bottom",
                offsetY: 0,
              },
              colors: [
                "#FFB6C1",
                "#FF69B4",
                "#FF1493",
                "#C71585",
                "#DB7093",
                "#D8BFD8",
              ], // Different shades of pink
            }}
            height={400}
            series={ageData.series}
          />
        </div>
      )}
      {monthlyData.length > 0 && (
        <div className="border-2 border-gray-200 rounded-lg p-4 w-full h-[500px] col-span-7">
          <ReactApexChart
            type="bar"
            options={{
              xaxis: {
                categories: monthlyData.map((d) => d.month),
                tickAmount: 12, // Ensure enough ticks for all months
              },
              yaxis: {
                title: {
                  text: "Bookings",
                  style: { fontFamily: "Arial, sans-serif" }, // Custom font
                },
              },
              title: {
                text: "Bookings by Month",
                align: "center",
                margin: 20,
                offsetY: 0,
                style: {
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#333",
                  fontFamily: "Arial, sans-serif", // Custom font
                },
              },
              colors: ["#FF69B4"], // Pink color for the bars
            }}
            height="100%"
            width="100%"
            series={[
              { name: "Bookings", data: monthlyData.map((d) => d.bookings) },
            ]}
          />
        </div>
      )}

      {revenueData.length > 0 && (
        <div className="border-2 border-gray-200 rounded-lg p-4 w-full h-[500px] col-span-8">
          <ReactApexChart
            type="bar"
            options={{
              xaxis: {
                categories: revenueData.map((d) => d.month),
                tickAmount: 12, // Ensure enough ticks for all months
              },
              yaxis: {
                title: {
                  text: "Revenue",
                  style: { fontFamily: "Arial, sans-serif" }, // Custom font
                },
              },
              title: {
                text: "Monthly Revenue Breakdown",
                align: "center",
                margin: 20,
                offsetY: 0,
                style: {
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#333",
                  fontFamily: "Arial, sans-serif", // Custom font
                },
              },
              colors: ["#FF69B4"], // Pink color for the bars
            }}
            height="100%"
            width="100%"
            series={[
              { name: "Revenue", data: revenueData.map((d) => d.revenue) },
            ]}
          />
        </div>
      )}

      {annualData.length > 0 && (
        <div className="border-2 border-gray-200 rounded-lg p-4 w-full col-span-4 h-[500px]">
          <ReactApexChart
            type="line"
            options={{
              xaxis: {
                categories: annualData.map((d) => d.year),
              },
              yaxis: {
                title: {
                  text: "Bookings",
                  style: { fontFamily: "Arial, sans-serif" }, // Custom font
                },
              },
              title: {
                text: "Yearly Booking Trends",
                align: "center",
                margin: 80,
                offsetY: 0,
                style: {
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "#333",
                  fontFamily: "Arial, sans-serif", // Custom font
                },
              },
              colors: ["#FF69B4"], // Pink color for the line
            }}
            height="100%"
            series={[
              { name: "Bookings", data: annualData.map((d) => d.bookings) },
            ]}
          />
        </div>
      )}
    </div>
  );
}

export default BookingsCharts;
