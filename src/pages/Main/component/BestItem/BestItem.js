import React from "react";

function BestItem({imgUrl, detail}){
    return(
        <div className="best_item">
            <div className="best_img">
                <img className="best_item_img" src={imgUrl} alt={detail.title} />
            </div>
            <div className="best_text_item">
                <div className="best_item_title">{detail.title}</div>
                <div className="best_item_cost">{detail.cost}</div>
                <div className="best_item_price">{detail.price} <span className="best_item_sale">{detail.sale}</span></div>
            </div>
            {detail.tag && <div className="best_item_tag">{detail.tag}</div> }
            
    
            
        
            
           
        </div>
    );
}
export default BestItem;