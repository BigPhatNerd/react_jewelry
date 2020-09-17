import React from 'react';
// import { Product.. } from './component/product..';  (need to find the component)

import './cart.css'

// before page is product.js >> then 'add to cart' your'e brought here where you items are display with tags of title. prodect description, price, total>> then click a button to go to another componet to pay //
let Cart = (props) => {
    const (cartOpen, closeCart, handleCartNav)=props.valueProps;
    return (
       // < Product.. >
        {value=> {
         const {cart,total}=value;
        return(
           <div className="cartItem">
             <span className="inside-btn onClick={handleCartNav}"></span>
           </div>
               <div class="image">
                 <img src="{product.img.src}" alt="{product description}"></img>
               </div>
         )
}
// < /Product.. >
    )
}
export default Cart;
