import React from 'react'

function People(props) {
  return <>
<div className="col-lg-4">
    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
        <img className="img-fluid rounded-circle mb-3" src={props.value3.pImge} alt="..." />
        <h5>{props.value3.pName}</h5>
        <p className="font-weight-light mb-0">{props.value3.pDisc}</p>
    </div>
</div>
  </>
}

export default People