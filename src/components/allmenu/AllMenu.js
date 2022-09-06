import React from "react";
import "./AllMenu.css";
import { AiOutlineClose } from "react-icons/ai";

const AllMenu = () => {
  return (
    <div className="allmenu__main">
      <div className="allmenu__container">
        <div className="allmenu__top">
          <div className="allmenu__top__title">Tất cả chuyên mục</div>
          <div className="allmenu__top__close">
            <span>Đóng</span>
            <div className="allmenu__top__close__icon">
              <AiOutlineClose />
            </div>
          </div>
        </div>

        <div className="allmenu__main">
            <div className="allmenu__main__left"></div>
            <div className="allmenu__main__right"></div>
        </div>
      </div>
    </div>
  );
};

export default AllMenu;
