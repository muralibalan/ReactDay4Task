import React from 'react'

function ImgShow(props) {
  return <>
   
<section className="showcase">
            <div className="container-fluid p-0">
                <div className="row g-0">
                  {/* i used ternary operator */}
                    <div className={props.index%2===1?"col-lg-6 text-white showcase-img":"col-lg-6 order-lg-2 text-white showcase-img"} style={{backgroundImage: `url(${props.value2.bg_img})`}}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>{props.value2.head}</h2>
                        <p className="lead mb-0">{props.value2.img_disc}</p>
                    </div>
                </div>
            </div>
</section>
{console.log(props.index)}
  </>
}

export default ImgShow