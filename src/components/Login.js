import React , {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import "./Login.css"
import { useHistory } from "react-router-dom";

const Login = () => {
  
  const [mobile_no,setMobile_no] = useState("")
  const [password,setPassword] = useState("")
  const history = useHistory();

   useEffect(() => {
  //  if (localStorage.getItem('login-info')) {
    // history.push("/apply")
  //  }
   },  [])

async function UserLogin() {
  let item = {mobile_no,password}
  console.warn(item)

  let result= await fetch("http://localhost/old-app/sankranthi/Api_controller/check_login",{
         method:"Post",
         body:JSON.stringify(item),
         headers:{
          "Content-type":'application/json',
          "Accept":'application/json'
         }
  })

  result =await result.json()
  // console.warn("result",result);
  
  let loginRes = result.status;
  // alert(loginRes);
// console.log(action);
  if (loginRes === true) {
    localStorage.setItem('login-info', JSON.stringify(result));
  
     history.push("/home")
     window.location.reload(false);
    // alert('Correct');
    

  }else{
alert('Try Again');
  }


}
    return(
        <section>
        <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In Local</h3>
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
            <button type="submit" onClick={UserLogin} className="btn btn-primary">
              Submit
            </button>
          </div>
          
          <p className="forgot-password text-right mt-2">
            Create New <Link to='/signup'>Account</Link>?
          </p>
        </div>
      </div>
    </div>
        </section>
    );
}


export default Login