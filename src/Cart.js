import React from 'react';
import CartItem from './CartItem';


const Cart = (props) => {
   
    const {products} =props;
    return (
        <div className='cart'>
            
            { products.map((product) => {
                return (
                <CartItem 
                product={product} 
                key= {product.id}
                onIncreaseQuantity = {props.onIncreaseQuantity}
                onDecreaseQuantity = {props.onDecreaseQuantity}
                onDeleteProduct = {props.onDeleteProduct}
                // we can call anything here
                // func={() => console.log('something')}
                // isLoggedIn={false}
                // jsx= {<h1>Test</h1>}
                // comp = {<CartItem/>}
                />
                )
            })}
        </div>
    );
   
}


export default Cart;