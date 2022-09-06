import React from "react";
import img1 from "../../asset/giadauvuotxang.jpg"
import img2 from "../../asset/unname.png"
import "./Intro.css"

const Intro = () => {
  return (
    <div className="container">
      <div className="intro__container">
        <div className="intro__left">
          <div className="content__top">
            <div className="content__top__img"><img src={img1} alt="" /></div>
            <div className="content__top__right">
                <h2>Vì sao giá dầu cao hơn xăng?</h2>
                <p className="discription">
                    Ngày 5/9 đánh dấu lần đầu, giá bán lẻ các loại dầu cao hơn xăng,
                    phần lớn do nhu cầu tiêu dùng dầu và xăng đang đảo ngược.<br/><br/> Ở kỳ
                    điều hành ngày 5/9, dầu diesel và dầu hoả tăng lên 25.180-25.440
                    đồng một lít, trong khi xăng
                </p>
            </div>
          </div>
          <div className="content__bottom">

            <div className="content">
                <h4>Trường công quá tải</h4>
                <p className="discription">Khi biết sĩ số lớp con gái năm nay là 52, chị Long đánh giá "cũng đông" nhưng thấy chấp nhận được vì "năm ngoái lớp có tận 62 bạn</p>
            </div>
           
            <div className="content">
                <h4>Thủ tướng yêu cầu cắt giảm thủ tục gây phiền hà cho mua sắm thuốc</h4>
                <p className="discription">Bộ Y tế rà soát, cắt giảm tối đa thủ tục hành chính rườm rà, gây phiền hà cho mua sắm thuốc, trang thiết bị, sinh phẩm phục vụ khám chữa bệnh, Thủ tướng chỉ đạo.</p>
            </div>
            
            <div className="content">
                <h6>Góc nhìn</h6>
                <h4>Ai bảo vệ nhà đầu tư?</h4>
                <p className="discription">Vì tin tưởng doanh nghiệp niêm yết đáp ứng đủ tiêu chuẩn mới được lên sàn, nhiều nhà đầu tư ‘sa bẫy’ mua cổ phiếu doanh nghiệp vốn ảo."</p>
                <div className="author">
                    <h3>Hải Lý</h3>
                    <div className="autho__img"><img src={img2} alt=""/></div>
                </div>
            </div>

          </div>
        </div>
        <div className="intro__right"></div>
      </div>
    </div>
  );
};

export default Intro;
