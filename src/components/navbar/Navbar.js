import React from "react";
import "./Navbar.css";
import { HiHome } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { data } from "../data/data";

const Navbar = () => {
  console.log(data);

  return (
    <div className="navbar__container">
      <ul className="navbar__parent">
        <li className="navbar__icon">
          <HiHome />
        </li>
        {data.map((item,index) => {
            const Sublist = item.SubList;
            return(
                <li className="navbar__item" key={index}>
                <span className="navbar__title">{item.Name}</span>
                <div className="sub__container">
                  <ul className="sub__list">
                    {
                        Sublist.map((sub,index)=>{
                            return(
                                <li className="sub__item" key={index}>{sub}</li>
                            )
                        }) 
                    }
                  </ul>
                </div>
              </li>
            )
        })}

        <li className="navbar__all">
          Tất cả <FaBars className="navbar__all__icon" />{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
