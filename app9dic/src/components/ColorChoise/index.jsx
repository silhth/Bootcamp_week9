import React from "react";


const ColorChoise = ({ colors }) => (
    <div className="colors">
        <h3>{colors}</h3>
        <div className="color-choise">
            <div className="color-choise_color1"></div>
            <div className="color-choise_color2"></div>
            <div className="color-choise_color3"></div>
            <div className="color-choise_color4"></div>
        </div>
    </div>
)


export default ColorChoise