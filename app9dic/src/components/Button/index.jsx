import React from "react";


const Button = ({buttonAction}) => (
    <div className = "button">
        <button className = "button_add-to-cart">{buttonAction}</button>
    </div>
)


export default Button