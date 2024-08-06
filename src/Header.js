import React from 'react'
import "../src/commonResource/css/styles.css"

import im1 from "./commonResource/images/icons/logo-sm.png";
import im2 from "./commonResource/images/icons/search-icon-sm.png";
import im3 from "./commonResource/images/icons/cart-sm.png";

function Header() {
  return (
    
        <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand mx-auto" href="#"><img src={im1}/></a>
			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iphone</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
						<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={im2}/></a></li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={im3}/></a></li>
			        </ul>
			    </div>
			</nav>
		</div>
	</div>
    
  )
}

export default Header