import React from 'react'

const FilterBtn = ({ setpageNum, task, name, index, items }) => {
    return (
        <div>
            <style jsx="true">
                {`
                    .x:checked + label{
                        background-color: #0b5ed7;
                        color:white;
                    }
                    input[type=radio]{
                        display:none;
                    }`
                }
            </style>

            <div className="form-check">
                <input
                    onClick={(e) => {
                        if (e.target.disable === false) {
                            e.target.disable = true
                            e.target.checked = false
                            task('');
                        }
                        else {
                            e.target.disable = false
                            task(items);
                        }
                        setpageNum(1)

                    }}
                    className="form-check-input x"
                    type="radio"
                    name={name}
                    id={`${name} - ${index}`}
                />
                <label
                    className="btn btn-outline-primary "
                    htmlFor={`${name} - ${index}`}
                >
                    {items}
                </label>
            </div>
        </div >
    )
}

export default FilterBtn