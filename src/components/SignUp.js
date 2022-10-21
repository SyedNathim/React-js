
import React , {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import "./SignUp.css"
import { useHistory } from "react-router-dom";

const SignUp = () => {
     
  const [first_name,setFirst_name] = useState("")
  const [last_name,setLast_name] = useState("")
  const [email,setEmail] = useState("")
  const [mobile_no,setMobile_no] = useState("")
  const [password,setPassword] = useState("")
  const history = useHistory();

   useEffect(() => {
   if (localStorage.getItem('signup-info')) {
    // history.push("/apply")
   }
   },  [])

async function UserSignUp() {
  let item = {first_name,last_name,email,mobile_no,password}
  console.warn(item)

  let result= await fetch("http://localhost/old-app/sankranthi/Api_controller/register",{
         method:"Post",
         body:JSON.stringify(item),
         headers:{
          "Content-type":'application/json',
          "Accept":'application/json'
         }
  })

  result =await result.json()
//   console.warn("result",result)
  localStorage.setItem('signup-info', JSON.stringify(result));
 history.push("/")

}
    return(
        <section>
        <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter First Name"
              
              value={first_name}  onChange={(e) => setFirst_name(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Last Name"
              
              value={last_name}  onChange={(e) => setLast_name(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              
              value={email}  onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="form-group mt-3">
            <label>Mobile No</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Mobile No"
              
              value={mobile_no}  onChange={(e) => setMobile_no(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}  onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={UserSignUp} className="btn btn-primary" >
            Sign Up 
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
           Already Have <Link to='/'>Account</Link>?
          </p>
        </div>
      </div>
    </div>
        </section>
    );
}


export default SignUp