import React from "react";
import './style.css';

const Button = ({buttonAction}) => (
    <div className = "button">
        <button className = "button_add-to-cart">{buttonAction}</button>
    </div>
)


export default Button