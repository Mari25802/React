import './css/Viewcart.css'
import { cartContext } from './CartContext'
import { useContext, useEffect, useState } from 'react'

export default function Viewcart() {
    const [total, setTotal] = useState(0);
    const { cart, setCart } = useContext(cartContext);

    // Ensure all products have a default Quantity of 1
    useEffect(() => {
        const updatedCart = cart.map(product => ({
            ...product,
            Quantity: product.Quantity || 1, // Set Quantity to 1 if it doesn't exist
        }));
        setCart(updatedCart);
    }, []); // Run only once when the component mounts

    // Update total price whenever cart changes
    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + parseInt(curr.Price) * curr.Quantity, 0)
        );
    }, [cart]);

    // Function to handle quantity change
    const updateQuantity = (index, delta) => {
        const updatedCart = [...cart];
        updatedCart[index].Quantity += delta;

        // Prevent quantity from going below 1
        if (updatedCart[index].Quantity < 1) {
            updatedCart[index].Quantity = 1;
        }
        setCart(updatedCart);
    };

    // Function to handle product removal
    const removeProduct = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index); // Remove the product at the given index
        setCart(updatedCart);
    };

    if (cart.length === 0) {
        return <h1>Your cart is empty</h1>;
    }

    return (
        <div className="cart-container">
            <div className="products">
                {cart.map((product, index) => (
                    <div className="cart-product" key={index}>
                        <div className="cart-img">
                            <img src={`/${product.Image}`} alt={product.Name} />
                        </div>
                        <div className="cart-content">
                            <h2 className="name">{product.Name}</h2>
                            <h2>RS: {product.Price}</h2>
                            <div className="quantity-controls">
                                <button onClick={() => updateQuantity(index, -1)}>-</button>
                                <span>{product.Quantity}</span>
                                <button onClick={() => updateQuantity(index, 1)}>+</button>
                            </div>
                        </div>
                        <div className="total2">
                            <h2>₹: {product.Price * product.Quantity}</h2>
                            <button 
                            className="remove-button" 
                            onClick={() => removeProduct(index)}
                        >
                            X
                        </button>
                        </div>
                       
                    </div>
                ))}
            </div>
            
            <div className="cart-total">
                <div className="total1">
                    <h1>Order Summary</h1>
                    <div className="total">
                        <h1>TOTAL</h1>
                        <span className="span">₹<span id="total-amount">{total}</span></span>
                        <div className="checkout">
                            <button className="checkout-button">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
