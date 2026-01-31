import { ReactElement } from 'react';

export function News(): ReactElement {
  return (
    <>
      <div className="container news-content">
        <h4>News</h4>
        <div className="news-photo">
          <img src="images/news3.jpg" alt=" " />
        </div>
        <div className="news-photo-text">
          <h5>
            SWIFT Lab Founded!
          </h5>
          <p>
            We are excited to announce the launch of SWIFT, a new cross-institutional laboratory jointly established by Fudan University (FDU), Duke Kunshan University (DKU), and The Chinese University of Hong Kong (CUHK).
          </p>
        </div>

        <div className="clearfix"> </div>

        <ul className="news-list">
          <li>
            <b>Sep. 2020: </b> Yongqiang Tian published a{' '}
            <a href="https://yqtianust.github.io/awesome-ml-testing/">repo</a>{' '}
            for awesome machine learning materials
          </li>
  
          <li>
            <b>Sep. 2020: </b> Yongqiang Tian published a{' '}
            <a href="https://yqtianust.github.io/awesome-ml-testing/">repo</a>{' '}
            for awesome machine learning materials
          </li>
        </ul>
      </div>
    </>
  );
}
