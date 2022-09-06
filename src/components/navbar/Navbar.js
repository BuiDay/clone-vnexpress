import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { HiHome } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { data } from "../data/data";
import AllMenu from "../allmenu/AllMenu";
import img from "../../asset/inter.png"

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(true);
  const handleClick = () => {
    setShow(!show);
  }

  useEffect(() => {
    const body = document.querySelector('html');
    if (show) {
      const close = document.querySelector('.allmenu__top__close__icon')
      close.addEventListener('click', () => {
        setShow(false);
      })
    } else {
      body.style.overflow = 'srcoll'
    }
  })

  useEffect(() => {
    const nav = document.querySelector('.navbar__container');
    const nav1 = document.getElementsByClassName('navbar__item')  
    document.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.style.top = "0";
        setScroll(false)
        if (show) {
          const menu = document.querySelector('.allmenu__main__container');
          menu.style.marginTop = '0';
        }
      } else if (window.scrollY < 50) {
        nav.style.top = "";
        setScroll(true)
      }
    })
  })

  useEffect (()=>{

    window.addEventListener('resize',()=>{
      const nav = document.getElementsByClassName('navbar__item')  
      if(window.innerWidth < 1340){
        nav[18].style.display="none";
        nav[17].style.display="none";
        nav[16].style.display="none";
        nav[15].style.display="none";
        nav[14].style.display="none";
      }
      else if(window.innerWidth > 1340){
        nav[18].style.display="block"
        nav[17].style.display="block";
        nav[16].style.display="block";
        nav[15].style.display="block";
        nav[14].style.display="block";
      }
    })
  },[window.scrollY])

  return (
    <>
      <div className="navbar__container" id='nav'>
        <ul className="navbar__parent">
          {scroll ? (
            <li className="navbar__icon">
              <HiHome />
            </li>) : (
            <li className="navbar__item" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="navbar__item__logo" style={{ height: "20px", width: "20px", marginRight: "20px" }}><img src={img} alt="" /></div>
              <span className="navbar__title" style={{ color: 'var(--text-purple)' }}>Mới nhất</span>
            </li> 
          )}

          {data.map((item, index) => {
            const Sublist = item.SubList;
            return (
              <li className="navbar__item" key={index}>
                <span className="navbar__title">{item.Name}</span>
                <div className="sub__container">
                  <ul className="sub__list">
                    {
                      Sublist.map((sub, index) => {
                        return (
                          <li className="sub__item" key={index}>{sub}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              </li>
            )
          })}

          <li className="navbar__all" onClick={() => handleClick()} style={{ color: show ? 'var(--text-purple)' : '#d6d4d4' }}>Tất cả <FaBars className="navbar__all__icon" />
          </li>
        </ul>
      </div>
      {show ? <AllMenu /> : ""}
    </>
  );
};

export default Navbar;
