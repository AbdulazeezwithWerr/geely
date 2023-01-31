import React from 'react'
import './footer.css'
import pdf from '../../images/business (1).4b65cbfbf710a7956098.docx'
import {CiSaveDown1} from 'react-icons/ci'
import {getText} from '../locales/index'

export default function Footer() {
  return (
    <>
    <div className="footer">

            <div className="row">
            <div className="for_map">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3190fffa6de3e65baa11d3f6c7891c9e7dc12445a30fc948e7957009b50ee378&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
        </div>
            </div>
            <div className="ro_footer_text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <p>{getText("main16")}</p>
                                    <a href={pdf} className="for_dillers"> <CiSaveDown1 /> {getText("main17")}</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    
    </>
  )
}
