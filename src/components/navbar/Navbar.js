import React, { useEffect, useState } from 'react';
import './Navbar.css'
import {HiHome} from 'react-icons/hi'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {

    const [showSub, setShowSub] = useState(false);
    const showRef = 

    // useEffect(()=>{
    //     const list__titles = document.querySelectorAll(".navbar__title");
    //         list__titles.forEach(title=>{
                
    //             title.addEventListener("mouseover",(e)=>{
    //                 console.log()
    //             })
    //         })
    // })

    return (
       <div className='navbar__container'>
            <ul className='navbar__parent'>
                <li className='navbar__icon'><HiHome/></li>
                <li className='navbar__title'>
                    Thời sự
                   
                </li>
                <li className='navbar__title'>Góc nhìn</li>
                <li className='navbar__title'>Thế giới</li>
                <li className='navbar__title'>Video</li>
                <li className='navbar__title'>Podcasts</li>
                <li className='navbar__title'>Kinh doanh</li>
                <li className='navbar__title'>Khoa học</li>
                <li className='navbar__title'>Giải trí</li>
                <li className='navbar__title'>Thể thao</li>
                <li className='navbar__title'>Pháp luật</li>
                <li className='navbar__title'>Giáo dục</li>
                <li className='navbar__title'>Sức khỏe</li>
                <li className='navbar__title'>Đời sống</li>
                <li className='navbar__title'>Du lịch</li>
                <li className='navbar__title'>Số hóa</li>
                <li className='navbar__title'>Ý kiến</li>
                <li className='navbar__title'>Tâm sự</li>
                <li className='navbar__title'>Hài</li>
                <li className='navbar__all'>Tất cả <FaBars className='navbar__all__icon'/> </li>
            </ul> 
       </div>
    );
};

export default Navbar;