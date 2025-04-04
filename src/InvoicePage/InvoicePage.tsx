import React from "react";
import add from "../assets/add.png";

// Define TypeScript interface for invoices
interface Invoice {
  invoiceId: string;
  orderId: string;
  RoomNo: string;
  label: string;
  date: string;
  price: string;
  Status: string;
  color: "success" | "danger"; // Restrict color to known values
}

const InvoicePage: React.FC = () => {
  const InvoiceList: Invoice[] = [
    { invoiceId: "#4555", orderId: "0001", RoomNo: "101", label: "Vijay", date: "18 Sep 2024", price: "2000", Status: "Pending", color: "danger" },
    { invoiceId: "#4556", orderId: "0002", RoomNo: "102", label: "Parthiban", date: "02 Oct 2024", price: "250", Status: "Pending", color: "danger" },
    { invoiceId: "#4557", orderId: "0003", RoomNo: "103", label: "Leo dass", date: "15 Nov 2024", price: "2300", Status: "Paid", color: "success" },
    { invoiceId: "#4558", orderId: "0004", RoomNo: "104", label: "Vinoth", date: "13 Dec 2024", price: "1750", Status: "Pending", color: "danger" },
  ];

  return (
    <div className="container-fluid rounded-4 my-3 px-lg-5 px-1 py-2 col-12 bg-light mx-auto mx-4 shadow-lg">
      <div className="d-flex justify-content-between align-items-center">
        <p className="h5 my-4">Invoice:</p>
        <button className="btn btn-sm btn-primary p-2">
          <img src={add} alt="add" className="img-fluid me-1" /> ADD
        </button>
      </div>
      
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="border">
            <tr>
              <th scope="col" className="ps-3">Invoice ID</th>
              <th scope="col">Order ID</th>
              <th scope="col">Name</th>
              <th scope="col">Room No</th>
              <th scope="col">Date</th>
              <th scope="col">Price</th>
              <th scope="col" className="ps-lg-5 ps-3">Status</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {InvoiceList.map(({ invoiceId, orderId, RoomNo, label, date, price, Status, color }, index) => (
              <tr key={index}>
                <td>{invoiceId}</td>
                <td>{orderId}</td>
                <td>{label}</td>
                <td>{RoomNo}</td>
                <td>{date}</td>
                <td>{price}</td>
                <td>
                  <button className={`btn btn-sm btn-${color}`}>{Status}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicePage;
