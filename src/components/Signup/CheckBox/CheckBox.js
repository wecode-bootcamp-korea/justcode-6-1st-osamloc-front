import React from 'react';

function CheckBox({title}){
    return(
        <div>
            <div className='check-box-stlye'>
                        <input type="checkbox"/>
                        <label htmlFor="scales">{title}</label>
             </div>
        </div>
    )
}

export default CheckBox;