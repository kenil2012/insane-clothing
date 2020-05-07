import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({title, image, size}) => {
    return(
        <div className={`${size} menu-item`}>
            <div className="background-image" style={{
            backgroundImage:`url(${image})`
            }} />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="sub-title">Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem;