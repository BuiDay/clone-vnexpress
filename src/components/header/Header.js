import React from "react";
import logo from "../../asset/vne.png";
import logo_inter from "../../asset/inter.png";
import "./Header.css";
import { HiOutlineClock,HiOutlineSearch } from "react-icons/hi";
import { FaUserAlt} from "react-icons/fa";


const Header = () => {
    return (
        <div className="container">
            <div className="header__container">
                <div className="header__right">
                    <div className="header__logo">
                        <img src={logo} alt="" />{" "}
                    </div>
                    <div className=" header__date">
                        <span className="header__day">Thứ hai, </span>
                        <span className="header__year">5/9/2022</span>
                    </div>
                </div>

                <div className="header__left">

                    <div className="btn__header ">
                        <div className="header__logoInter icon">
                            <HiOutlineClock/>
                        </div>
                        <a href="/" className="header__middle__text">Mới nhất</a>
                    </div>

                    <div className="btn__header">
                        <div className="header__logoInter logo">
                            <img src={logo_inter} alt="" />
                        </div>
                        <a href="/" className="header__middle__text">International</a>
                    </div>

                    <div className="header__search"> 
                        <input type="text" placeholder="Tìm kiếm"/>
                        <div className="header__inputIcon"> <HiOutlineSearch/></div>
                    </div>

                    <div className="header__user">
                        <div className="header__userIcon"> <FaUserAlt/></div>
                        <span className="header__userText">Đăng nhập</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
