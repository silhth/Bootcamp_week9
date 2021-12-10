import React from "react";
import './style.css';


const TextBlock = ({title, price, content}) => (
    <div className = "text-block">
    <div className = "text-block_title">
    <h3>{title}</h3>
    <h3>{price}</h3>
    </div>
        <p>{content}</p>
    </div>
)


export default TextBlock