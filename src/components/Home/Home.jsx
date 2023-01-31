import React from 'react'
import './home.css'
import { getText } from '../locales/index'

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="for_head_text">
                <h1>{getText("ab1")}</h1>
                <p>
                  {getText("ab2")}
                </p>
              </div>
            </div>
            <div className="col-lg-5">
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
