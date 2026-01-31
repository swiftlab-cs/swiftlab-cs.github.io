import { ReactElement, useEffect } from 'react';
import {useLocation} from 'react-router-dom';

export function Header(): ReactElement {
  // 查看是否在home页面
  const location = useLocation();
  const isHome = location.pathname === '/';

  // change element with id="nav1" to display block if it is hidden, or hide it if it is displayed
  const toggleMenu = () => {
    const nav1 = document.getElementById('nav1');
    if (nav1) {
      if (nav1.style.display === 'block') {
        nav1.style.display = 'none';
      } else {
        nav1.style.display = 'block';
      }
    }
  };



  // 下滑则header变成header.scroll
  // 顶部则transprant的header
  useEffect(() => {
    const handleScroll = () => {
      if (!isHome) {
        return;
      }
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    // handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div className={"header" + (isHome ? '' : ' scrolled')}>
        <div className="container">
          <div className="header-part">
            <div className="head-logo">
              <a href="index.html">
                <img src="images/logo.png" alt=" " height="80px"></img>
              </a>
            </div>
            <div className="top-nav">
              <span className="menu" onClick={toggleMenu}>
                <img src="images/menu.png" alt="" />
              </span>
              <ul className="nav1" id="nav1">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#/news">News</a>
                </li>
                <li>
                  <a href="#/projects">Projects</a>
                </li>
                <li>
                  <a href="#/publication">Publication</a>
                </li>
                <li>
                  <a href="#/people">People</a>
                </li>
                <li>
                  <a href="#/awards">Awards</a>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </>
  );
}
