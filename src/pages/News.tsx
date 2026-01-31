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
            这是一条置顶的新闻{' '}
            <a href="https://cse.hkust.edu.hk/News/IEEE_Fellow2023/">
              这里可以加第三方报道的链接
            </a>
          </h5>
          <p>
            这里是副标题
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
