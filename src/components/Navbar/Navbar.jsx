import React, { useState } from 'react'
import './navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { getLanguage, getText } from '../locales';
import { LANGUAGE } from '../tools/constants';


export default function Navbar() {
  const [burger, setBurger] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
 
  const changeNavbar = () => {
    if (window.scrollY >= 30) {
        setNavbar(true)
    }
    else {
        setNavbar(false)
    }
}

const changeLanguage = (e) => {
  localStorage.setItem(LANGUAGE, e.target.value)
  document.location.reload(true)
}


window.addEventListener('scroll', changeNavbar)

  return (
    <>
    <div className={`Navbar ${navbar ? 'active' : ''} && ${isOpen && "open"} `}>
        <div className="container">            
               <div className="row">
                 <div className="col-2 d-lg-none d-flex">
                 
               <Link  to='/'><img src={logo} alt="" /></Link>
             
                 </div>
               <div className={`col-9 nav_a_box ${burger ? 'active' : ''}`}>
                   <div className="for_left_navbar">
                    <Link className='a_navbar_link for_mobilae' to='/'><img src={logo} alt="" /></Link>
                    <p 
                     onClick={() =>                      
                      window.scrollTo({
                          left: 0,
                          top: 800,
                          behavior: "smooth",                      
                        })                                               
                  }                                   
                    className='a_navbar_link' to='/'>{getText("nav1")}</p>
                    <p 
                    onClick={() =>
                      window.scrollTo({
                          left: 0,
                          top: 2000,
                          behavior: "smooth",
                      })
                  }
                    className='a_navbar_link for_frstt' to='/'>{getText("nav2")}</p>
                    <Link onClick={() => setIsOpen(!isOpen)} className='a_navbar_link for_seconddd' to='/testdrive'>{getText("nav3")}</Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className='a_navbar_link' to='/'></Link>
                    <Link onClick={() => setIsOpen(!isOpen)} className='a_navbar_link for_mobile_about' to='/about'>{getText("nav4")}</Link>
                    <div className="for_right_navbar2 ">
                        {/* <select onChange={changeLanguage}>
                          <option value="РУ" selected={getLanguage() === "ru"}>РУ</option>
                          <option value="UZ" selected={getLanguage() === "uz"}>UZ</option>
                        </select> */}
                        <select onChange={changeLanguage}>
                            <option value="ru" selected={getLanguage() === "ru"} >РУ</option>
                            <option value="uz" selected={getLanguage() === "uz"} >UZ</option>
                        </select>     
                    </div>
                   </div>
                   
                </div>              
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <div className="for_right_navbar">
                        {/* <select onChange={changeLanguage}>
                          <option value="РУ" selected={getLanguage() === "ru"}>РУ</option>
                          <option value="UZ" selected={getLanguage() === "uz"}>UZ</option>
                        </select> */}
                        <select onChange={changeLanguage}>
                            <option value="ru" selected={getLanguage() === "ru"} >РУ</option>
                            <option value="uz" selected={getLanguage() === "uz"} >UZ</option>
                        </select>     
                    </div>
                </div>
               </div>
            </div>
          

        </div>
          
           <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger_up "></div>
                            <div className="burger_down"></div>
                            </div>

    
    </>
  )
}
