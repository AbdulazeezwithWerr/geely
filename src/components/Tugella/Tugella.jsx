import React from 'react'
import './tugella.css'
import img1 from '../../images/tugella2.jpeg'
import {getText} from '../locales/index'


export default function Tugella() {
  return (
    <>
     <div className="tugella">
    
    <div className="container">
          <div className="col-lg-7">
            <div className="row">
              <div className="coolray_text emgrand_txet">
                <h2>Geely Tugella</h2>
                <p>{getText("tugella1")}</p>
                <p>        
                {getText("tugella2")}
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
                      <div className="for_ichi"><p>{getText("tugella4")}</p></div>
                      <div className="for_ichi"><p>Tugella</p></div>
                    </div>                   
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro5")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro6")}</p></div>
                    </div>
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro7")}</p></div>
                      <div className="for_ichi"><p>{getText("tugella5")}</p></div>
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
                      <div className="for_ichi"><p>{getText("tugella6")}</p></div>
                    </div>
                    <div className="for_flex_tabel  qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro14")}</p></div>
                      <div className="for_ichi"><p>{getText("tugella7")}</p></div>
                    </div>
                 
                   
                   
                   
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro16")}</p></div>
                      <div className="for_ichi"><p>{getText("monjaro17")}</p></div>
                    </div>
                
                   
           
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro18")}</p></div>
                      <div className="for_ichi"><p>210</p></div>
                    </div>
                
               
                    <div className="for_flex_tabel ">
                      <div className="for_ichi"><p>{getText("monjaro19")}</p></div>
                      <div className="for_ichi"><p>{getText("tugella8")}</p></div>
                    </div>                  
                    <div className="for_flex_tabel qale_iwla">
                      <div className="for_ichi"><p>{getText("monjaro21")}</p></div>
                      <div className="for_ichi"><p>{getText("tugella9")}</p></div>
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
                        
                      Geely Tugella <br /><br />
{getText("tugella10")}
<br />
{getText("tugella11")}
<br /><br />
{getText("tugella12")}
<br /> <br />
{getText("tugella13")}
 <br/> 
                      </p>
                      <h3>{getText("tugella14")}</h3>
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
