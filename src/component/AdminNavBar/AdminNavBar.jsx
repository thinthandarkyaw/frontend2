import { Link } from "react-router-dom";
import React from "react";
//import It from '.public/It.png'
export const AdminNavBar = () => {
  return (
    <div class="admNavbar">
      <img src="./tulogo.jpg" alt="It" width={80} height={90} />

       <Link to="/adminhome">
        <li>ADMIN</li>
      </Link>
      
      <Link to="/">
        <li>HOME</li>
      </Link>

    
    </div>
  );
};
