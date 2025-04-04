import login from "../assets/Login.gif";
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import google from "../assets/google.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link, useNavigate } from "react-router-dom";

function SignupPage(){
  const navigate = useNavigate();
    return(
        <>
           <Container className="d-flex align-items-center justiy-content-evenly gap-5 flex-column flex-lg-row my-5">
               <div className="border p-3 rounded-3 col-12 shadow-lg col-lg-7 mt-5">
                   <p className="h3 fw-bold text-danger border-bottom my-4 pb-4">SignUp <span className="text-secondary">Page</span></p>
                   <Row className="my-5">
                   <InputGroup>
                    <Col xs={4}>
                  <FloatingLabel controlId="floatingCountry" label="Country">
                    <Form.Select aria-label="Floating label select example" className="border-danger border-1 rounded-5 rounded-end-0">
                    <option value="1">(IND)+91</option>
                    <option value="2">(MYS)+60</option>
                    <option value="3">(SGP)+65</option>
                    <option value="4">(UK)+44</option>
                  </Form.Select>
                  </FloatingLabel>
                    </Col>
                    <Col xs={8}> 
                   <FloatingLabel controlId="floatingSelect" label="Phone Number">
                   <Form.Control type="tel" placeholder="Enter your Number" className="rounded-5 rounded-start-0 border-danger border-1"/>
                   </FloatingLabel>
                    </Col>
                  </InputGroup>
                  </Row>
                   <div className="d-flex gap-3 my-4 px-4">
                     <button className="btn bg-secondary text-light fw-bold px-lg-5 px-3 py-lg-3 rounded-pill">Continue</button>
                      <p className="pt-3">Continue to send a code</p>
                  </div>
                   <div className=" border-top d-flex justify-content-between">
                     <p className="bg-danger text-light px-3 col-lg-4 col-6">Or Continue With</p>
                     <span className="px-4 float-end"><Link to="/login" className="text-decoration-none text-danger">Already have an account?</Link></span>
                   </div>
                   <div className="text-center my-4">
                     <button className="bg-danger p-2 rounded-pill text-light fw-bold border-light px-4"onClick={() => navigate('/main')}><img src={google} alt="google icon" className="img-fluid pe-2" /> Google</button>
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