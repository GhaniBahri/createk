import React from 'react'
import logo from '../assets/images/black_white_ab_logo.png'
import profile from "../assets/images/profile.jpg"
import styles from "../assets/style/NavBar.module.css"
import { useTranslation} from 'react-i18next';

function NavBar({setEng, english}) {
  const {i18n}= useTranslation()
  function handleLanguage(){
    setEng(!english)
    i18n.changeLanguage(english ? 'en' : 'fr')
  }
  return (
    <nav className='navbar navbar-expand bg-white  fixed-top border-bottom py-4'>
      <div className="container">
      <a href='/' className='navbar-brand '><img src={logo} width={50} height={25} className={'img-fluid '+ styles.logo} alt="" /></a>
      <ul className="navbar-nav ms-auto ">
        <li className='nav-item mx-4 d-flex justify-content-center align-items-center  '><a href="/#"><i className="bi bi-plus-square text-dark fs-2"></i></a></li>
        <li onClick={handleLanguage} className='nav-item mx-4 d-flex justify-content-center align-items-center  '><i className="bi bi-globe fs-2"></i></li>
        <li className='nav-item mx-4 d-flex justify-content-center align-items-center  '><img src={profile} width={50} height={50} className='rounded-circle me-2' alt="" /></li>
      </ul>
      </div>
    </nav>
  )
}

export default NavBar