import { useContext } from "react";
import { Context } from "../../Context/CustomContext";


export const CartTotal = () => {
  const { cart, total, setTotal } = useContext(Context);
const totall = 0;
const sumaTotal  = JSON.stringify(cart.price + totall);
  console.log(totall);
  return (
    <div className="cart-total">
      <h1> El total es: ${sumaTotal}</h1>
    </div>

  )
}