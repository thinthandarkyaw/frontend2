
import React, {useState } from "react";
import Axios from 'axios';
import { Navigationbar } from "./NavigationBar";
import "./Contactus.css";

export const Contactus = ()=>{
    const url = ""
    const [data, setData] = useState({
        name:"",
        email:"",
        message:"",
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{

            name: data.name,
            email:data.email,
            message:data.message,
        })
        .then(res=>{
            console.log(res.data)
        })
    }
        function handle(e){
            const newdata = {...data }
            newdata[e.target.id]=e.target.value
            setData(newdata)
            console.log(newdata)
        }



    return(
    <>
     <div>
      <Navigationbar />
      <br/>
      
      <h1>Contact Us</h1>
      <div className="x">
        
      <div class="row">
      <div class="c">
    <div class="col ml-5"><h3 className="color_sec">Get in touch</h3>
                    <adddress>
                        <strong>Address : Win Zin 17-B(TU-Meiktila)</strong>
                        <br/>
                        <br/>
                        <strong>Email : info@tumeiktila.edu.mm</strong>
                        <br/>
                        <br/>
                        <p><strong>Phone : 09778985088</strong></p>

                    </adddress>  
    </div></div> </div>
    <div class="col mr-35"> 
    
    <form className="contact_form w-100" onsubmit={(e)=>submit(e)}>
                        <div className="row">
                            
                            <div className="col-lg-6">
                                <input onChange={(e)=>handle(e)}
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Name"
                                type="text"
                                value={data.name}
                                />
                            </div>
                            <div className="col-lg-6">
                                <input onChange={(e)=>handle(e)}
                                className="form-control rounded-0"
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={data.email}
                                />
                           </div>
                           </div>
                        </form> 
                        <div className="row mt-3"> 
                        <div className="col-lg-9">
                        <textarea onChange={(e)=>handle(e)}
                        className="form-control rounded-0" 
                        id="message" 
                        name="message" 
                        placeholder="message" 
                        value={data.message}
                        rows='7'
                        cols='2'>        
                        </textarea>
                        <br/>
                        </div>
                        </div>  
                    <div className="row mt-3  ml-3">
                    <div className="col-sm-2">
                               <button class="btn ac_btn bg-primary text-white" type="submit">Send</button>
                               </div>
                               </div>
                </div>
    
 

  </div>

      </div>
      
    </>   
    );
}