import Cartintro from "../../component/shop/shopCartIntro"
import Footer from "../../component/footer"
import ShopCartproductList from "../../component/shop/shopCartproductList"
const Cart = () => {
  return (
    <div>
        <Cartintro/>
        <ShopCartproductList/>
        <Footer/>
    </div>
  )
}

export default Cart;