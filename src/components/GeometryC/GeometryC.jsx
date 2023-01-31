import React from 'react'
import './geometryC.css'
import img1 from '../../images/0Ajz-scaled.webp'
import { getText } from '../locales/index'

export default function GeometryC() {
  return (
    <> <div className="geomteryC">

      <div className="container">
        <div className="col-lg-7">
          <div className="row">
            <div className="coolray_text emgrand_txet">
              <h2>Geely Geometry C</h2>
              <p>{getText("c1")}</p>
              <p>
                {getText("c2")}
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
                        <div className="for_ichi"><p>{getText("c10")}</p></div>
                      </div>
                      <div className="for_flex_tabel qale_iwla">
                        <div className="for_ichi"><p>{getText("monjaro7")}</p></div>
                        <div className="for_ichi"><p>{getText("c9")}</p></div>
                      </div>


                      <div className="for_flex_tabel ">
                        <div className="for_ichi"><p>{getText("monjaro11")}</p></div>
                        <div className="for_ichi"><p>7DCT</p></div>
                      </div>


                      <div className="for_flex_tabel qale_iwla">
                        <div className="for_ichi"><p>{getText("monjaro19")}</p></div>
                        <div className="for_ichi"><p>{getText("c8")}</p></div>
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
                        Geely Geometry C
                        <br /><br />
                        {getText("c3")}
                        <br />
                        {getText("c4")}
                        <br /><br />
                        {getText("c5")}
                        <br />
                        {getText("c6")}
                        <br /><br />
                      </p>
                      <h3>{getText("c7")}  </h3>
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
