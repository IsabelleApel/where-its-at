import { useAtom } from "jotai";
import { cartAtom } from "../../stores/cartAtom";

function OrderPage() {
  const [cart] = useAtom(cartAtom);

  console.log(cart);
  

  return (
    <div>OrderPage</div>
  )
}

export default OrderPage;