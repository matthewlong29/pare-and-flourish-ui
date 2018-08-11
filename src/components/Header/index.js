import React, {Component} from "react"
import Link from "gatsby-link"
import "./styles.scss"
import navLogo from "../../assets/images/other/pareAndFlourishBannerLogo.png"

/**
 * Header component
 * TODO: get "snapping" (sticky bottom navbar) to work
 * TODO: add overlay for when window width is small 
 */
class Header extends Component {
  constructor(props) {
    super(props)

    // let lastScrollY=0;
    // let ticking=false;
    
    // let header=React.createRef();
  };

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }


  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // handleScroll=(event) => {
  //   lastScrollY=window.scrollY;

  //   const windowHeight=document.body.clientHeight; // TODO: determine if this is needed
  //   const bannerHeight=document.querySelector(".landing-page-image").offsetHeight;
  //   const topNavHeight=document.querySelector(".menuTabsContainer").offsetHeight;
  //   const botNavHeight=document.querySelector(".join-and-search-container").offsetHeight;
  //   const headerHeight=bannerHeight + topNavHeight + botNavHeight;

  //   console.log({windowHeight, bannerHeight, topNavHeight, botNavHeight, headerHeight});

  //   if (document.querySelector(".join-and-search-container").scrollTop > headerHeight) {
  //     console.log("hey??");  
  //   }

  //   if (!ticking) {
  //     window.requestAnimationFrame(() => {
  //       this.nav.current.style.top=`${lastScrollY}px`;
  //       ticking=false;
  //     });
   
  //     ticking=true;
  //   }
  // }

  render() {
    return (
      <header ref={this.header}>
        <div className="menuTabs">
          <div className="menuTabsContainer">
            <Link className="menuTab" to="/">
              <img src={navLogo} />
            </Link>
            <Link className="menuTab" to="/about/">About</Link>
            <Link className="menuTab" to="/blog/">Blogs</Link> {/*TODO: check path used on pandf.com to avoid 404*/}
            <Link className="menuTab" to="/collaborate/">Collaborate</Link> {/*TODO: check path used on pandf.com to avoid 404*/}
            <Link className="menuTab" to="/services/">Services</Link>
            <Link className="menuTab" to="/events/">Events</Link>
            <Link className="menuTab" to="/reading/">#amReading</Link> {/*TODO: check path used on pandf.com to avoid 404*/}
            <Link className="menuTabOverlay" to="#overlay">
              <div className="overlayMenu" id="openMenu">Menu</div>
            </Link>
          </div>
        </div>
  
        <div id="header-image">
          <div className="landing-page-image" />
        </div>
        
        <div className="join-and-search-container ">
          <div className="join">  
            <span>Join Pare and Flourish Now!</span>
          </div>
          <div className="search">
            <form action="/search/" method="get">
              <input type="text" id="search-box" name="query" placeholder="Start typing here." />
              <input type="submit" value="search" />
            </form>
          </div>
        </div>
      </header>
    )
  }
}

export default Header

// C:\Users\Matthew\Documents\pare-and-flourish\src\components\Header\styles.scss
// C:\Users\Matthew\Documents\pare-and-flourish\src\assets\images\other\pareAndFlourishBannerLogo.png

// ../../../assets/images/other/pareAndFlourishFooterLogo.png