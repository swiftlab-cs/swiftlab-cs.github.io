import { ReactElement } from 'react';
import { Carousel } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules'


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

        {/* News部分 */}
      <div className="container news">
        {/* <h4>News</h4>
        <ul>
            <li>
                <b>Month. Year: </b> Content.
            </li>
        </ul> */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
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
                  width="400px"
                  style={{ objectFit: 'contain', backgroundColor: '#F4F4F4' }}
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: '300px' }}>
                <img
                  className="d-block w-100 h-100"
                  src="images/1.jpg"
                  alt="First slide"
                  width="400px"
                  style={{ objectFit: 'contain', backgroundColor: '#F4F4F4' }}
                />
              </Carousel.Item>
              <Carousel.Item style={{ height: '300px' }}>
                <img
                  className="d-block w-100 h-100"
                  src="images/logo.png"
                  alt="First slide"
                  width="400px"
                  style={{ objectFit: 'contain', backgroundColor: '#F4F4F4' }}
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
