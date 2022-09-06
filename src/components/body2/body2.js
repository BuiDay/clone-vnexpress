import React from 'react';
import './body2.css'
import img from '../../asset/30.jpg'
import img2 from '../../asset/nhat.jpg'
import img3 from '../../asset/calinh.jpg'
import img4 from '../../asset/3len.png'
import img5 from '../../asset/sandy.jpg'
import img6 from '../../asset/hp.jpg'

const body2 = () => {
    return (
        <div className='container'>
            <div className="body2__cotainer">
                <div className="body2__header">
                    <a href='#' className="titleActive">Du lịch</a>
                    <a href='#' className="body2__header__name">Điểm đến</a>
                    <a href='#' className="body2__header__name">Ẩm thực</a>
                    <a href='#' className="body2__header__name">Tư vấn</a>
                    <a href='#' className="body2__header__name">Cẩm nang</a>
                    <a href='#' className="body2__header__name">Ảnh</a>
                    <a href='#' className="body2__header__name">Ăn và chơi</a>
                    <a href='#' className="body2__header__name">Mở cửa du lịch</a>
                </div>
                <div className="body2__content">
                    <div className="body2__content__left">
                        <div className="body2__content__left__img"> <img src={img} alt="" /></div>
                        <h1 className="body2__content__left___title">Vì sao nhiều người chụp ảnh 'biển vô cực' không đẹp? </h1>
                        <p className='discription'>Để có bức ảnh đẹp ở "biển vô cực" cần trời trong, nắng đẹp, ít gió, thủy triều thấp... </p>
                    </div>
                    <div className="body2__content__mid">
                        <div className="body2__content__mid__item">
                            <div className="body2__content__mid__img"> <img src={img2} alt="" /></div>
                            <h1 className="body2__content__mid___title">Cách tiết kiệm khi du lịch tự túc Nhật Bản 16 </h1>
                        </div>
                        <div className="body2__content__mid__item">
                            <div className="body2__content__mid__img"> <img src={img3} alt="" /></div>
                            <h1 className="body2__content__mid___title">Món ngon mùa nước nổi miền Tây</h1>
                        </div>
                    </div>
                    <div className="body2__content__right">
                        <div className="body2__content__right__item">
                            <h1 className="body2__content__mid___title">Lâm Đồng cấm du lịch tự phát ở nơi nguy hiểm</h1>
                            <div className="body2__content__mid__img"> <img src={img4} alt="" /></div>

                        </div>

                        <div className="body2__content__right__item">
                            <h1 className="body2__content__mid___title">Hành động tưởng bình thường nhưng bị phạt ở châu Âu</h1>
                            <div className="body2__content__mid__img"> <img src={img5} alt="" /></div>

                        </div>

                        <div className="body2__content__right__item">
                            <h1 className="body2__content__mid___title">Những di sản kiến trúc Pháp hơn 100 năm ở Hải Phòng</h1>
                            <div className="body2__content__mid__img"> <img src={img6} alt="" /></div>

                        </div>

                        <div className="">
                            <h1 className="body2__content__mid___title">Với 10 triệu đồng, nên đi Bali hay Phú Quốc?</h1>
                            <p className='discription'>Với 10 triệu đồng có thể đi du lịch Bali nhưng chi tiêu theo kiểu tiết kiệm, nếu đi Phú Quốc thì nghỉ dưỡng sang chảnh hơn. </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default body2;