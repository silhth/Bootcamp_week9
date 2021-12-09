import React from "react";


const ImageProduct = ({urlimage, imageDescription}) => (
    <div className = "image-product">
        <img src={urlimage} alt={imageDescription}></img>
    </div>
)


export default ImageProduct