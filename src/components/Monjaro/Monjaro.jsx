import React from 'react'
import './mpnjaro.css'
import img1 from '../../images/Geely-Monjaro-2022-perednyaya-panel.jpg'
import {getText} from '../locales/index'

export default function Monjaro() {
  return (
    <>
    <div className="monjaro">
    
    <div className="container">
         <div className="row">
         <div className="col-lg-7">
            
              <div className="coolray_text emgrand_txet">
                <h2>Geely Monjaro</h2>
                <p>{getText("monjaro1")}</p>
                <p>

                {getText("monjaro2")}
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
                      <div className="for_ichi"><p>Monjaro</p></div>
                    </div>                   
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro5")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro6")}</p></div>
                    </div>
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro7")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro8")}</p></div>
                    </div>
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro9")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro10")}</p></div>
                    </div>
                 
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro11")}</p></div>
                      <div className="for_ichi"><p>8AT</p></div>
                    </div>
                 
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro12")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro13")}</p></div>
                    </div>
                    <div className="for_flex_tabel  qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro14")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro15")}</p></div>
                    </div>
                 
                   
                   
                   
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro16")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro17")}</p></div>
                    </div>
                
                   
           
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro18")}</p></div>
                      <div className="for_ichi"><p>215</p></div>
                    </div>
                
               
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro19")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro20")}</p></div>
                    </div>                  
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro21")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro22")}</p></div>
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
                      {getText("monjaro25")}
                      
                      <br /> <br />
                      {getText("monjaro26")}
                      
                        <br /> <br />
                        {getText("monjaro27")}
<br />
                      </p>
                      <h3>{getText("monjaro28")}</h3>
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
