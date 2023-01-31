import React from 'react'
import './testDrive.css'
import {getText} from '../locales/index'

export default function TestDrive() {
    return (
        <>
            <div className="testdrive">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto"></div>
                        <h1>{getText("main11")}</h1>

                        <div className="for_form">
                            <form action="">
                                <div className="row justify-content-between ">
                                    <div className="col-md-6 d-flex flex-column align-items-md-end align-items-center">
                                        <select id='select_id' required name="model" >
                                            <option value="" hidden disabled selected>{getText("main12")}</option>
                                            <option value="Monjaro" className='optin_text'>Monjaro</option>
                                            <option value="Okavango" className='optin_text'>Okavango</option>
                                            <option value="Tugella" className='optin_text'>Tugella</option>
                                            <option value="Coolray" className='optin_text'>Coolray</option>
                                            <option value="New Emgrand" className='optin_text'>New Emgrand</option>
                                            <option value="Geometry E" className='optin_text'>Geometry E</option>
                                            <option value="Geometry C" className='optin_text'>Geometry C</option>
                                        </select>
                                        <input required type="text" name="name" id="name_id" placeholder="имя" />
                                        <input required type="text" name="from_name" id="email_id" placeholder='e-mail' />                                      
                                    </div>
                                    <div className="col-md-6 d-flex flex-column align-items-md-start align-items-center">
                                        <select id='select_id2' required name="city" >
                                            <option value="" hidden disabled selected>{getText("main13")}</option>
                      <option value="г. Ташкент" className='optin_text'>{getText("city1")}</option>
                      <option value="Ташкентская область" className='optin_text'>{getText("city2")}</option>
                      <option value="Андижанская область" className='optin_text'>{getText("city3")}</option>
                      <option value="Бухарская область" className='optin_text'>{getText("city4")}</option>
                      <option value="Джиззакская область" className='optin_text'>{getText("city5")}</option>
                      <option value="Кашкадарьинская область" className='optin_text'>{getText("city6")}</option>
                      <option value="Навоийская область" className='optin_text'>{getText("city7")}</option>
                      <option value="Наманганская область" className='optin_text'>{getText("city8")}</option>
                      <option value="Республика Каракалпакистан" className='optin_text'>{getText("city9")}</option>
                      <option value="Самаркандская область" className='optin_text'>{getText("city10")}</option>
                      <option value="Сырдарьинская область" className='optin_text'>{getText("city11")}</option>
                      <option value="Сурхандарьинская область" className='optin_text'>{getText("city12")}</option>
                      <option value="Ферганская область" className='optin_text'>{getText("city13")}</option>
                      <option value="Хорезмская область" className='optin_text'>{getText("city14")}</option>
                                        </select>
                                        <input id='number_id' name='number' required type="tel" placeholder='телефон' />
                                        <div className="boxes">
                                            <div className="for_checkbox">
                                                <input
                                                    required type="checkbox" id="vehicle1" name="vehicle1" value='' />
                                                <label for="vehicle1"></label>
                                                <p
                                                    onClick={() =>
                                                        window.scrollTo({
                                                            left: 0,
                                                            top: 3000,
                                                            behavior: "smooth",
                                                        })
                                                    }
                                                >{getText("main14")}</p>
                                            </div>                                           
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-2 mx-auto for_btn_mobile" ><button type='submit' id="myButton1" className='otpravit'>{getText("main15")}</button></div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                                        {/* <button>Как стать дилером?</button> */}
                                        
        </>
    )
}
