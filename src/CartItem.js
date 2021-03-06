import React from 'react';


const CartItem = (props) => {

    // console.log('this.props', this.props);
    const {price, title, qty } = props.product;
    const {
        product, 
        onIncreaseQuantity, 
        onDecreaseQuantity, 
        onDeleteProduct
    } = props;

    return(
        <div className="cart-item">
            {/* {this.props.jsx} */}
            <div className="left-block">
                <img style= {styles.image} src= {product.img} />
            </div>

            <div className="right-block">
                <div style={ { fontSize: 25 } }> {title} </div>
                <div style={ { color: '#777' } }>Rs {price} </div>
                <div style={ { color: '#777' } }>Qty: {qty} </div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/709/709484.svg"
                        onClick = {() => onIncreaseQuantity(product)}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/659/659892.svg"
                        onClick = {() => onDecreaseQuantity(product)}
                            
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/709/709519.svg"
                        onClick = {() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
        );
    
}

const styles = {
    image: {
        height:125,
        width: 125,
        borderRadius: 4,
        background:'#ccc'
    }
}
export default CartItem;