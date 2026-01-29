import { ReactElement } from 'react';

export function Home(): ReactElement {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-info">
            <h2>SWIFT Group</h2>
            <p>SoftWare Intelligence and Foundational Systems Lab</p>
          </div>
        </div>
      </div>
      <div className="slider">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <h2>Latest News</h2>
                  </div> {/* end of col */}
              </div> {/* end of row */}
              
              <div className="row">
                  <div className="col-lg-12">
                      {/* Card Slider */}
                      <div className="slider-container">
                          <div className="swiper-container card-slider swiper-container-horizontal">
                              <div className="swiper-wrapper" style={{
                                  transform: 'translate3d(-961.5px, 0px, 0px)',
                                  transitionDuration: '0ms'
                                }}>
                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-autoplay="10000" style={{
                                    width: '300.5px', 
                                    marginRight: '20px'
                                  }} data-swiper-slide-index="6">
                                      <div className="card">
                                          <div className="card-body">
                                              <div className="testimonial-author">Jan. 14th, 2019</div>
                                              <div className="testimonial-text"><a href="https://www.aminer.cn/ai2000/">Prof.
                                                      Lyu appears in The AI 2000 Most Influential Scholars Annual List</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-autoplay="10000" style={{
                                    width: '300.5px', 
                                    marginRight: '20px'
                                  }} data-swiper-slide-index="7">
                                      <div className="card">
                                          <div className="card-body">
                                              <div className="testimonial-author">Oct. 28th, 2019</div>
                                              <div className="testimonial-text">Prof. Lyu's paper “A coverage analysis tool
                                                  for the effectiveness of software testing” was selected as one of the
                                                  ISSRE 30-year most influential papers</div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="swiper-slide swiper-slide-prev" data-swiper-autoplay="10000" style={{
                                    width: '300.5px', 
                                    marginRight: '20px'
                                  }} data-swiper-slide-index="0">
                                      <div className="card">
                                          <div className="card-body">
                                              <div className="testimonial-author">Apr. 17th, 2024</div>
                                              <div className="testimonial-text">Five papers were accpeted by <a href="https://conf.researchr.org/home/icse-2024"> ICSE 2024!</a> . Congratulations to the authors!
                                              </div>
                                          </div>
                                      </div>
                                  </div>{/*  <!-- end of swiper-slide --> */}

                                  <div className="swiper-slide swiper-slide-active" data-swiper-autoplay="10000" style={{
                                    width: '300.5px', 
                                    marginRight: '20px'
                                  }} data-swiper-slide-index="1">
                                      <div className="card">
                                          <div className="card-body">
                                              <div className="testimonial-author">Sep. 11th, 2023</div>
                                              <div className="testimonial-text">Mr Yun Peng won the distinguished paper award in the 38th IEEE/ACM International Conference on Automated Software Engineering (ASE 2023). Congratulations!
                                              </div>
                                          </div>
                                      </div>
                                  </div>{/*  <!-- end of swiper-slide --> */}

                                  <div className="swiper-slide swiper-slide-next" data-swiper-autoplay="10000" style={{
                                    width: '300.5px', 
                                    marginRight: '20px'
                                  }} data-swiper-slide-index="2">
                                      <div className="card">
                                          <div className="card-body">
                                              <div className="testimonial-author">May. 14th, 2023</div>
                                              <div className="testimonial-text">Six papers were accpeted by <a href="https://conf.researchr.org/home/icse-2023"> ICSE 2023!</a> Congratulations to the authors!
                                              </div>
                                          </div>
                                      </div>
                                  </div> {/* end of swiper-slide */}



                                  <div className="swiper-slide" data-swiper-autoplay="10000" style={{
                                    width: '300.5px', 
                                    marginRight: '20px'
                                  }} data-swiper-slide-index="3">
                                      <div className="card">
                                          <div className="card-body">
                                              <div className="testimonial-author">Sep. 11th, 2023</div>
                                              <div className="testimonial-text">Seven papers were accpeted by <a href="https://conf.researchr.org/home/ase-2023"> ASE 2023!</a> Congratulations to the authors!
                                              </div>
                                          </div>
                                      </div>
                                  </div> {/* end of swiper-slide */}

                                  <div className="swiper-slide" data-swiper-autoplay="10000" style={{
                                    width: '300.5px', 
                                    marginRight: '20px'
                                  }} data-swiper-slide-index="4">
                                      <div className="card">
                                          <div className="card-body">
                                              <div className="testimonial-author">May. 26th, 2021</div>
                                              <div className="testimonial-text"><a href="https://conf.researchr.org/profile/icse-2021/michaellyu">Prof.
                                                      Lyu will give a keynote talk "Reliability-Driven AIOps for Cloud
                                                      Resilience" at ICSE2021.</a> 
                                              </div>
                                          </div>
                                      </div>
                                  </div> {/* end of swiper-slide */}

                                  <div className="swiper-slide" data-swiper-autoplay="10000" style={{
                                    width: '300.5px', 
                                    marginRight: '20px'
                                  }} data-swiper-slide-index="5">
                                      <div className="card">
                                          <div className="card-body">
                                              <div className="testimonial-author">Sept. 30th, 2020</div>
                                              <div className="testimonial-text"><a href="https://www.cpr.cuhk.edu.hk/en/press/cuhk-faculty-of-engineering-professor-michael-r-lyu-receives-the-guanghua-engineering-science-and-technology-award/">Prof.
                                                      Lyu was awarded The 13th Guanghua Engineering Science and Technology
                                                      Award</a></div>
                                          </div>
                                      </div>
                                  </div> {/* end of swiper-slide */}

                                  <div className="swiper-slide" data-swiper-autoplay="10000" style={{
                                    width: '300.5px', 
                                    marginRight: '20px'
                                  }} data-swiper-slide-index="6">
                                      <div className="card">
                                          <div className="card-body">
                                              <div className="testimonial-author">Jan. 14th, 2019</div>
                                              <div className="testimonial-text"><a href="https://www.aminer.cn/ai2000/">Prof.
                                                      Lyu appears in The AI 2000 Most Influential Scholars Annual List</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div> {/* end of swiper-slide */}

                                  <div className="swiper-slide" data-swiper-autoplay="10000" style={{
                                    width: '300.5px', 
                                    marginRight: '20px'
                                  }} data-swiper-slide-index="7">
                                      <div className="card">
                                          <div className="card-body">
                                              <div className="testimonial-author">Oct. 28th, 2019</div>
                                              <div className="testimonial-text">Prof. Lyu's paper “A coverage analysis tool
                                                  for the effectiveness of software testing” was selected as one of the
                                                  ISSRE 30-year most influential papers</div>
                                          </div>
                                      </div>
                                  </div> {/* end of swiper-slide */}
                              
                              
                              <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-autoplay="10000" style={{
                                    width: '300.5px', 
                                    marginRight: '20px'
                                  }} data-swiper-slide-index="0">
                                      <div className="card">
                                          <div className="card-body">
                                              <div className="testimonial-author">Apr. 17th, 2024</div>
                                              <div className="testimonial-text">Five papers were accpeted by <a href="https://conf.researchr.org/home/icse-2024"> ICSE 2024!</a> . Congratulations to the authors!
                                              </div>
                                          </div>
                                      </div>
                              </div>
                                  <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-autoplay="10000" style={{
                                    width: '300.5px', 
                                    marginRight: '20px'
                                  }} data-swiper-slide-index="1">
                                      <div className="card">
                                          <div className="card-body">
                                              <div className="testimonial-author">Sep. 11th, 2023</div>
                                              <div className="testimonial-text">Mr Yun Peng won the distinguished paper award in the 38th IEEE/ACM International Conference on Automated Software Engineering (ASE 2023). Congratulations!
                                              </div>
                                          </div>
                                      </div>
                                  </div> {/* end of swiper-slide */}
                              
                              {/* <!-- Add Arrows --> */}
                              <div className="swiper-button-next" tabIndex={0} role="button" aria-label="Next slide"></div>
                              <div className="swiper-button-prev" tabIndex={0} role="button" aria-label="Previous slide"></div>
                              {/* <!-- end of add arrows --> */}

                          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                          </div> 
                          </div>{/* <!-- end of swiper-container --> */}
                      </div>{/*  <!-- end of slider-container --> */}
                  </div>{/*  <!-- end of col --> */}
              </div>{/*  <!-- end of row --> */}
          </div>{/*  <!-- end of container --> */}
      </div>

      {/* 合照部分 */}
      <div id="about" className="team">
        <div className="container">
          <h4>About us</h4>
          <div className="group">
            {/* <img src="images/about.jpg" alt=" " /> */}
            <div className="image-scroll">
              <img className="img-fluid" src="images/about.jpg" alt="滚动合照1" />
              <img className="img-fluid" src="images/1.jpg" alt="滚动合照2" />
              <img className="img-fluid" src="images/logo.png" alt="滚动合照3" />
              {/* 添加更多图片  */}
            </div>
          </div>
          <div className="group-text">
            <h3>SWIFT Lab</h3>
            <p>
              <b>SWIFT</b> (<b>S</b>oft<b>W</b>are <b>I</b>ntelligence and <b>F</b>oundational
              <b>S</b>ystems) Lab is XXX. The lab is headed by Assistant Prof.{' '}
              <a href="https://faculty.dukekunshan.edu.cn/zh-hans/faculty_profiles/chenjiacheng">Jiacheng Shen</a>.
              We are interested in research topices regarding XXX.
            </p>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
