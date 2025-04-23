import React from "react";

interface Order {
  idNo: string;
  label: string;
  roomNo: string;
  date: string;
  Status: "Delivered" | "Rejected";
  color: "success" | "danger"; 
}

const OrderListPage: React.FC = () => {
  const OrderList: Order[] = [
    { idNo: "0001", label: "Vijay", roomNo: "101", date: "18 Sep 2024", Status: "Delivered", color: "success" },
    { idNo: "0002", label: "Parthiban", roomNo: "103", date: "02 Oct 2024", Status: "Delivered", color: "success" },
    { idNo: "0003", label: "Kandhi", roomNo: "102", date: "11 Oct 2024", Status: "Rejected", color: "danger" },
    { idNo: "0004", label: "Leo dass", roomNo: "102", date: "10 Nov 2024", Status: "Delivered", color: "success" },
    { idNo: "0005", label: "Jeevan", roomNo: "101", date: "18 Nov 2024", Status: "Delivered", color: "success" },
    { idNo: "0006", label: "Vinoth", roomNo: "102", date: "17 Dec 2024", Status: "Delivered", color: "success" },
    { idNo: "0007", label: "Rayappan", roomNo: "103", date: "17 Dec 2024", Status: "Rejected", color: "danger" },
  ];

  return (
    <div className="container-fluid rounded-4 my-3 mx-4 px-lg-5 px-1 py-2 col-12 bg-light mx-auto shadow-lg">
      <p className="h5 my-5">Order List:</p>
      <div className="table-responsive">
      <table className="table table-striped table-bordered align-middle">
        <thead className="border">
          <tr>
            <th scope="col" className="ps-3">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Room No</th>
            <th scope="col">Date</th>
            <th scope="col" className="ps-lg-5 ps-3">Status</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {OrderList.map(({ idNo, label, roomNo, date, Status, color }, index) => (
            <tr key={index}>
              <td>{idNo}</td>
              <td>{label}</td>
              <td>{roomNo}</td>
              <td>{date}</td>
              <td className="text-center text-light">
                <p className={`border rounded-2 py-1 mt-2 bg-${color}`}>{Status}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  );
};

export default OrderListPage;
