import React from 'react'
import FilterBtn from './FilterBtn'

const Species = ({ clearChecked, setSpecies, setpageNum }) => {
    let species = ["Human", "Alien", 'Humanoid', 'Poopybutthole', 'Unknown', 'Disease', "Mythological Creature", "Animal", "Robot", 'Planet', 'Cronenberg']
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Species
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body  d-flex flex-wrap gap-3">
                    {species.map((items, index) =>
                        (<FilterBtn task={setSpecies} setpageNum={setpageNum} key={index} index={index} name="species" items={items} />)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Species