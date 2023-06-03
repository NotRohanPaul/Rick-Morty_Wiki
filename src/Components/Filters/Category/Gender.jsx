import React from 'react'
import FilterBtn from './FilterBtn';

const Gender = ({ clearChecked, setGender, setpageNum }) => {
    let gender = ["Male", "Female", "Genderless", "Unknown"]
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Gender
                </button>
            </h2>
            <div id='collapseOne' className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                <div className="accordion-body  d-flex flex-wrap gap-3">
                    {gender.map((item, index) => {
                        return <FilterBtn task={setGender} setpageNum={setpageNum} key={index} name="gender" items={item} index={index} />
                    }
                    )}
                </div>
            </div>
        </div >
    )
}

export default Gender