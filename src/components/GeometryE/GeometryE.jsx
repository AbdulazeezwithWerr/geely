import React from 'react'
import './GeometryE.css';
import img1 from '../../images/geometry-e3.jpg'
import {getText} from '../locales/index'

export default function GeometryE() {
  return (
    <>
<div className="geomteryE">
    
    <div className="container">
          <div className="col-lg-7">
            <div className="row">
              <div className="coolray_text emgrand_txet">
                <h2>Geely Geometry Е</h2>
                <p>{getText("e1")}</p>
                <p>
                {getText("e2")}                      
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
                <div className="row">
                  <div className="col-lg-6">

                    <div className="for_table_etxt">
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro4")}</p></div>
                      <div className="for_ichi"><p>Geometry C</p></div>
                    </div>                   
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("c11")}</p></div>
                      <div className="for_ichi"><p>{getText("e15")}</p></div>
                    </div>
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro7")}</p></div>
                      <div className="for_ichi"><p>{getText("e14")}</p></div>
                    </div>

                 
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro18")}</p></div>
                      <div className="for_ichi"><p>{getText("e4")}</p></div>
                    </div>                               
                                            
               
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro9")}</p></div>
                      <div className="for_ichi"><p>{getText("e3")}</p></div>
                    </div>                  
                            
        
                  
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro14")}</p></div>
                      <div className="for_ichi"><p>{getText("e12")}</p></div>
                    </div>

                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("e10")}</p></div>
                      <div className="for_ichi"><p>{getText("e11")}</p></div>
                    </div>

                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro23")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro24")}</p></div>
                    </div>

                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right_texnika">
                      <p>
                      Geely Geometry Е
                        <br/><br/>
                     

{getText("e4")}
<br/>
{getText("e5")}
<br/><br/>
{getText("e6")}
<br/><br/>
{getText("e7")}
<br />
{getText("e8")}
    
<br /><br />
                      </p>
                      <h3>{getText("e9")}</h3>
                    </div>
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
