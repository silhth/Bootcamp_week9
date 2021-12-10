import React from "react";
import './style.css';

const Size = ({size, size1, size2, size3}) => (
    <div className = "size">
    <h3>{size}</h3>
    <div className= "size-choise">
    <div className = "size1">{size1}</div>
    <div className = "size2">{size2}</div>
    <div className = "size3">{size3}</div>
    </div>
    </div>
)


export default Size