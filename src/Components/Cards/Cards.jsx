import React from 'react'
import './Cards.scss'
import { Link } from 'react-router-dom';

const Cards = ({ results, page }) => {

    let display;
    if (results) {
        display = results.map(x => {
            let { id, name, image, location, status } = x;
            return (
                <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`${page}${id}`}
                    key={id} className='cards  col-3 position-relative'>
                    <div >
                        <img src={image} alt="Charactes" className='img-fluid char-img' />
                        <div className="content">
                            <div className="fs-4 fw-bold mb-4">{name}</div>

                            <div >
                                <div className="fs-6">Last Location </div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    {(() => {
                        if (status === 'Dead') {
                            return <div className="badge bg-danger position-absolute t-0">{status}</div>
                        }
                        else if (status === 'Alive') {
                            return <div className="badge bg-success position-absolute t-0">{status}</div>
                        }
                        else {
                            return <div className="badge bg-dark position-absolute t-0">{status}</div>

                        }
                    })()}
                </Link>
            )
        })
    }
    else {
        display = "No Characters Found !"
    }
    return (
        <>{display}</>
    )
}

export default Cards