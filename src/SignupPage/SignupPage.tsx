import login from "../assets/Login.gif";
import logo from '../assets/logo.png';
import user from '../assets/user2.png';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link, useNavigate } from "react-router-dom";

function SignupPage(){
  const navigate = useNavigate();
    return(
        <>
           <Container className="d-flex align-items-center justiy-content-evenly gap-5 flex-column flex-lg-row">
               <div className="border p-3 bg-light rounded-3 col-12 shadow-lg col-lg-7 mt-5">
                   <p className="h3 fw-bold text-danger border-bottom my-4 pb-4">SignUp <span className="text-secondary">Page</span></p>
                   <div className="text-center">
                      <img src={user} alt="user" className="img-fluid border rounded-pill p-1"/>
                    </div>
                  <div className="mt-3 px-4">
                      <FloatingLabel controlId="floatingName" label="Username">
                       <Form.Control type="text" placeholder="Enter the Username" required/>
                       </FloatingLabel>
                    </div>
                  <div className="mt-3 px-4">
                      <FloatingLabel controlId="floatingEmail" label="Email">
                       <Form.Control type="email" placeholder="Enter the Email" required/>
                       </FloatingLabel>
                    </div>
                    <div className="mt-3 px-4">
                      <FloatingLabel controlId="floatingPassword" label="Password">
                       <Form.Control type="password" placeholder="Enter your Password" required/>
                       </FloatingLabel>
                    </div>
                    <span className="px-4 float-end"><Link to="/login" className="text-decoration-none text-danger">Already have an account?</Link></span>
                   <div className="d-flex gap-3 mt-5 mb-2 px-4">
                     <button className="btn bg-danger mx-auto text-light fw-bold px-lg-5 px-3 py-lg-3 rounded-pill" onClick={() => navigate('/login')}>Continue</button>
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
export default SignupPage;