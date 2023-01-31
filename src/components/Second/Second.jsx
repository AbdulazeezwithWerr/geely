import React from 'react'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import './second.css'
import {getText} from '../locales/index'

export default function Second() {
    return (
        <>
            <div className="second">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="for_right_text">
                                        <h1>GEELY HOLDING GROUP</h1>
                                        <p>
                                            {getText("ab3")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mx-auto">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                <div className="for_right_text">                                        
                                        <p>
                                        {getText("ab4")} 
                                        </p>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-6">
                                <img src={img3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mx-auto">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="for_right_text">                                    
                                        <p>
                                        {getText("ab5")} 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
