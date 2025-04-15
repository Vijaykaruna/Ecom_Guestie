import login from "../assets/Login.gif";
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import user from '../assets/user2.png';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate} from "react-router-dom";

function LoginPage(){
   const navigate = useNavigate();
    return(
        <>
           <Container className="d-flex align-items-center justiy-content-evenly gap-5 flex-column flex-lg-row my-5">
               <div className="border bg-light p-3 rounded-3 col-12 shadow-lg col-lg-7">
                   <h4 className="border-bottom my-4 pb-4 text-danger fw-bold">Welcome <span className="text-secondary">Back,</span></h4>
                    <div className="d-flex gap-4 align-items-center ps-5">
                        <img src={user} alt="user" className="img-fluid border rounded-pill p-1"/>
                        <p className="text-wrap mt-3"><span className="fw-bold h5">Hello, <span className="text-danger">User</span></span></p>
                    </div>
                    <div className="mt-3 px-4">
                      <FloatingLabel controlId="floatingEmail" label="Email">
                       <Form.Control type="email" placeholder="Enter the Email"/>
                       </FloatingLabel>
                    </div>
                    <div className="mt-3 px-4">
                      <FloatingLabel controlId="floatingPassword" label="Password">
                       <Form.Control type="password" placeholder="Enter your Password"/>
                       </FloatingLabel>
                    </div>
                     <div className="float-end"> 
                      <span className="px-4"><Link to='/signup' className="text-decoration-none text-danger">Don't have an account?</Link></span>
                    </div>
                  <div className="my-5 px-4 text-center">
                    <button className="btn bg-danger text-light fw-bold px-lg-5 px-3 py-lg-3 rounded-pill" onClick={() => navigate('/main')}>Continue</button>
                  </div>
               </div>
               <div className="text-center">
                 <div>
                  <img src={logo} alt="logo" className="img-fluid"/>
                 </div>
                <img src={login} alt="login icon" className="img-fluid"/>
               </div>
           </Container>
        </>
    );
}
export default LoginPage;