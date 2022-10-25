import React , {useEffect, useState} from "react";
import { Header, Footer } from "./common/Header";
import { withRouter } from "react-router-dom";

import { useHistory } from "react-router-dom";
function Edit(props){

    const [data, setData] = useState([])
    
    // console.warn("props",props.match.params.id)

    useEffect(async() => {
        let result= await  fetch("http://localhost/old-app/sankranthi/Api_controller/edit_banner/"+props.match.params.id);
    
        
         result =await result.json();
  setData(result);
  console.log("result",data.banner_name)
//   localStorage.setItem('Edit-info', JSON.stringify(result));
//  history.push("/apply")
    }, [])


    const [banner_name,setBanner_name] = useState("")
    const [banner_image,setBanner_image] = useState("")
    // const [banner_id,setBanner_id] = useState("")
    const history = useHistory();
    console.log(banner_name);
    

    var banner_id = data.banner_id;
    if (banner_name === '') {
        var new_banner_name = data.banner_name;
      
    } else {
        var new_banner_name = banner_name;
    }

    if (banner_image === '') {
        var new_banner_image = data.banner_image;
    } else {
        var new_banner_image = banner_image;
    }
   
    

    async function Updatebanner() {
     
        let item = {new_banner_name,new_banner_image,banner_id}
        // console.warn(item)
        
      
        let result= await fetch("http://localhost/old-app/sankranthi/Api_controller/update_banner",{
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
       
  window.location.reload(false);
      
      }

    return(
        <section>
        <Header/>
          <div className="container">   
  {/* <form method="Post" encType="multipart/form-data"> */}
    <div className="form-group">
      <label htmlFor="exampleFormControlInput1">Banner Name</label>
      <input type="text" className="form-control"  name="banner_name" value={new_banner_name} onChange={(e) => setBanner_name(e.target.value)} />
      
      {/* <input type="hidden" className="form-control"  name="banner_id" value={data.banner_id} onChange={(e) => setBanner_id(e.target.value)} /> */}
    </div>
  <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Banner Image</label>
      {/* accept="image/*" */}
      <input type="text" className="form-control" name="banner_image" value={new_banner_image}  onChange={(e) => setBanner_image(e.target.value)} />
    </div>
    
    <div className="form-group">
      <input type="submit" onClick={Updatebanner} className="form-control" value="Update Post" />
    </div>
  {/* </form> */}
  </div>
  <Footer/>
  </section>
    );
}


export default withRouter(Edit)