import login from "../assets/Login.gif";
import mail from '../assets/mail.png'
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import google from "../assets/google.png";
import user from '../assets/user2.png';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate} from "react-router-dom";

function LoginPage(){
   const navigate = useNavigate();
    return(
        <>
           <Container className="d-flex align-items-center justiy-content-evenly gap-5 flex-column flex-lg-row my-4">
               <div className="border p-3 rounded-3 col-12 shadow-lg col-lg-7">
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
                    <div className=" d-flex justify-content-between">
                    <span className="px-4"><a href="#" className="text-decoration-none text-danger">Forget Your Password?</a></span>
                    <span className="px-4"><Link to='/signup' className="text-decoration-none text-danger">Don't have an account?</Link></span>
                    </div>
                  <div className="d-flex gap-3 my-4 px-4">
                    <button className="btn bg-secondary text-light fw-bold px-lg-5 px-3 py-lg-3 rounded-pill">Continue</button>
                    <div className="d-flex align-items-center gap-1 text-decoration-none text-dark">
                        <img src={mail} alt="mail icon" className="img-fluid"/>
                        <p className="pt-3">Continue With Email</p>
                    </div>
                  </div>
                  <div className=" border-top">
                    <p className="bg-danger text-light px-3 col-lg-4 col-6">Or Continue With</p>
                  </div>
                  <div className="text-center mb-4">
                    <button className="bg-danger p-2 rounded-pill text-light fw-bold border-light px-4" onClick={() => navigate('/main')}><img src={google} alt="google icon" className="img-fluid pe-2" /> Google</button>
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