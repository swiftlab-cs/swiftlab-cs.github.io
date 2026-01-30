import { ReactElement } from 'react';
import { Carousel } from 'react-bootstrap';

export function Home(): ReactElement {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-info">
            <h2 style={{ color: '#baf8ff' }}>SWIFT Group</h2>
            <p>SoftWare Intelligence and Foundational Systems Lab</p>
          </div>
        </div>
      </div>

      <div className="container news">
        <h4>News</h4>
        <ul>
          <li>
            <b>Month. Year: </b> Content.
          </li>
        </ul>
      </div>

      {/* 合照部分 */}
      <div id="about" className="team">
        <div className="container">
          <h4>About us</h4>
          <div className="group">
            {/* <img src="images/about.jpg" alt=" " /> */}
            {/* React Bootstrap 轮播图 */}
            <Carousel interval={3000} controls={true} indicators={true}>
              <Carousel.Item style={{ height: '500px' }}>
                <img
                  className="d-block w-100 h-100"
                  src="images/about.jpg"
                  alt="First slide"
                  style={{ objectFit: 'contain', backgroundColor: '#fbfbfb' }}
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: '500px' }}>
                <img
                  className="d-block w-100 h-100"
                  src="images/1.jpg"
                  alt="First slide"
                  style={{ objectFit: 'contain', backgroundColor: '#fbfbfb' }}
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: '500px' }}>
                <img
                  className="d-block w-100 h-100"
                  src="images/logo.jpg"
                  alt="First slide"
                  style={{ objectFit: 'contain', backgroundColor: '#fbfbfb' }}
                />
              </Carousel.Item>
            </Carousel>
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
