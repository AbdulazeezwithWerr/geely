import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {getText} from '../../locales/index'

import "./swiper.css";
import img from '../../../images/main 1.png'
import img2 from '../../../images/image_2023-01-26_11-26-33.png'
import img3 from '../../../images/Coolray_for_1.jpeg'

import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function Swipe() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="for_slider">                    
                        <div className="row">
                             <div className="col-lg-12 mx-auto">
                                <div className="row">
                                    <div className="col-lg-6 for_sliderrr">
                                        <div className="main_for_text">
                                        <h2>{getText("nav5")}</h2>
                                        <p>{getText("nav6")}</p>
                                    
                                       <Link to='/coolray' style={{textDecoration: "none"}}> <button className='read_more'>{getText("nav7")}</button></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 for_imagee for_sliderrr">
                                    <img src={img3} alt="" />
                                    </div>
                                </div>
                            </div>                        
                    </div>
                </div>

        </SwiperSlide>
        
        <SwiperSlide>
        <div className="for_slider">                    
                        <div className="row">
                             <div className="col-lg-12 mx-auto">
                                <div className="row">
                                    <div className="col-lg-6 for_sliderrr">
                                        <div className="main_for_text">
                                        <h2>{getText("nav8")}</h2>
                                        <p>{getText("nav9")}</p>
                                       

                                        <Link to='/okavango' style={{textDecoration: "none"}}> <button className='read_more'>{getText("nav7")}</button></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 for_imagee for_sliderrr">
                                    <img src={img} alt="" />
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>

        </SwiperSlide>
        
        <SwiperSlide>
        <div className="for_slider">                    
                        <div className="row">
                             <div className="col-lg-12 mx-auto">
                                <div className="row">
                                    <div className="col-lg-6 for_sliderrr">
                                        <div className="main_for_text">
                                        <h2>{getText("nav10")}</h2>
                                        <p>{getText("nav11")}</p>                                
                                        <Link to='/geometryE' style={{textDecoration: "none"}}> <button className='read_more'>{getText("nav7")}</button></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 for_imagee for_sliderrr">
                                    <img src={img2} alt="" />
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>

        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
