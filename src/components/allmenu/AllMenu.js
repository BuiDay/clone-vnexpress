import React from "react";
import "./AllMenu.css";
import { AiOutlineClose } from "react-icons/ai";
import { data } from "../data/data"

const AllMenu = () => {
  return (
    <div className="allmenu__main__container">
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
          <div className="allmenu__main__left">
              {data.map((item, index) => {
                const Sublist = item.SubList;
                return (
                  <div className="allmenu__main__left__item">
                    <h1 className="allmenu__main__left__title" key={index}> {item.Name} </h1>
                    <ul className="allmenu__main__left__list">
                      {
                        Sublist.map((e, index) => {
                          return (
                            <li className="allmenu__main__left__name" key={index}>{e}</li>
                          )
                        })
                      }
                    </ul>
                  </div>)
              })}
            </div>
          <div className="allmenu__main__right"></div>
        </div>
      </div>
    </div>
  );
};

export default AllMenu;
