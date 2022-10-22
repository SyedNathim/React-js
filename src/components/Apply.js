import React from 'react-dom';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Apply.css';
import { Link } from "react-router-dom"
import { Header, Footer } from "./common/Header";



function Apply() {
  
const [Posts, setPosts] = useState(null);

    useEffect(() => { 
        axios.get('http://127.0.0.1/old-app/sankranthi/Api_controller/list_banner')
.then(res => {
  // console.log(res);
    setPosts(res.data);
});
    }, [])

    async function deleteBanner(banner_id){
      // alert(banner_id);
      let result= await  fetch('http://127.0.0.1/old-app/sankranthi/Api_controller/delete_banner/'+ banner_id,{
        method:'DELETE',
        headers:{
          "Content-type":'application/json',
          "Accept":'application/json'
        }
      })
      result =await result.json()
      console.warn("result",result)
    //   localStorage.setItem('banner-info', JSON.stringify(result));
    //  history.push("/apply")
    }
    
  return (
    <section>
       <Header />
      <div> <h2><Link to='/Create'>Create</Link> </h2></div> 
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>banner Name</th>
          <th>banner image</th>
          <th>Action</th>
        </tr>
      </thead>
        {
            (Posts) ?
        (<tbody>
         {
            
            Posts.map(post => {
                    return (<tr><td>{post.banner_id}</td>
                                <td>{post.banner_name}</td>
                                <td><img src={"http://localhost/old-app/sankranthi/"+ post.banner_image } alt="logo" /></td>
                                <td><button onClick={()=>deleteBanner(post.banner_id)}>Delete</button></td>
                            </tr>)
            })

          }
         </tbody>) : (<h2>loading...</h2>)
}
     
    </Table>
    
    <Footer />
    </section>
  );
}

export default Apply;