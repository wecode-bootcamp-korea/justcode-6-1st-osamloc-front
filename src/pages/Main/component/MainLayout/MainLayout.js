import React from "react";
import "../../../Main/index.scss";
import {Link} from "react-router-dom"
function MainLayout({mainTitle, subTitle, children, viewButton, slide}) {
    return(
        <div className="main_layout">
            {/* <div className="container" > */}
            <div className={slide ? `container_slide` : `container`} >
                <div className="maintitle">{mainTitle || mainTitle}</div>
                <div className="subtitle">{subTitle || subTitle}</div>
                {children}
                <div className="margintop-30 text-center">
                    {viewButton && <Link className="view_btn" to="/main">{viewButton}</Link>}
                </div>
            </div>
           
        </div>
    
    )
}
export default MainLayout;