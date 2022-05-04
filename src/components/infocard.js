import React from "react";

const renderCard = (info, i) => {
    return (
        <div className='col gx-4'>
            <div className='card pb-3 info-card' key={i} style={{"borderRadius": "1rem", "height": "100%"}}>
                <div className="container card-img-top d-flex justify-content-center p-3" >
                    <img src={info.src} alt={info.name}/>
                </div>
                <div className='card-body d-flex flex-column align-items-center'>
                    <h5 className='card-title'>{info.name}</h5>
                    <p className='card-text' style={{'textAlign': 'justify'}}> {info.description} </p>
                </div>

                <ul className='list-group list-group-flush' >
                    <li className='list-group-item'> {info.version} </li>
                    {info.tools && info.tools.map((elem, j) => 
                        <li className='list-group-item' key={`${i} - ${j}`}> * {elem} </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default renderCard;