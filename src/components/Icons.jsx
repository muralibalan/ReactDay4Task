import React from 'react'

function Icons(props) {
  return <>
    {/* <!-- Icons Grid--> */}
        
    <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex"><i className={props.value.iconName}></i></div>
            <h3>{props.value.name}</h3>
            <p className="lead mb-0">{props.value.disc}</p>
        </div>
    </div>
                   
                
  </>
}

export default Icons