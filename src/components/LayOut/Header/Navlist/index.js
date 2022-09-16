import React,{useState} from "react";
import { Link } from "react-router-dom";

function Navlist({items }) {
    const [ style, setStyle ] = useState({display: 'block'})

    return ( 
        <div  
            onMouseLeave={() => {
                setStyle({display: 'none'})
            }} 
            onMouseEnter={() => {
                setStyle({display: 'block'})
            }}
        
        >
        <div className="nav_list_dep2_box" 
            style={style}
        >
            <div className="nav_list_wrapper">
                <div className="nav_box">
                    <ul className="item_dep2_box">
                        {items.map((main_menu, idx) => {
                            return (
                                <li className="item_dep2" key={idx}>              
                                <Link to="/" className="item_dep2_title">{main_menu.title}</Link>
                                    <ul className="item_dep3_box">
                                        {main_menu.detail && main_menu.detail.map((sub_menu, jdx) => {
                                            return(
                                                <li className="item_dep3" key={jdx}>
                                                    <Link to="/" className="item_dep3_sub">{sub_menu}</Link>
                                                    
                                                </li> 

                                            );
                                        })

                                    }

                                </ul>
                            </li>
                            );
                        })}
                    </ul>
                    <div className="nav_img">
                        <img src="../../image/header/nav_img.png" />
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}
export default Navlist;