import { ReactElement } from 'react';

export function News(): ReactElement {
  return (
    <>
      <div className="container news-content">
        <h4>News</h4>
        {/* 置顶消息 */}
        {/* <div className="news-photo">
          <img src="images/news3.jpg" alt=" " />
        </div>
        <div className="news-photo-text">
          <h5>
            Swift Lab Founded!
          </h5>
          <p>
            We are excited to announce the launch of Swift, a new cross-institutional laboratory jointly established by Fudan University (FDU), Duke Kunshan University (DKU), and The Chinese University of Hong Kong, Shenzhen (CUHK-Shenzhen).
          </p>
        </div>

        <div className="clearfix"> </div> */}

        <ul className="news-list">
            <li>
                <b>Jan. 2026: </b> <a href="https://openreview.net/pdf?id=GymjF88oGQ">One paper</a> is accepted by ICLR 2026.
            </li>

            <li>
                <b>Jan. 2026: </b> We are excited to announce <strong>the launch of Swift Lab</strong>, a new cross-institutional laboratory jointly established by Fudan University (FDU), Duke Kunshan University (DKU), and The Chinese University of Hong Kong, Shenzhen (CUHK-Shenzhen).
            </li>
        </ul>
      </div>
    </>
  );
}
