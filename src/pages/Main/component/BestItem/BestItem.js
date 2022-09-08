import React from "react";

function BestItem({best}){
    return(
        <div className="best_item">
            <div className="best_img">
                <img className="best_item_img" src={best.default_img} alt={best.name} />
                {/* <img className="best_item_img" src={best.hover_img} alt={best.name} /> */}
            </div>
            <div className="best_text_item">
                <div className="best_item_title">{best.name}</div>
                <div className="best_item_cost">{best.price_origin}</div>
                <div className="best_item_price">
                    {best.sale_price}
                    {best.sale && <span className="best_item_sale">{best.sale}%</span>}
                </div>
            </div>
        </div>
    );
}
export default BestItem;