import React from 'react'
import './main.css'
import Swipe from './Swiper/Swiper'
import cars1 from '../../images/main 8.png'
import cars2 from '../../images/main 6.png'
import cars3 from '../../images/main 7.png'
import cars4 from '../../images/main 2.png'
import cars5 from '../../images/main 3.png'
import cars6 from '../../images/main 4.png'
import cars7 from '../../images/main 5.png'
import TestDrive from '../TestDrive/TestDrive'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

export default function Main() {
  return (
    <>
    <div className="main_page">
        <div className="container">
            <div className="row">
                <div className="for_swiper">
                  <Swipe />
                </div>
            </div>
        </div>
    </div>

    <div className="for_cars">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mx-auto">
                    <p className="for_header_text">{getText("main1")}</p>                    
                    <div className="row">
                       <div className="col-lg-4">
                       <Link  style={{textDecoration: "none"}} to='/monjaro'> 
                            <img className='frstcg' src={cars1} alt="" />
                            <div className="text_cars">
                                <p>Monjaro</p>
                                <p className="sena_cars">{getText("main2")}</p>
                            </div>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                     <Link to='/okavango' style={{textDecoration: "none"}}><img src={cars2} alt="" />
                            <div className="text_cars">
                                <p>Okavango</p>
                                <p className="sena_cars">{getText("main3")}</p>
                            </div>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                           <Link to='/tugella' style={{textDecoration: "none"}}> <img src={cars3} alt="" /><div className="text_cars">
                                <p>Tugella</p>
                                <p className="sena_cars">{getText("main4")}</p>
                            </div></Link>
                           </div>
                    </div>
                </div>
                <div className="col-lg-12 mx-auto">
                    
                   <Link style={{textDecoration: "none"}} to="/coolray">
                   <div className="row">
                        <div className="col-lg-4">
                            <img className='frstcg' src={cars4} alt="" />
                            <div className="text_cars">
                                <p>Coollray</p>
                                <p className="sena_cars">{getText("main5")}</p>
                            </div>
                        </div>
                        
                    </div>
                   </Link>
                </div>
                <div className="col-lg-12 mx-auto sedann">
                <p className="for_header_text">{getText("main6")}</p>
                  <Link style={{textDecoration: "none"}} to='/emgrand'>  <div className="row">
                        <div className="col-lg-4">
                            <img className='frstcg' src={cars5} alt="" />
                            <div className="text_cars">
                                <p>New Emgrand</p>
                                <p className="sena_cars">{getText("main7")}</p>
                            </div>
                        </div>
                        
                    </div></Link>
                </div>

                <div className="col-lg-12 mx-auto sedann">
                <p className="for_header_text">{getText("main8")}</p>
                    <div className="row">
                        <div className="col-lg-4">
                          <Link style={{textDecoration: "none"}} to='/geometryE'>
                          <img className='frstcg' src={cars6} alt="" />
                            <div className="text_cars">
                                <p>Geometry E</p>
                                <p className="sena_cars">{getText("main9")}</p>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4">
                            <Link style={{textDecoration: "none"}} to='/geometryC'><img className='frstcg' src={cars7} alt="" />
                            <div className="text_cars">
                                <p>Geometry C</p>
                                <p className="sena_cars">{getText("main10")}</p>
                            </div></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <TestDrive />
    </>
  )
}
