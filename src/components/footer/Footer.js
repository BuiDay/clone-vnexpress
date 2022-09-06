import React from "react";
import "./Footer.css";
import img from "../../asset/inter.png";
import img2 from "../../asset/vne.png";
import { GrMail } from "react-icons/gr";
import { FaFacebookF,FaTwitter,FaYoutube} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="container">
      <div className="footer__container">
        <div className="footer__container__top">
          <ul className="footer__container__menu">
            <li className="footer__container__menu__name bold">Trang chủ</li>
            <li className="footer__container__menu__name bold">Video</li>
            <li className="footer__container__menu__name bold">Podcasts</li>
            <li className="footer__container__menu__name bold">Ảnh</li>
            <li className="footer__container__menu__name bold">Infographics</li>
            <li className="footer__container__menu__name bold">Mới nhất</li>
            <li className="footer__container__menu__name bold">Xem nhiều</li>
            <li className="footer__container__menu__name bold">Tin nóng</li>
          </ul>
          <ul className="footer__container__menu">
            <li className="footer__container__menu__name">Thời sự</li>
            <li className="footer__container__menu__name">Góc nhìn</li>
            <li className="footer__container__menu__name">Thế giới</li>
            <li className="footer__container__menu__name">Kinh doanh</li>
            <li className="footer__container__menu__name">Giải trí</li>
          </ul>
          <ul className="footer__container__menu">
            <li className="footer__container__menu__name">Thể thao</li>
            <li className="footer__container__menu__name">Pháp luật</li>
            <li className="footer__container__menu__name">Giáo dục</li>
            <li className="footer__container__menu__name">Sức khỏe</li>
            <li className="footer__container__menu__name">Đời sống</li>
            <li className="footer__container__menu__name">Du lịch</li>
          </ul>
          <ul className="footer__container__menu">
            <li className="footer__container__menu__name">Khoa học</li>
            <li className="footer__container__menu__name">Số hóa</li>
            <li className="footer__container__menu__name">Xe</li>
            <li className="footer__container__menu__name">Ý kiến</li>
            <li className="footer__container__menu__name">Tâm sự</li>
            <li className="footer__container__menu__name">Hài</li>
          </ul>
          <ul className="footer__container__menu">
            <li className="footer__container__menu__name">Rao vặt</li>
            <li className="footer__container__menu__name">Startup</li>
            <li className="footer__container__menu__name">Mua ảnh VnExpress</li>
            <li className="footer__container__menu__name">Vhome</li>
            <li className="footer__container__menu__name">eBox</li>
            <li className="footer__container__menu__name">eWork</li>
          </ul>

          <div className="footer__container__contact">
            <div className="footer__container__item">
              <h1 className="footer__container__contact__down">Tải ứng dụng</h1>
              <div className="footer__container__contact__container">
                <div className="footer__container__contact__btn">
                  <div className="footer__container__contact__btn__img">
                    {" "}
                    <img src={img} alt="" />{" "}
                  </div>
                  <span>VnExpress</span>
                </div>
                <div className="footer__container__contact__btn">
                  <div className="footer__container__contact__btn__img">
                    <img className="gray" src={img} alt="" />
                  </div>
                  <span>International</span>
                </div>
              </div>
            </div>

            <div className="footer__container__item">
              <h1 className="footer__container__contact__down">Liên hệ</h1>
              <div className="footer__container__contact__container">
                <div className="footer__container__contact__link">
                  <GrMail />
                  <span>Toà soạn</span>
                </div>

                <div className="footer__container__contact__link">
                  <div className="footer__container__contact__btn__img">
                    <img
                      src="https://s1.vnecdn.net/vnexpress/restruct/c/v1406/v2_2019/pc/images/graphics/icon-eclick.svg"
                      alt=""
                    />
                  </div>
                  <span>Quảng cáo</span>
                </div>

                <div className="footer__container__contact__link">
                  <div className="footer__container__contact__btn__img">
                    {" "}
                    <img
                      src="https://s1.vnecdn.net/vnexpress/restruct/c/v1406/v2_2019/pc/images/graphics/logo_vlight.svg"
                      alt=""
                    />
                  </div>
                  <span>Hợp tác bản quyền</span>
                </div>
              </div>
            </div>
            <div className="footer__container__item">
              <h1 className="footer__container__contact__down">
                Đường dây nóng
              </h1>
              <div className="footer__container__contact__container">
                <div className="footer__container__contact__link__contact">
                    <div className="footer__container__contact__phone">083.888.0123</div>
                    <div className="footer__container__contact__location">(Hà Nội)</div>
                </div>
                <div className="footer__container__contact__link__contact">
                    <div className="footer__container__contact__phone">082.233.3555</div>
                    <div className="footer__container__contact__location">(TP. Hồ Chí Minh)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__container__middle">
            <div className="footer__container__middle__left">
                <span>Báo điện tử</span>
                <div className="footer__container__middle__logo"><img src={img2} alt="" /></div>
            </div>
            <div className="footer__container__middle__right">
                <span>RRS</span>
                <span>Theo dõi VnExpress trên</span>
                <div className="footer__container__bottom__icon facebook"><FaFacebookF/></div>
                <div className="footer__container__bottom__icon twiteer"><FaTwitter/></div>
                <div className="footer__container__bottom__icon youtube"><FaYoutube/></div>
            </div>
        </div>
        <div className="footer__container__bottom">
            <div className="footer__container__bottom__item">
                <h1>Báo tiếng Việt nhiều người xem nhất</h1>
                <span>Thuộc Bộ Khoa học Công nghệ</span>
                <span>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</span>
            </div>
            <div className="footer__container__bottom__item">
                <span>Tổng biên tập: Phạm Hiếu</span>
                <span>Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội</span>
                <span>Điện thoại: 024 7300 8899 - máy lẻ 4500</span>
            </div>
            <div className="footer__container__bottom__item">
                <span>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
