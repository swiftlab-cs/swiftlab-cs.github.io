import { ReactElement } from 'react';
import { Carousel } from 'react-bootstrap';


export function Home(): ReactElement {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-info">
            <h2 style={{ color: '#baf8ff' }}>SWIFT Lab</h2>
            <p>SoftWare Intelligence and Foundational sysTems Lab</p>
          </div>
        </div>
      </div>

        {/* News部分 */}
      <div className="container news">
        <h4>News</h4>
        <ul>
            <li>
                <b>Jan. 2026: </b> SWIFT Lab(FDU, DKU, CUHK) Founded. Congratulations!
            </li>

            <li>
                <b>Jan. 2026: </b> <a href="https://openreview.net/pdf?id=GymjF88oGQ">One paper</a> is accepted by ICLR 2026.
            </li>
        </ul>
        {/* React Bootstrap 轮播图 */}
        {/* <h4>News</h4>
        <div className="group" style={{float:'none', width:'100%', margin:'0 auto', display:'flex', justifyContent:'center'}}>

        <Carousel interval={3000} controls={true} indicators={true} style={{width:'80%'}}>
            <Carousel.Item style={{ height: '300px' }}>
                <div className="card" style={{border: 'none', width: "60%", height:'80%', alignItems:'center', margin:'0 auto'}}>
                <div className="card-body" style={{border: 'none'}}>
                    <img src="images/1.jpg" alt=" " style={{height:'50%'}} />
                    <h5 className="card-title" style={{paddingTop:'10px'}}>Card title1</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item style={{ height: '300px' }}>
                <div className="card" style={{border: 'none', width: "60%", height:'80%', alignItems:'center', margin:'0 auto'}}>
                <div className="card-body" style={{border: 'none'}}>
                    <img src="images/logo.png" alt=" " style={{height:'50%'}} />
                    <h5 className="card-title" style={{paddingTop:'10px'}}>Card title2</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </Carousel.Item>
            <Carousel.Item style={{ height: '300px' }}>
                <div className="card" style={{border: 'none', width: "60%", height:'80%', alignItems:'center', margin:'0 auto'}}>
                <div className="card-body" style={{border: 'none'}}>
                    <h5 className="card-title" style={{paddingTop:'10px'}}>Card title3</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </Carousel.Item>
        </Carousel>
        </div> */}
      </div>

      {/* 合照和简介部分 */}
      <div id="about" className="team">
        <div className="container">
          <h4>About us</h4>
          <div className="group">
            {/* <img src="images/about.jpg" alt=" " /> */}
            {/* React Bootstrap 轮播图 */}
            <Carousel interval={3000} controls={true} indicators={true}>
              <Carousel.Item style={{ height: '300px' }}>
                <img
                  className="d-block w-100 h-100"
                  src="images/about.jpg"
                  alt="First slide"
                  // width="400px"
                  style={{ objectFit: 'contain', backgroundColor: '#F4F4F4' }}
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: '300px' }}>
                <img
                  className="d-block w-100 h-100"
                  src="images/1.jpg"
                  alt="Second slide"
                  // width="400px"
                  style={{ objectFit: 'contain', backgroundColor: '#F4F4F4' }}
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: '300px' }}>
                <img
                  className="d-block w-100 h-100"
                  src="images/logo.png"
                  alt="Third slide"
                  // width="400px"
                  style={{ objectFit: 'contain', backgroundColor: '#F4F4F4' }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="group-text">
            <h3><b>SWIFT Lab</b></h3>
            <p>
              <b>SWIFT</b> (<b>S</b>oft<b>W</b>are <b>I</b>ntelligence and <b>F</b>oundational
              sys<b>T</b>ems) Lab is XXX. The lab is headed by Assistant Prof.{' '}
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
