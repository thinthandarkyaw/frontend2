import { Link } from "react-router-dom";
import React from "react";
import { AdminNavBar2 } from "../AdminNavBar/AdminNavBar2";
//import { Sidebar } from './Sidebar';

export const ThirdChoosemajors = () => {
  return (
    <>
    <div> <AdminNavBar2/></div>
      <div class="choosemajoradm">
     
        <h1>Choose Major</h1>
        <div class="year">
          <div class="left">

            <div>
              <Link to="/thirdcivil">
                <button  class="first">CIVIL</button>
              </Link>
            </div>

            <div>
              <Link to="/thirdec">
                <button  class="second">ELECTRONICS</button>
              </Link>
            </div>

            <div>
              <Link to="/thirdme">
                <button  class="third">MECHNICAL</button>
              </Link>
            </div>

            <div>
            <Link to="/dashboard">
              <button className="to_dashboard">⏪⏪</button>
            </Link>
            </div>
            
            </div>

            <div class="right">
            <div>
              <Link to="/thirdep">
                <button  class="fourth">ELECTRICAL POWER</button>
              </Link>
            </div>
          

            <div>
              <Link to="/thirdit">
                <button  class="fifth">INFORMATION TECHNOLOGY</button>
              </Link>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};
