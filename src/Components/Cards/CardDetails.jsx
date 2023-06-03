import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    let { id } = useParams()
    let [fetchedData, updateFetchedData] = useState([]);
    let { name, image, location, origin, gender, species, status, type } = fetchedData

    let api = `https://rickandmortyapi.com/api/character/${id}`
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);



    return (
        <div className='card-details container d-flex justify-content-center align-items-center   mt-3'>
            <style jsx="true">
                {`
                    .badge{
                        width:150px;
                    }
                    .card-details{
                        border:2px solid #0b5ed7;
                        border-radius:10px;
                        width:400px;
                        padding:20px 0;
                    }
                    .content>*{
                        margin-top:5px
                    }
                `}
            </style>
            <div className="d-flex flex-column gap-3">
                <h1 className="text-center">{name}</h1>
                <img src={image} alt="character" className='align-self-center' width="300px" height="300px" />
                <div className='d-flex justify-content-center'>
                    {(() => {
                        if (status === 'Dead') {
                            return <div className="badge bg-danger fs-5">{status}</div>
                        }
                        else if (status === 'Alive') {
                            return <div className="badge bg-success fs-5">{status}</div>
                        }
                        else {
                            return <div className="badge bg-dark fs-5">{status}</div>

                        }
                    })()}

                </div>
                <div className="content fs-6 d-flex flex-column" >
                    <div className="">
                        <span className='fw-bold'>Gender: {gender}</span>
                    </div>
                    <div className="">
                        <span className='fw-bold'>Species: {species}</span>
                    </div>
                    <div className="">
                        <span className='fw-bold'>Type: {type === "" ? "Unknown" : type}</span>
                    </div>
                    <div className="">
                        <span className='fw-bold'>Location: {location?.name}</span>
                    </div>
                    <div className="">
                        <span className='fw-bold'>Origin: {origin?.name}</span>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default CardDetails