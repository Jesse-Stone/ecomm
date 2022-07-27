import Link from "next/link";
import {FiShoppingBag} from "react-icons/fi"
import { NavStyles, NavItemsStyles } from "../styles/NavStyles";
import Cart from "./Cart";
import { useShopContext } from "../pages/lib/context";

const Nav = () => {
  const {showCart, setShowCart} = useShopContext()
  return (
    <NavStyles>
        <Link href={'/'}>Stone Guitars</Link>
        <NavItemsStyles>
            <div>
                <FiShoppingBag onClick={()=> setShowCart(true)}/>
                <h3>Cart</h3>
            </div>
            
        </NavItemsStyles>
        {showCart && <Cart/> }       
    </NavStyles>
  )
}

export default Nav
