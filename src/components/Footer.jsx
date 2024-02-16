// BD01CC
import React from 'react'
import logo from '../assets/images/black_white_ab_logo.png'
import react from '../assets/images/logo512.png'
import { useTranslation} from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
  return (
    <section className=' bg-pink py-5  text-white '>
        <div className="container text-center ">
            <div className="row">
                <div className="col-md">
                <img src={logo} className='img-fluid w-50' alt="" />
                <h3 className='fs-6 text-center mt-4'>Copyright 2024</h3>
                </div>
                <div className="col-md text-start">
                    <h3 className='fs-6 ps-3 fw-bolder'>Menu</h3>
                    <nav className='nav flex-column '>
                        <a href="/" className='nav-link fw-light text-white'>{t('Home')}</a>
                        <a href="/" className='nav-link fw-light text-white'>{t('about')}</a>
                        <a href="/" className='nav-link fw-light text-white'>{t('contact')} </a>
                        <a href="/" className='nav-link fw-light text-white'> {t('support')}</a>
                    </nav>
                </div>
                <div className="col-md text-start">
                    <h3 className='fs-6 ps-3 fw-bolder'>{t('other')} </h3>
                    <nav className='nav flex-column '>
                        <a href="/" className='nav-link fw-light text-white'>{t('mentin')} </a>
                        <a href="/" className='nav-link fw-light text-white'>{t('clause')} </a>
                        <a href="/" className='nav-link fw-light text-white'>{t('reglement')} </a>
                        <a href="/" className='nav-link fw-light text-white'>{t('politique')} </a>
                    </nav>
                </div>
                <div className="col-md text-start">
                    <h3 className='fs-6 ps-3 fw-bolder'>France</h3>
                    <p className='ps-3'>Google Campus 5-4 barnhill, London EX2A 4BK</p>
                </div>
                <div className="col-md-auto text-start">
                    <h3 className='fs-6 fw-bolder'>{t('social')} </h3>
                    <nav className='nav flex-nowrap '>
                        <a href="/" className='nav-link fw-light text-white'><img src={react} width={35} height={35} className='img-fluid' alt="" /></a>
                        <a href="/" className='nav-link fw-light text-white'><img src={react} width={35} height={35} className='img-fluid' alt="" /></a>
                        <a href="/" className='nav-link fw-light text-white'><img src={react} width={35} height={35} className='img-fluid' alt="" /></a>
                        <a href="/" className='nav-link fw-light text-white'><img src={react} width={35} height={35} className='img-fluid' alt="" /></a>
                        <a href="/" className='nav-link fw-light text-white'><img src={react} width={35} height={35} className='img-fluid' alt="" /></a>
                    </nav>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer