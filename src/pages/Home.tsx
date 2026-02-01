import { ReactElement } from 'react';
import { Carousel } from 'react-bootstrap';
import publicationData from './publication.json';
import awardsData from './awards.json';
import studentsData from './students.json';
import facultyData from './faculty.json';

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
                <b>Jan. 2026: </b> <a href="https://openreview.net/pdf?id=GymjF88oGQ">One paper</a> is accepted by ICLR 2026.
            </li>

            <li>
                <b>Jan. 2026: </b> SWIFT Lab Founded!
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
                  className="d-block h-100"
                  src="images/about.jpg"
                  alt="First slide"
                  // width="400px"
                  style={{ objectFit: 'contain', backgroundColor: '#F4F4F4' }}
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: '300px' }}>
                <img
                  className="d-block h-100"
                  src="images/about2.jpg"
                  alt="Second slide"
                  // width="400px"
                  style={{ objectFit: 'contain', backgroundColor: '#F4F4F4' }}
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: '300px' }}>
                <img
                  className="d-block h-100"
                  src="images/about3.jpg"
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
              <p style={{fontSize: '1.0em', lineHeight: '1.6', marginBottom: '1.5em' }}>
              <b>SWIFT</b> (<b>S</b>oft<b>W</b>are <b>I</b>ntelligence and <b>F</b>oundational
              sys<b>T</b>ems) Lab is a joint lab between CUHK-Shenzhen, Duke Kunshan University, and Fudan University. The lab is led by Prof.{' '} 
              <a href="https://pinjiahe.github.io/">Pinjia He</a>, Prof.{' '}
              <a href="https://bernardshen.github.io/">Jiacheng Shen</a>, and Prof.{' '}
              <a href="https://www.y-droid.com/">Yangfan Zhou</a>. Our goal is to bring intelligence into software development and making intelligent systems more available to everyone. The followings are the two main research areas at Swift Lab: 
              </p>

              <ul style={{fontSize: '1.1em', listStyle: 'none', paddingLeft: '0px' }}>
                  <li style={{ position: 'relative', paddingLeft: '20px' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#9c88ff' }}>•</span>
                      <div>Al4SE (Artificial Intelligence for Software Engineering)</div>
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '20px' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#9c88ff' }}>•</span>
                      <div>Sys4ML (Systems for Machine Learning)</div>
                  </li>
              </ul>  
            
            </p>
              {/* 显示动态统计信息 */}
            <div style={{ paddingTop: '15px', borderRadius: '8px' }}>
              <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontSize: '2.0em', fontWeight: 'bold', color: '#9c88ff' }}>{publicationData.length}</span>
                  <span style={{ marginLeft: '8px' }}>Papers</span>
                </div>

                <div>
                  <span style={{ fontSize: '2.0em', fontWeight: 'bold', color: '#9c88ff' }}>{awardsData.length}</span>
                  <span style={{ marginLeft: '8px' }}>Awards</span>
                </div>

                <div>
                  <span style={{ fontSize: '2.0em', fontWeight: 'bold', color: '#9c88ff' }}>{facultyData.length + studentsData.length}</span>
                  <span style={{ marginLeft: '8px' }}>Members</span>
                </div>
              </div>
            </div>
            
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
