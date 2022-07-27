import { useQuery } from "urql"
import { GET_PRODUCT_QUERY } from "../lib/query"
import { useRouter } from "next/router"
import { ProductDetailsStyle, ProductInfoStyle, QuantityStyle, BuyStyle } from "../../styles/ProductDetails"
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'

import { useShopContext } from "../lib/context"

export default function ProductDetails() {

    const {qty, increaseQty, decreaseQty, cartItems, onAdd } = useShopContext()

    const {query} = useRouter()
    const [results] = useQuery(
        {query: GET_PRODUCT_QUERY,
        variables: {slug: query.slug}})
        
    const {data,fetching, error} = results
    if(fetching) return <p>Loading...</p>
    if(error) return <p>Oh No...{error.message}</p>
    
    const currentProduct = data.products.data[0].attributes
    const {title, image, description, price} = data.products.data[0].attributes
    console.log(data.products.data[0].attributes)

    return (
        <ProductDetailsStyle>            
            <img src={image.data.attributes.formats.medium.url} alt="" />
            <ProductInfoStyle>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>${price}</p>
                <QuantityStyle>
                    <span>Quantity</span>
                    <button onClick = {decreaseQty}><AiFillMinusCircle/></button>
                    <p>{qty}</p>
                    <button onClick = {increaseQty}><AiFillPlusCircle/></button>
                </QuantityStyle>
                <BuyStyle onClick= {() => onAdd(currentProduct,qty)}>Add to Cart</BuyStyle>
            </ProductInfoStyle>           
        </ProductDetailsStyle>
    )
}