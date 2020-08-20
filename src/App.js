import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component{

  constructor() {
    super();
    this.state = {
        products: [
            { 
                price: 7995,
                title: 'Fossil Sku FS4735',
                qty: 1,
                img: 'https://fossil.scene7.com/is/image/FossilPartners/FS4735_main?$sfcc_fos_large$',
                id:1
            },
            { 
                price: 59999,
                title: 'OnePlus 8 Pro',
                qty: 2,
                img: 'https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg',
                id:2
            },
            { 
                price: 174990,
                title: 'MacBook Pro',
                qty: 1,
                img: 'https://images-na.ssl-images-amazon.com/images/I/71HCR-N2O2L._SL1500_.jpg',
                id:3
            },
        ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
}

handleIncreaseQuantity = (product) => {
    console.log('hey please increase the qty of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty +=1;
    this.setState({
        products
    })
}

handleDecreaseQuantity = (product) => {
    console.log('hey please increase the qty of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    if (products[index].qty == 0) {
        return;
    }

    products[index].qty -=1;
    this.setState({
        products
    })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id); 
    this.setState({
        products: items
    })
}

getCartCount =() => {
  const {products} = this.state;

  let count = 0;

  products.forEach((product) => {
    count+= product.qty;
  });

  return count;
}

getCartTotal =() => {
  const {products} = this.state;

  let cartTotal = 0;

  products.map((product) => {
    cartTotal = cartTotal+ product.qty *product.price;
  })

  return cartTotal;
}

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />

        <div style = { { padding: 10, fontSize:20} }>Total: {this.getCartTotal()} </div>
      </div>
    );
  }
}
export default App;
