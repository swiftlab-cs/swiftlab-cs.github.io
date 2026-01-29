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
      <div className="container news">
        <h4>News</h4>
        <ul>
          <li>
            <b>Month. Year: </b> Content.
          </li>
        </ul>
      </div>
      <div id="about" className="team">
        <div className="container">
          <h4>About us</h4>
          <div className="group">
            {/* <img src="images/about.jpg" alt=" " /> */}
            <div className="image-scroll">
              <img className="img-fluid" src="images/about1.jpg" alt="滚动合照1" />
              <img className="img-fluid" src="images/about2.jpg" alt="滚动合照2" />
              <img className="img-fluid" src="images/about3.jpg" alt="滚动合照3" />
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
