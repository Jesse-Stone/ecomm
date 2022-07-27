import { useShopContext } from "../pages/lib/context"
import { 
	CartWrapper, 
	CartStyle, 
	Card, 
	CardInfo, 
	EmptyStyle,
} from "../styles/CartStyles"
import {FaShoppingCart} from 'react-icons/fa'
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { QuantityStyle } from "../styles/ProductDetails"

const Cart = () => {
    const {cartItems, setShowCart, onAdd, onRemove } = useShopContext()
  return (
    <CartWrapper onClick = {()=> setShowCart(false)}>
      <CartStyle onClick = {(e) => e.stopPropagation()}> 
				{cartItems.length < 1 && (
					<EmptyStyle>
							<h1>buy some more shit and put it in your cart</h1>
							<FaShoppingCart/>
					</EmptyStyle>
				)}
				{cartItems.length >= 1 &&
					cartItems.map((item) => {
						return (
							<Card key = {item.slug}>
							<img src={item.image.data.attributes.formats.thumbnail.url} alt={item.title} />
							<CardInfo>
								<h3>{item.title}</h3>
								<h3>{item.price}</h3>
								<QuantityStyle>
									<span>Quantity</span>
									<button onClick={() => onRemove(item)}>
										<AiFillMinusCircle/>
									</button>
									<p>{item.quantity}</p>
									<button onClick={()=> onAdd(item, 1)}>
										<AiFillPlusCircle/>
									</button>
								</QuantityStyle>
							</CardInfo>
							</Card>
						);
					})}
			</CartStyle>
		</CartWrapper>
  )
}

export default Cart
