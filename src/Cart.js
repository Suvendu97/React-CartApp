import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                { 
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id:1
                },
                { 
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id:2
                },
                { 
                    price: 9999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
                    id:3
                },
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
    }

   render() {
       const {products} = this.state;
       return (
           <div className='cart'>
               
               { products.map((product) => {
                   return (
                   <CartItem 
                    product={product} 
                    key= {product.id}
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
}


export default Cart;