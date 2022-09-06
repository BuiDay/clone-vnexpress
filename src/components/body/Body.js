import React from 'react';
import "./Body.css"
import img from '../../asset/2022-08.jpg'
import img2 from '../../asset/oilrosneftbloom.jpg'

const Body = () => {
    return (
        <div className='container'>
            <div className="body__container">
                <div className="body__left">
                    <div className="body__left__item">
                        <h4>Ukraine kêu gọi người dân Crimea tìm nơi ẩn náu</h4>
                        <div className="body__left__content">
                            <div className="body__left__img">
                                <img src={img} alt="" />
                            </div>
                            <p className="discription">Quan chức Ukraine kêu gọi người dân ở các vùng lãnh thổ "bị chiếm đóng", bao gồm Crimea, chuẩn bị nơi trú ẩn và tích trữ nguồn cung.</p>
                        </div>
                    </div>

                    <div className="body__left__item">
                        <h4>Ukraine kêu gọi người dân Crimea tìm nơi ẩn náu</h4>
                        <div className="body__left__content">
                            <div className="body__left__img">
                                <img src={img} alt="" />
                            </div>
                            <p className="discription">Quan chức Ukraine kêu gọi người dân ở các vùng lãnh thổ "bị chiếm đóng", bao gồm Crimea, chuẩn bị nơi trú ẩn và tích trữ nguồn cung.</p>
                        </div>
                    </div>

                    <div className="body__left__item">
                        <h4>Ukraine kêu gọi người dân Crimea tìm nơi ẩn náu</h4>
                        <div className="body__left__content">
                            <div className="body__left__img">
                                <img src={img} alt="" />
                            </div>
                            <p className="discription">Quan chức Ukraine kêu gọi người dân ở các vùng lãnh thổ "bị chiếm đóng", bao gồm Crimea, chuẩn bị nơi trú ẩn và tích trữ nguồn cung.</p>
                        </div>
                    </div>


                </div>


                <div className="body__right">
                    <div className="body__right__item">
                        <div className="body__right__title">
                            <a href='#' className="body__right__name titleActive">Kinh doanh</a>
                            <a href='#' className="body__right__name">Quốc tế</a>
                            <a href='#' className="body__right__name">Doanh nghiệp</a>
                            <a href='#' className="body__right__name">Chứng khoán</a>
                            <a href='#' className="body__right__name">Bất động sản</a>
                            <a href='#' className="body__right__name">Bảo hiểm</a>
                        </div>

                        <div className="body__right__content__top">
                            <div className="body__right__content__top__left">
                                <div className="body__right__content__top__left__img"><img src={img2} alt="" /></div>
                                <div className="body__right__content__top__left__content">
                                    <h4>Nga có thể đã thu gần 160 tỷ USD từ bán năng lượng sau xung đột</h4>
                                    <div className="discription">6 tháng qua, châu Âu, Trung Quốc và Thổ Nhĩ Kỳ là những nước mua nhiều năng lượng Nga nhất, nhập khẩu tổng cộng ...</div>
                                </div>
                            </div>

                            <div className="body__right__content__top__right">
                                <h4>Ấn Độ nói sẽ xem xét việc áp trần giá dầu Nga</h4>
                                <div className="discription">Ấn Độ - một trong những nước hiện mua nhiều dầu Nga nhất cho biết sẽ thận trọng đánh giá liệu có nên ... </div>
                            </div>
                        </div>

                        <div className="body__right__content__bottom">
                            <div className="body__right__content__bottom__title">Startup quần áo Coolmate nhận thêm 2,3 triệu USD</div>
                            <div className="body__right__content__bottom__title">3 thách thức cho sự phát triển của doanh nghiệp vừa và nhỏ</div>
                            <div className="body__right__content__bottom__title">Vay vốn mua nhà phải kèm bảo hiểm cháy nổ không?</div>
                        </div>
                    </div>

                    <div className="body__right__table">
                        <table>
                        <tbody>
                            <tr>
                                <th>Giá vàng</th>
                                <th>Mua</th>
                                <th>Bán</th>
                            </tr>
                            <tr>
                                <td>Vàng SJC (triệu đồng/lượng)</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                            </tr>
                            <tr>
                                <td>Thế giới (USD/ounce)</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;