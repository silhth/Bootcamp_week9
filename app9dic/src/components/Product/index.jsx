import React from "react";
import TextBlock from '../TextBlock';
import ColorChoise from '../ColorChoise';
import Size from '../Size';
import Button from '../Button';
import ImageProduct from '../ImageProduct'


const Product = ({ urlimage, imageDescription, title, price, content, colors, size, size1, size2, size3, buttonAction }) => (
    <div className="product">
        <ImageProduct urlimage={urlimage} imageDescription={imageDescription} />
        <div className="productDescription">
            <TextBlock title={title} price={price} content={content} />
            <ColorChoise colors={colors} />
            <Size size={size} size1={size1} size2={size2} size3={size3} />
            <Button buttonAction={buttonAction} />
        </div>
    </div>
)


export default Product