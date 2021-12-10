import React from "react";
import './style.css'


const ImageProduct = ({urlimage, imageDescription}) => (
    <div className = "image-product">
        <img src={urlimage} alt={imageDescription}></img>
    </div>
)


export default ImageProduct