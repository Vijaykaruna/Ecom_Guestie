//import { useEffect } from "react";
import TotalRooms from "../assets/totalRooms.png";
import TotalSales from "../assets/totalSale.png";
import TotalOrders from "../assets/totalOrder.png";
//import axios from "axios";

interface DashboardCard {
  title: string;
  img: string;
  values: string;
  label: string;
  color: "success" | "danger";
}

interface OrderDetail {
  RoomNo: string;
  DateTime: string;
  Amount: string;
  Status: "Delivery" | "Pending";
  color: "success" | "danger";
}

const Dashboard: React.FC = () => { 

  const dashTable: DashboardCard[] = [
    { title: "Total Rooms", img: TotalRooms, values: "40,689", label: "8.5% Up from yesterday", color: "success" },
    { title: "Total Orders", img: TotalOrders, values: "10,293", label: "1.5% Up from past week", color: "success" },
    { title: "Total Sales", img: TotalSales, values: "RS 89,000", label: "4.3% Down from yesterday", color: "danger" },
  ];

  const OrderDetails: OrderDetail[] = [
    { RoomNo: "100", DateTime: "18.09.2024 - 8:00 AM", Amount: "4,000", Status: "Delivery", color: "success" },
    { RoomNo: "102", DateTime: "18.09.2024 - 8:25 AM", Amount: "1,000", Status: "Pending", color: "danger" },
    { RoomNo: "103", DateTime: "18.09.2024 - 8:28 AM", Amount: "2,000", Status: "Pending", color: "danger" },
    { RoomNo: "104", DateTime: "18.09.2024 - 8:50 AM", Amount: "800", Status: "Delivery", color: "success" },
    { RoomNo: "105", DateTime: "18.09.2024 - 8:55 AM", Amount: "2,300", Status: "Pending", color: "danger" },
    { RoomNo: "106", DateTime: "18.09.2024 - 10:10 AM", Amount: "7,000", Status: "Delivery", color: "success" },
  ];

  return (
    <div className="container-fluid">
      {/* Dashboard Cards */}
      <div className="d-flex justify-content-around flex-column flex-lg-row gap-3 gap-lg-0 my-2">
        {dashTable.map(({ title, img, values, label, color }, index) => (
          <div key={index} className="rounded-4 col-lg-3 py-2 bg-light shadow-lg">
            <div className="d-flex justify-content-around align-items-center">
              <p className="fs-5 text-secondary">{title}</p>
              <img src={img} alt={`${title} icon`} className="img-fluid" />
            </div>
            <p className="fs-2 fw-bold text-center">{values}</p>
            <p className={`text-center pt-3 text-${color}`}>{label}</p>
          </div>
        ))}
      </div>

      {/* Order Details Table */}
      <div className="rounded-4 my-5 mx-4 px-lg-5 px-1 py-2 col-12 bg-light mx-auto shadow-lg">
        <p className="h5 my-4">Order Details:</p>
        <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="border">
            <tr>
              <th scope="col" className="ps-3">Room No</th>
              <th scope="col">Date - Time</th>
              <th scope="col">Amount</th>
              <th scope="col" className="ps-lg-5 ps-3">Status</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {OrderDetails.map(({ RoomNo, DateTime, Amount, Status, color }) => (
              <tr key={RoomNo}>
                <td className="ps-3">{RoomNo}</td>
                <td>{DateTime}</td>
                <td>{Amount}</td>
                <td className="text-center text-light">
                  <p className={`border rounded-2 py-1 mt-2 bg-${color}`}>{Status}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
      </div>
    </div>
  );
};

export default Dashboard;
