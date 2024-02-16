import React from 'react'

function SizeCard({size, description, selected, selectSize}) {
    function handleSize(){
        selectSize(size)
    }
  return (
    <div onClick={handleSize} className={`card h-100 w-100  hover-border-pink  ${selected ? "bg-pink text-white" : ""}`}>
        <div className=" card-body p-2">
            <h5 className="card-title fs-1 fw-bolder ">{size}</h5>
            <p className="card-text " style={{fontSize:'12px'}}>{description}</p>
        </div>
    </div>
  )
}

export default SizeCard