import React, { useState } from "react";
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Navigationbar } from "../NavigationBar/NavigationBar";
export const Firstpayment = () =>{

  const [popupStyle, showPopup] = useState("hide");
  const popup = () => {
    showPopup("submit-btn-popup");
  alert(
    `Your payment successfull.
    Welcome to Technological University Meiktila!`
  );
  }

  //const inputRef = useRef(null);
  const [fee, setFee] = useState("");
  const [engname, setEngname] = useState("");
  const [email, setEmail] = useState("");

  const handleEngNameChange = (e) => {
    setEngname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeeChange = (e) => {
    setFee(e.target.value);
  };

  
    return(
      <>
      <div> 
      <Navigationbar/></div>
      <br/>
     <div> <b><h2>ကျောင်းအပ်ခ ပေးသွင်းရန်</h2></b></div><br/><br/>
       <div class="fee">
      <div className="form-group">
            <label htmlfor="engname">Name:</label>
            <input
              onChange={handleEngNameChange}
              id="engname"
              value={engname}
              type="text"
              name="engname"
              required
            />
          </div>
          <div className="form-group">
            <label htmlfor="email">Email:</label>
            <input
              onChange={handleEmailChange}
              id="email"
              value={email}
              type="email"
              name="email"
              required
            />
          </div>
        
          <br/>
     
        <table>
       <tbody>
            <tr>
              <td>မှတ်ပုံတင်‌ကြေး</td>
              <td>၂၀၀ ကျပ်</td>
            </tr>
            <tr>
              <td>ကျောင်းလခ</td>
              <td>၃၀၀၀၀ ကျပ်</td>
            </tr>
            <tr>
              <td>ဓါတ်ခွဲခန်းကြေး</td>
              <td>၅၀၀ ကျပ်</td>
              
            </tr>
            <tr>
              <td>စာကြည့်တိုက်ကြေး</td>
              <td>၃၀၀ ကျပ်</td>
              
            </tr>
            <tr>
              <td>အားကစားကြေး</td>
              <td>၁၀၀၀ ကျပ်</td>
           </tr>
           <tr>
              <td>စာမေးပွဲကြေး</td>
              <td>၂၅၀၀ ကျပ်</td>
           </tr>
           <tr>
              <td>အောင်လက်မှတ်ကြေး</td>
              <td></td>
           </tr>
           <tr>
              <td>အမှတ်စာရင်းကြေး</td>
              <td></td>
           </tr>
           <tr>
              <td>Grading ကြေး</td>
              <td></td>
           </tr>
           <tr>
              <td>True Copy ကြေး</td>
              <td> </td>
           </tr>
           <tr>
            <td>စုစုပေါင်း</td>
            <td>၃၄၅၀၀ ကျပ်</td>
  
           </tr>
           
           
            </tbody>
            
     </table>
     </div>
     <br/><br/>


     <div class="kpay">
      <br/>
     <b><h4>KBZ pay ဖြင့်ငွေပေးချေရန်</h4></b>
    <b> <p> ငွေလွှဲရမည့်ဖုန်းနံပါတ်:09778985088</p></b>
     <div className="form-group">
            <b><label htmlfor="fee">Transaction No ထည့်ရန်👇</label></b><br/>
            <input
              onChange={handleFeeChange}
              id="fee"
              value={fee}
              type="text"
              name="fee"
              required
            /><button className="payment_btn" onClick={popup} required>
            Submit
          </button>
            </div>
            <br/>
            </div>
</>
    );
  }
  
  export default Firstpayment;
  