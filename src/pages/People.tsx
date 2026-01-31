import { ReactElement } from 'react';

export function People(): ReactElement {
  return (
    <>
      <div className="banner-bottom">
        <div className="container people">
          <h2>Faculty</h2>

          <div className="banner-bottom-left">
            <div className="portrait">
              <img alt="" src="images/yangfan.jpg" className="portrait-round" />
            </div>
            <h3>
              <a href="https://www.y-droid.com/">Yangfan Zhou</a>
            </h3>
            <p>Professor at FDU</p>
          </div>

          <div className="banner-bottom-left">
            <div className="portrait">
              <img alt="" src="images/jiacheng.png" className="portrait-round" />
            </div>
            <h3>
              <a href="https://bernardshen.github.io/">Jiacheng Shen</a>
            </h3>
            <p>Assistant Professor at DKU</p>
          </div>

          <div className="banner-bottom-left">
            <div className="portrait">
              <img alt="" src="images/pinjia.jpg" className="portrait-round" />
            </div>
            <h3>
              <a href="https://pinjiahe.github.io/">Pinjia He</a>
            </h3>
            <p>Assistant Professor at CUHK</p>
          </div>


          {/*  Students  */}

          <div className="clearfix"> </div>
          <h2>Students</h2>

          <div className="banner-bottom-left">
            <div className="portrait">
              <img alt="" src="images/xvchuan.jpeg" className="portrait-round" />
            </div>
            <h3>
              Xvchuan Luo
            </h3>
            <p>Ph.D. Student at FDU</p>
          </div>

          <div className="banner-bottom-left">
            <div className="portrait">
              <img alt="" src="images/yongsheng.jpg" className="portrait-round" />
            </div>
            <h3>
              Yongsheng Yan
            </h3>
            <p>Ph.D. Student at FDU</p>
          </div>
    
          <div className="banner-bottom-left">
            <div className="portrait">
              <img alt="" src="images/yvxuan.jpg" className="portrait-round" />
            </div>
            <h3>
              Yvxuan Du
            </h3>
            <p>M.Sc. Student at FDU</p>
          </div>

          <div className="banner-bottom-left">
            <div className="portrait">
              <img alt="" src="images/yifan.jpg" className="portrait-round" />
            </div>
            <h3>
              Yifan Xiao
            </h3>
            <p>M.Eng. Student at FDU</p>
          </div>

          <div className="banner-bottom-left">
            <div className="portrait">
              <img alt="" src="images/jianrong.jpg" className="portrait-round" />
            </div>
            <h3>
              Jianrong Qiu
            </h3>
            <p>M.Sc. Student at FDU</p>
          </div>



          {/* Former Members */}
          <div className="clearfix"> </div>
          <h2>Former Members</h2>

          <div className="banner-bottom-left">
            <a href="https://haoyang9804.github.io">
              <div className="portrait">
                <img
                  alt=""
                  src="images/haoyang.jpeg"
                  className="portrait-round"
                />
              </div>
            </a>
            <h3>
              <a href="https://haoyang9804.github.io">占位</a>
            </h3>
            <p>占位</p>
          </div>

          

          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
