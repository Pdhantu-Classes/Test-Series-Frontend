import React from 'react'

export default function Videos() {
    return (
        <section id="videos" className="py-5">
          
        <div className="container">
        <div className="text-center">
        <div className="info-header mb-5">
            <h1 className="text-primary pb-3">
              Videos
            </h1>
           
          </div>
        </div>
        
            <div className="row mb-3 my-3">
                <div className="col-md-5 col-sm-6 col-xs-12 offset-md-1 mb-3 embed-responsive embed-responsive-4by3 ">
                    <iframe title="hindi" className="embed-responsive-item" src="https://www.youtube.com/embed/6qKP3amrZtM?list=PLkvh8ZQeIMt55mm9cvgqs-pkqeiqa8fmJ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" ></iframe>
                </div>

                <div className="col-md-5 col-sm-6 col-xs-12 ml-md-5 mb-3 embed-responsive embed-responsive-4by3">
                    <iframe title="agriculture" className="embed-responsive-item" src="https://www.youtube.com/embed/WSAOsA4K3Aw?list=PLkvh8ZQeIMt4SCpVip2otmfeG0lDFxicp" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
                </div>
            </div>



        </div>
        <div className="text-center text-decoration-none">
            <a href="https://www.youtube.com/channel/UCiT6Zmqf7MI6bsQ4XonsVYQ" target="blank">More Videos</a>
        </div>
        </section>
    )

}
