
import React , {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import './Create.css';
import { Header, Footer } from "./common/Header";





function Create() {
  
  const [banner_name,setBanner_name] = useState("")
  const [banner_image,setBanner_image] = useState("")
  const [status,setStatus] = useState("")
  const history = useHistory();

   useEffect(() => {
   if (localStorage.getItem('banner-info')) {
    // history.push("/apply")
   }
   },  [])

async function Createbanner() {
  let item = {banner_name,banner_image,status}
  console.warn(item)
  

  let result= await fetch("http://localhost/old-app/sankranthi/Api_controller/add_banner",{
         method:"Post",
         body:JSON.stringify(item),
         headers:{
          "Content-type":'application/json',
          "Accept":'application/json'
         }
  })

  result =await result.json()
  // console.warn("result",result)
  localStorage.setItem('banner-info', JSON.stringify(result));
 history.push("/apply")

}
  return(
    <section>
      <Header/>
        <div className="container">   
{/* <form method="Post" encType="multipart/form-data"> */}
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Banner Name</label>
    <input type="text" className="form-control"  name="banner_name" value={banner_name} onChange={(e) => setBanner_name(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Status</label>
   
    <input type="text" className="form-control" name="status" value={status}  onChange={(e) => setStatus(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Banner Image</label>
    {/* accept="image/*" */}
    <input type="text" className="form-control" name="banner_image" value={banner_image}  onChange={(e) => setBanner_image(e.target.value)} />
  </div>
  
  <div className="form-group">
    <input type="submit" onClick={Createbanner} className="form-control" value="Add Post" />
  </div>
{/* </form> */}
</div>
<Footer/>
</section>
    );
}


export default Create