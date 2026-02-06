import { ReactElement } from 'react';

// 导入新闻JSON数据
import newsData from './news.json';

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
          {/* 动态渲染新闻列表 */}
          {newsData.map((news, index) => (
            <li key={index}>
              <b>{news.date}: </b>
              <span dangerouslySetInnerHTML={{ __html: news.content }} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}