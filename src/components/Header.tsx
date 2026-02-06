import { ReactElement, useEffect, useState } from 'react';

export function Header(): ReactElement {
  // change element with id="nav1" to display block if it is hidden, or hide it if it is displayed
  // const toggleMenu = () => {
  //   const nav1 = document.getElementById('nav1');
  //   if (nav1) {
  //     if (nav1.style.display === 'block') {
  //       nav1.style.display = 'none';
  //     } else {
  //       nav1.style.display = 'block';
  //     }
  //   }
  // };
  // 只有移动端设备才会nav消失
  const toggleMenu = () => {
    const nav1 = document.getElementById('nav1');
    const menuButton = document.querySelector('.menu');
    
    // Check if menu button is visible (mobile view)
    const isMobileView = menuButton && window.getComputedStyle(menuButton).display !== 'none';
    
    if (nav1 && isMobileView) {
      if (nav1.style.display === 'block') {
        nav1.style.display = 'none';
      } else {
        nav1.style.display = 'block';
      }
    }
  };


  // 下滑则header变成header.scroll
  // 顶部则transprant的header
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        // console.log('scrollY:', window.scrollY);
        if (window.scrollY > 1) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    // Header组件卸载时移除事件监听
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // 1. 添加路由状态
  const [currentPath, setCurrentPath] = useState<string>(
    `${window.location.pathname}${window.location.hash}`
  );

  // 2. 监听哈希变化
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(`${window.location.pathname}${window.location.hash}`);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const isHome = currentPath === '/' || currentPath === '/#/';
  // console.log('isHome:', isHome);

  return (
    <>
      <div className="header" style={{ backgroundColor: isHome ? (scrolled ? '#303952' : 'transparent') : '#303952' }}>
        <div className="container">
          <div className="header-part">
            <div className="head-logo">
              <a href="index.html">
                <img src="images/logo.png" alt=" " height="56px"></img>
              </a>
            </div>
            <div className="top-nav">
              <span className="menu" onClick={toggleMenu}>
                <img src="images/menu.png" alt="" />
              </span>
              <ul className="nav1" id="nav1">
                <li>
                  {/* 确保点击后自动收起菜单 */}
                  {/* <a href="/">Home</a>  */}
                  <a href="/" onClick={toggleMenu}>Home</a> 
                </li>
                <li>
                  {/* <a href="#/news">News</a> */}
                  <a href="#/news" onClick={toggleMenu}>News</a>
                </li>
                <li>
                  {/* <a href="#/projects">Projects</a> */}
                  <a href="#/projects" onClick={toggleMenu}>Projects</a>
                </li>
                <li>
                  {/* <a href="#/publication">Publication</a> */}
                  <a href="#/publication" onClick={toggleMenu}>Publications</a>
                </li>
                <li>
                  {/* <a href="#/people">People</a> */}
                  <a href="#/people" onClick={toggleMenu}>People</a>
                </li>
                <li>
                  {/* <a href="#/awards">Awards</a> */}
                  <a href="#/awards" onClick={toggleMenu}>Awards</a>
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
