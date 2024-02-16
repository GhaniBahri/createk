import React, { useState } from 'react'
import SizeCard from './SizeCard'
import MapCard from './MapCard'
import { useTranslation} from 'react-i18next';

function PackageInfo() {
    
    const { t } = useTranslation();
    const [size, setSize]= useState("")
    const [weight, setWeight]= useState("")
    const infos={
        start_date: "16/02/2023",
        end_date:"20/02/2024",
        departure:"1 Avenue Paul Verlaine",
        arrival:"5 Avenue Paul Verlaine",
        distance:"0.06"
    }
    function handleSize(packageSize){
        setSize(packageSize)
    }
    function handleWeight(packageWeight){
        setWeight(packageWeight)
    }
  return (
    <section className='my-5 pb-5 me-0 w-100 w-lg-75 ms-auto row '>
        <div className="container d-flex flex-column p-4 mb-3 row-gap-3 col-lg-6 col-12">
            <button type='button' className='btn ps-0 ms-0 fs-6 align-items-center d-flex justify-content-start '><i className="bi bi-arrow-left-short fw-bold fs-4 text-pink me-2-hover"></i>{t('back')} </button>
            <h1 className='fw-bold fs-4 text-start'>{t('pack_info')} </h1>
            <div className="row">
                <div className="col-12 col-md-3">
                    <label htmlFor="basic-url" className="form-label text-start w-100">{t('qte')} </label>
                    <select className="form-select rounded-pill focus-ring focus-ring-white" aria-label="Default select example">
                        <option defaultValue="">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="col-12 col-md-9 ">
                <label htmlFor="basic-url" className="form-label text-start w-100">{t('obj')} </label>
                <input type="text" className="form-control rounded-pill focus-ring focus-ring-white" placeholder={t('obj_input')} aria-label="objects" aria-describedby="addon-wrapping"></input>
                </div>
            </div>
            <div>
                <form action="" className='text-start'>
                    <div className="">
                        <input className="form-check-input  me-2" type="radio" name="flexRadioDefault" id="dimention"/>
                        <label className="form-check-label " htmlFor="dimention">
                            {t('dimentions')}
                        </label>
                    </div>
                    <div className="">
                        <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="nodimention"/>
                        <label className="form-check-label" htmlFor="nodimention">
                            {t('no_dimentions')}
                        </label>
                    </div>
                </form>
            
            </div>
            <div className="row justify-content-center flex-lg-nowrap  column-gap-lg-2 row-gap-4">
                <div className="col-lg-3 col-6">
                    <SizeCard size="S" description={t('s')} selectSize={handleSize} selected={size === "S"} />
                    </div>
                <div className="col-lg-3 col-6">
                    <SizeCard size="M" description={t('m')} selectSize={handleSize} selected={size === "M"} />
                </div>
                <div className="col-lg-3 col-6"> 
                    <SizeCard size="L" description={t('l')} selectSize={handleSize} selected={size === "L"} />
                </div>
                <div className="col-lg-3 col-6"> 
                    <SizeCard size="XL" description={t('xl')} selectSize={handleSize} selected={size === "XL"} />
                </div>
            </div>
            <div className='w-100 text-start'>
                <h6 className=''>{t('weight')} </h6>
                <div className="input-group mb-3 w-100">
                    <button onClick={()=>{handleWeight("5")}} className={`btn btn-outline-pink border-pink text-pink hover-pink ${weight==="5"? 'text-white bg-pink':''}`} type="button">- de 5Kg</button>
                    <button onClick={()=>{handleWeight("50")}} className={`btn btn-outline-pink border-pink text-pink hover-pink ${weight==="50"? 'text-white bg-pink':''}`} type="button">de 5 a 50 Kg</button>
                    <button onClick={()=>{handleWeight("100")}} className={`btn btn-outline-pink border-pink text-pink hover-pink ${weight==="100"? 'text-white bg-pink':''}`} type="button">de 51 a 100Kg</button>
                    <button onClick={()=>{handleWeight("1000")}} className={`btn btn-outline-pink border-pink text-pink hover-pink ${weight==="1000"? 'text-white bg-pink':''}`} type="button">+de 100Kg</button>
                </div>
                <p className='fw-lighter' style={{fontSize:'12px'}}>{t('weight_notice')} </p>
            </div>
            <button type="button" className="btn rounded-pill w-100 fs-3 fw-normal hover-white  bg-pink">{t('next')} </button>
        </div>
        <div className="container col-12 col-lg-4 ">
            <MapCard infos={infos}/>
        </div>
    </section>
  )
}

export default PackageInfo