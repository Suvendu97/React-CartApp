import React from 'react';

class CartItem extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     // this.increaseQuantity = this.increaseQuantity.bind(this);
    //     // this.testing();
    // }

    // testing() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         // setState acts Like a synchronus call
    //         this.setState({ qty: this.state.qty + 10 });

    //         console.log('state', this.state);
    //     });
    // }

    
    increaseQuantity= () => {
        // console.log('this', this.state);

        // setState form 1
        // this.setState({
        //     qty: this.state.qty+1
        // });

        // setState form 2- if prev state required use this method
        this.setState((prevState) => {
            return {
                qty: prevState.qty+1
            }
        });
    }

    decreaseQuantity= () => {
        const { qty } = this.state;
        if(qty == 0) {
            return;
        }
        // setState form 2- if prev state required use this method
        this.setState((prevState) => {
            return {
                qty: prevState.qty-1
            }
        });
    }

    render() {
        console.log('this.props', this.props);
        const {price, title, qty } = this.props.product;

        return(
            <div className="cart-item">
                {/* {this.props.jsx} */}
                <div className="left-block">
                    <img style= {styles.image}/>
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
                            onClick = {this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/659/659892.svg"
                            onClick = {this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/709/709519.svg"
                        />
                    </div>
                </div>
            </div>
        );
    }
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