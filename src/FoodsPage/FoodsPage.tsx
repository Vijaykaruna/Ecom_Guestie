import React from "react";
import TotalFoods from "../assets/totalFoods.png";
import Dosa from "../assets/dosa.png";
import add from "../assets/add.png";
import edit from "../assets/edit.png";
import Remove from "../assets/delete.png";

// Define types for food categories
interface FoodCategory {
  title: string;
  img: string;
  label: string;
}

// Define types for food items
interface FoodItem {
  img: string;
  label: string;
  Category: string;
  Price: string;
  edit: string;
  Delete: string;
}

const FoodsPage: React.FC = () => {
  const FoodsCategory: FoodCategory[] = [
    { title: "BreakFast", img: TotalFoods, label: "20" },
    { title: "Lunch", img: TotalFoods, label: "30" },
    { title: "Dinner", img: TotalFoods, label: "35" },
    { title: "Refreshments", img: TotalFoods, label: "50" },
  ];

  const Foods: FoodItem[] = new Array(10).fill({
    img: Dosa,
    label: "Dosa",
    Category: "BreakFast",
    Price: "Rs 30.00",
    edit: edit,
    Delete: Remove,
  });

  return (
    <div className="container-fluid">
      {/* Food Categories */}
      <div className="d-flex gap-1 flex-column flex-lg-row align-items-center my-2">
        {FoodsCategory.map(({ title, img, label }, index) => (
          <div key={index} className="border col-lg-3 col-8 rounded-3 bg-light shadow-lg">
            <div className="d-flex justify-content-around py-2">
              <p className="fs-5 text-secondary">{title}</p>
              <img src={img} alt={`${title}-icon`} className="img-fluid" />
            </div>
            <p className="h3 text-center">{label}</p>
          </div>
        ))}
      </div>

      {/* Food List Table */}
      <div className="rounded-4 my-5 px-lg-5 px-1 py-2 col-12 bg-light mx-auto shadow-lg">
        <div className="d-flex justify-content-between align-items-center">
          <p className="h5 my-4">Foods List:</p>
          <button className="btn btn-sm btn-primary p-2">
            <img src={add} alt="add" className="img-fluid me-1" /> ADD
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered align-middle">
            <thead className="border">
              <tr>
                <th scope="col" className="ps-3">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col" className="ps-lg-5 ps-3">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {Foods.map(({ img, label, Category, Price, edit, Delete }, index) => (
                <tr key={index}>
                  <td>
                    <img src={img} alt={label} className="img-fluid" />
                  </td>
                  <td>{label}</td>
                  <td>{Category}</td>
                  <td>{Price}</td>
                  <td>
                    <div className="d-flex gap-1 btn-group">
                      <button className="btn btn-success d-flex flex-row justify-content-center align-items-center gap-2 btn-sm py-lg-3">
                        <img src={edit} alt={label} /> <p className="d-none d-lg-block">Edit</p>
                      </button>
                      <button className="btn btn-danger d-flex flex-row justify-content-center align-items-center gap-2 btn-sm py-lg-3">
                        <img src={Delete} alt={label} /> <p className="d-none d-lg-block">Delete</p>
                      </button>
                    </div>
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

export default FoodsPage;
