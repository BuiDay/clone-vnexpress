import React from 'react';
import "./Podcasts.css"
import {IoMdHeadset} from "react-icons/io"
import img from '../../asset/sat-nhan.jpg'

const Podcasts = () => {
    return (
        <div className='container'>
            <div className='podcasts__container'>
                <div className='podcasts__title title'>Podcasts</div>
                <div className="podcasts__content">
                    
                    <div className="podcasts__content__item">
                        <div className="podcasts__content__right">
                            <h4>Sát nhân nước Anh 9 lần qua mặt cảnh sát</h4>
                            <div className='discription'> Suốt 5 năm, giới chức Anh bất lực truy tìm một tên sát nhân giết hại 13 cô gái, hung thủ gửi tin...</div>
                        </div>
                        <div className="podcasts__content__img">
                            <img src={img} alt="" />
                            <div className='podcasts__content__icon'><IoMdHeadset/></div>
                        </div>
                    </div>

                    <div className="podcasts__content__item">
                        <div className="podcasts__content__right">
                            <h4>Sát nhân nước Anh 9 lần qua mặt cảnh sát</h4>
                            <div className='discription'> Suốt 5 năm, giới chức Anh bất lực truy tìm một tên sát nhân giết hại 13 cô gái, hung thủ gửi tin...</div>
                        </div>
                        <div className="podcasts__content__img">
                            <img src={img} alt="" />
                            <div className='podcasts__content__icon'><IoMdHeadset/></div>
                        </div>
                    </div>

                    <div className="podcasts__content__item">
                        <div className="podcasts__content__right"> 
                            <h4>Sát nhân nước Anh 9 lần qua mặt cảnh sát</h4>
                            <div className='discription'> Suốt 5 năm, giới chức Anh bất lực truy tìm một tên sát nhân giết hại 13 cô gái, hung thủ gửi tin...</div>
                        </div>
                        <div className="podcasts__content__img">
                            <img src={img} alt="" />
                            <div className='podcasts__content__icon'><IoMdHeadset/></div>
                        </div>
                    </div>

                </div>  
            </div>
        </div>
    );
};

export default Podcasts;