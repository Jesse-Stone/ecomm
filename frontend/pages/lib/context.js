import React, {createContext, useContext, useState} from 'react'
import { Context } from 'urql';
import ProductDetails from '../product/[slug]';

const ShopContext = createContext();

export const StateContext = ({children}) => {
    //Add our data for the state
    const [qty, setQty] = useState(1)
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const increaseQty = () => {
        setQty((prevQty) => prevQty + 1)
    }

    const decreaseQty = () => {
        setQty((prevQty)=> {
            if(prevQty -1 < 1) return 1;
            return prevQty -1
        })
    }

    //Add Product to Cart

    const onAdd = (product, quantity) => {
        //First check if product in cart
        const exist = cartItems.find(item=> item.slug === product.slug);
        if(exist){
            setCartItems(cartItems.map((item)=> item.slug===product.slug ? {...exist, quantity: exist.quantity + quantity} : item))
        }else {
            setCartItems([...cartItems,{...product, quantity:quantity}])
        }
    }

        //Remove Product from Cart
        const onRemove = (product) => { //First check if product in cart
            const exist = cartItems.find(item=> item.slug === product.slug);
            if(exist.quantity === 1) {
                setCartItems(cartItems.filter(item => item.slug !== product.slug))
            }
            else {
                setCartItems(cartItems.map(item => item.slug === product.slug ? {...exist, quantity: exist.quantity -1} : item))
            }
            
        }
    
    return ( 
        <ShopContext.Provider value = 
        {{qty, 
        showCart, 
        setShowCart, 
        cartItems, 
        setCartItems, 
        increaseQty, 
        decreaseQty,
        onAdd,
        onRemove,}}>
            {children}
        </ShopContext.Provider>
    )
} 

export const useShopContext = () => useContext(ShopContext)