
import Gender from './Category/Gender';
import Status from './Category/Status';
import Species from './Category/Species';
import { useState } from 'react';



const Filters = ({ setGender, setSpecies, setStatus, setpageNum }) => {
  let clear = () => {
    setGender("")
    setSpecies("")
    setStatus("")
    setpageNum(1)
    window.location.reload(false)

  }
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4"> Filters</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }} className="text-center text-decoration-underline text-primary ">Clear Filters</div>


      <div className="accordion" >
        <Status setStatus={setStatus} setpageNum={setpageNum} />
        <Species setSpecies={setSpecies} setpageNum={setpageNum} />
        <Gender setGender={setGender} setpageNum={setpageNum} />
      </div>

    </div >
  )
}

export default Filters