import React from 'react'
import './okavango.css'
import img1 from '../../images/oka2.jpg'
import {getText} from '../locales/index'
export default function Okavango() {
    return (
        <>
            <div className="okavango">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
     






                            <div className="coolray_text emgrand_txet">
                                <h2>Geely Okavango</h2>
                                <p>{getText("ok1")}</p>
                                <p>
                                {getText("ok2")}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="texnika">
                <div className="container">
                    <div className="row">
                        <h1 className='textnika_h1'>{getText("monjaro3")}</h1>
                        <div className="col-lg-12 mx-auto">
                            <div className="row">
                                <div className="col-lg-6">

                                    <div className="for_table_etxt">
                                        <div className="for_flex_tabel qale_iwla">
                                            <div className="for_ichi"><p>{getText("monjaro4")}</p></div>
                                            <div className="for_ichi"><p>Okavango</p></div>
                                        </div>

                                        <div className="for_flex_tabel ">
                                            <div className="for_ichi"><p>{getText("monjaro5")}</p></div>
                                            <div className="for_ichi"><p>{getText("ok14")}</p></div>
                                        </div>

                                        <div className="for_flex_tabel qale_iwla">
                                            <div className="for_ichi"><p>{getText("monjaro7")}</p></div>
                                            <div className="for_ichi"><p>{getText("ok13")}</p></div>
                                        </div>

                                        <div className="for_flex_tabel ">
                                            <div className="for_ichi"><p>{getText("monjaro9")}</p></div>
                                            <div className="for_ichi"><p>{getText("monjaro10")}</p></div>
                                        </div>

                                        <div className="for_flex_tabel qale_iwla">
                                            <div className="for_ichi"><p>{getText("monjaro11")}</p></div>
                                            <div className="for_ichi"><p>7AT</p></div>
                                        </div>

                                        <div className="for_flex_tabel ">
                                            <div className="for_ichi"><p>{getText("monjaro12")}</p></div>
                                            <div className="for_ichi"><p>{getText("ok12")}</p></div>
                                        </div>
                                        <div className="for_flex_tabel  qale_iwla">
                                            <div className="for_ichi"><p>{getText("monjaro14")}</p></div>
                                            <div className="for_ichi"><p>{getText("ok11")}</p></div>
                                        </div>

                                        <div className="for_flex_tabel ">
                                            <div className="for_ichi"><p>{getText("monjaro16")}</p></div>
                                            <div className="for_ichi"><p>{getText("monjaro17")}</p></div>
                                        </div>

                                        <div className="for_flex_tabel qale_iwla ">
                                            <div className="for_ichi"><p>{getText("ok10")}</p></div>
                                            <div className="for_ichi"><p>7</p></div>
                                        </div>

                                        <div className="for_flex_tabel ">
                                            <div className="for_ichi"><p>{getText("monjaro18")}</p></div>
                                            <div className="for_ichi"><p>190</p></div>
                                        </div>

                                        <div className="for_flex_tabel qale_iwla">
                                            <div className="for_ichi"><p>{getText("monjaro19")}</p></div>
                                            <div className="for_ichi"><p>{getText("ok9")}</p></div>
                                        </div>
                                        <div className="for_flex_tabel ">
                                            <div className="for_ichi"><p>{getText("monjaro21")}</p></div>
                                            <div className="for_ichi"><p>{getText("ok8")}</p></div>
                                        </div>

                                        <div className="for_flex_tabel qale_iwla">
                                            <div className="for_ichi"><p>{getText("monjaro23")}</p></div>
                                            <div className="for_ichi"><p>{getText("monjaro24")}</p></div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right_texnika">
                                        <p>
                                        Geely Okavango
<br /><br />
{getText("ok3")}
<br /><br />

{getText("ok4")}
                                            <br /> <br />                                          
                                            {getText("ok5")}
                                            <br /> <br />
                                            {getText("ok6")}
                                            <br />
                                        </p>
                                        <h3>{getText("ok7")}</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="for_image">
                <div className="row">
                    <img src={img1} alt="" />
                </div>
            </div>
        </>
    )
}
