import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { cartAtom } from '../../stores/cartAtom';

function AddToCartBtn({event, quantity}) {
    const navigate = useNavigate();
    const [cart, setCart] = useAtom(cartAtom);

    const handleAdd = () => {
        const existing = cart.find(e => e.id === event.id)

        if(existing){
            const updatedCart = cart.map(e => 
                e.id === event.id 
                ?{...e, quantity : e.quantity + quantity}
                : e
            ); 
        setCart(updatedCart)
        } else{
            setCart([...cart, {...event, quantity}])
        }
        navigate('/order')
    }
    
    return (
        <>
            <button onClick={handleAdd}>Lägg i varukorg</button>
        </>
    
    )
}

export default AddToCartBtn;