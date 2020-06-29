import React from 'react'

function whyus(){
    return(
    <React.Fragment>
    <section id="about" className="py-5 text-center bg-light">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="info-header mb-5">
            <h1 className="text-primary pb-3">
              Why US?
            </h1>
            <p className="lead pb-3">
            The Pdhantu classNamees will be a world leader in the integration of (a) teaching and learning, (b) advancement of the knowledge base through true contents , and (c) leadership in service of teaching. Further, The pdhantu classNamees will be a  leader in preparing public service examination who provide exemplary educational and related services to improve the educational quality of whole india as well as villages also and contributing for better society.
            </p>
          </div>
           <div id="accordion" role="tablist">
            <div className="card">
              <div className="card-header" id="heading1">
                <h5 className="mb-0">
                  <div href="#collapse1" data-toggle="collapse" data-parent="#accordion">
                    <i className="fa fa-arrow-circle-down"></i> Get Inspired
                  </div>
                </h5>
              </div>

              <div id="collapse1" className="collapse show">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi pariatur optio totam obcaecati facere nam nihil inventore dolorum consequuntur quis unde voluptatibus numquam velit veniam explicabo eveniet fugit hic, tenetur. Iusto, consequatur, obcaecati. Ab earum alias, placeat exercitationem possimus quidem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia officiis aliquam fugiat, omnis, corrupti dolorum ipsa laudantium sequi dolores!
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="heading2">
                <h5 className="mb-0">
                  <div href="#collapse2" data-toggle="collapse" data-parent="#accordion">
                    <i className="fa fa-arrow-circle-down"></i> Gain The Knowledge
                  </div>
                </h5>
              </div>

              <div id="collapse2" className="collapse">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi pariatur optio totam obcaecati facere nam nihil inventore dolorum consequuntur quis unde voluptatibus numquam velit veniam explicabo eveniet fugit hic, tenetur. Iusto, consequatur, obcaecati. Ab earum alias, placeat exercitationem possimus quidem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia officiis aliquam fugiat, omnis, corrupti dolorum ipsa laudantium sequi dolores!
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="heading3">
                <h5 className="mb-0">
                  <div href="#collapse3" data-toggle="collapse" data-parent="#accordion">
                    <i className="fa fa-arrow-circle-down"></i> Open Your Mind
                  </div>
                </h5>
              </div>

              <div id="collapse3" className="collapse">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi pariatur optio totam obcaecati facere nam nihil inventore dolorum consequuntur quis unde voluptatibus numquam velit veniam explicabo eveniet fugit hic, tenetur. Iusto, consequatur, obcaecati. Ab earum alias, placeat exercitationem possimus quidem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia officiis aliquam fugiat, omnis, corrupti dolorum ipsa laudantium sequi dolores!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </React.Fragment>
    )
}
export default whyus;