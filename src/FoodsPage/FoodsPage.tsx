import { useEffect, useState } from "react";
import TotalFoods from "../assets/totalFoods.png";
import Dosa from "../assets/dosa.png";
import add from "../assets/add.png";
import edit from "../assets/edit.png";
import Remove from "../assets/delete.png";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

interface FoodCategory {
  title: string;
  img: string;
  label: Number;
}

const FoodsPage: React.FC = () => {
  
  type foods = {
    id: any;
    title: String;
    category: String;
    price: Number;
    _id: String;
  };

  const[food, setFoods] = useState<foods[]>([]);
  const[title, setTitle] = useState('');
  const[category, setCategory] = useState('');
  const[id, setId]=useState('');
  const[price, setPrice] =useState<number|string>('');
  const[show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[BreakFast, setBreakFast] = useState<Number>(0);
  const[Lunch, setLunch] = useState(0);
  const[Dinner, setDinner] = useState(0);
  const[Refreshment, setRefreshment] = useState(0);

  useEffect(() =>{
    axios.get("http://localhost:5000/profile", {withCredentials: true})
    .then(res => {
      setId(res.data.id);
    })
    .catch(err => console.log(err));
  },[])

  useEffect(() => {
    axios.get("http://localhost:5000/foodItems", {withCredentials: true})
    .then(res => {
      setFoods(res.data);
    })
    .catch(err => console.log(err));
   },[])

   function handleAddFood(){
    console.log(title, category, price);
    axios.post("http://localhost:5000/addFood", {id, title, category, price})
    .then(res => {
      console.log(res);
      setTitle('');
      setCategory('');
      setPrice('');
      setShow(false);
    })
    .catch(err => {console.log(err)})
   }
   
   useEffect(() => {
    axios.get("http://localhost:5000/breakfast", {withCredentials: true})
    .then(res => {
      setBreakFast(res.data);
    })
    .catch(err => console.log(err));
   },[])
   useEffect(() => {
    axios.get("http://localhost:5000/lunch", {withCredentials: true})
    .then(res => {
      setLunch(res.data);
    })
    .catch(err => console.log(err));
   },[])
   useEffect(() => {
    axios.get("http://localhost:5000/dinner", {withCredentials: true})
    .then(res => {
      setDinner(res.data);
    })
    .catch(err => console.log(err));
   },[])
   useEffect(() => {
    axios.get("http://localhost:5000/refreshment", {withCredentials: true})
    .then(res => {
      setRefreshment(res.data);
    })
    .catch(err => console.log(err));
   },[])

   function handleDelete(id: any){
     axios.delete("http://localhost:5000/delete", {data: {id}})
     .then(res => {
      console.log(res);
     })
     .catch(err => console.log(err));
   }

  const FoodsCategory: FoodCategory[] = [
    { title: "BreakFast", img: TotalFoods, label: BreakFast },
    { title: "Lunch", img: TotalFoods, label: Lunch },
    { title: "Dinner", img: TotalFoods, label: Dinner },
    { title: "Refreshments", img: TotalFoods, label: Refreshment },
  ];

  return (
    <div className="container-fluid">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered  
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Foods</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-2 bg-secondary bg-opacity-10">
          <FloatingLabel controlId="floatingFoodName" label="Name of the foods">
            <Form.Control type="text" placeholder="Name" value={title} onChange={(e)=> { setTitle(e.target.value)}} required/>
          </FloatingLabel>
          <Form.Select aria-label="Default select example" onChange={(e) => setCategory(e.target.value)}>
            <option value="BreakFast">BreakFast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Refreshment">Refreshments</option>
          </Form.Select>
          <FloatingLabel controlId="floatingFoodPrice" label="Price of the foods">
            <Form.Control type="number" placeholder="price" value={price} onChange={(e) => {setPrice(Number(e.target.value))}} required/>
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleAddFood}>Add</Button>
        </Modal.Footer>
      </Modal>
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
      <div className="rounded-4 my-5 px-lg-5 px-1 py-2 col-12 bg-light shadow-lg">
        <div className="d-flex justify-content-between align-items-center">
          <p className="h5 my-4">Foods List:</p>
          <button className="btn btn-sm btn-primary p-2" onClick={handleShow}>
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
              {food.map((food) => (
                <tr key={food._id}>
                  <td>
                    <img src={Dosa} alt={food.title} className="img-fluid" />
                  </td>
                  <td>{food.title}</td>
                  <td>{food.category}</td>
                  <td>{food.price ? `Rs.${food.price}` : "Price not available"}</td>
                  <td>
                    <div className="d-flex gap-1 btn-group">
                      <button className="btn btn-success d-flex flex-row justify-content-center align-items-center gap-2 btn-sm py-lg-1">
                        <img src={edit} alt="Edit" /> <p className="d-none d-lg-block mt-3">Edit</p>
                      </button>
                      <button className="btn btn-danger d-flex flex-row justify-content-center align-items-center gap-2 btn-sm py-lg-1">
                        <img src={Remove} alt="Delete" /> <p className="d-none d-lg-block mt-3" onClick={() => handleDelete(food._id) }>Delete</p>
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
