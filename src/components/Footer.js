import React from 'react'
import "./UI/Footer.css"
import {Link} from "react-router-dom"


function Footer() {

    const scrollToTop=()=>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    return (
        <div className="footer">
            <Link to="#"><div onClick={scrollToTop} className="scroll_to_top">Back to Top</div></Link>
            <br></br>
            <center><p>Copyright amazon, All rights reserved 2021</p></center>
        </div>
    )
}

export default Footer
