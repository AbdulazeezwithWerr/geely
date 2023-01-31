import React from 'react'
import './emgrand.css'
import img1 from '../../images/emgrand.jpeg'
import {getText} from '../locales/index'

export default function Emgrand() {
  return (
    <>
    <div className="emgrand">
    <div className="container">
          <div className="col-lg-7">
            <div className="row">
              <div className="coolray_text emgrand_txet">
                <h2>New Emgrand</h2>
                <p>{getText("emgrand1")}</p>
                <p>{getText("emgrand2")}
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>



    <div className="texnika">
        <div className="container">
          <div className="row">
            <h1 className='textnika_h1'>{getText("tugella3")}</h1>
            <div className="col-lg-12 mx-auto">
              <div className="row">
                <div className="row">
                  <div className="col-lg-6">

                    <div className="for_table_etxt">
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro4")}</p></div>
                      <div className="for_ichi"><p>New Emgrand</p></div>
                    </div>                   
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro5")}</p></div>
                      <div className="for_ichi"><p>{getText("emgrand11")}</p></div>
                    </div>
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro7")}</p></div>
                      <div className="for_ichi"><p>{getText("emgrand10")}</p></div>
                    </div>
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro9")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro10")}</p></div>
                    </div>
                 
                   
                   
                   
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro16")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro17")}</p></div>
                    </div>
                
                   
           
                    <div className="for_flex_tabel">
                      <div className="for_ichi"><p>{getText("monjaro18")}</p></div>
                      <div className="for_ichi"><p>175</p></div>
                    </div>
                
               
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro19")}</p></div>
                      <div className="for_ichi"><p>{getText("emgrand9")}</p></div>
                    </div>                  
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro21")}</p></div>
                      <div className="for_ichi"><p>{getText("emgrand8")}</p></div>
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
                      Geely New Emgrand <br /><br />
{getText("emgrand3")}
 <br/>
 {getText("emgrand4")}
 <br /><br />
 {getText("emgrand5")}
                        <br /> <br />
                        {getText("emgrand6")}                   
<br />
                      </p>
                      <h3>{getText("emgrand7")} </h3>
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
