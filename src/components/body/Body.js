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
                            <a href='#' className="titleActive">Kinh doanh</a>
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

                    <div className='body__right__box'>
                        <div className="body__right__table">
                            <table width={"100%"}>
                            <tbody >
                                <tr>
                                    <th className='giavang'>Giá vàng</th>
                                    <th className='mua'>Mua</th>
                                    <th className='ban'>Bán</th>
                                </tr>
                                
                                <tr>
                                    <td>Vàng SJC (triệu đồng/lượng)</td>
                                    <td className='so'>66</td>
                                    <td className='so'>66.5</td>
                                </tr>

                                <tr>
                                    <td>Thế giới (USD/ounce)</td>
                                    <td className='so'>1.767</td>
                                    <td className='so'>1.712</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="body__right__logos">
                            <div className="body__right__logo"><img src="https://s1.vnecdn.net/vnexpress/restruct/i/v646/banner/logo-startup.svg" alt="" /></div>
                            <div className="body__right__logo"><img src="https://s1.vnecdn.net/vnexpress/restruct/i/v646/banner/logo-vhome.svg" alt="" /> </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Body;