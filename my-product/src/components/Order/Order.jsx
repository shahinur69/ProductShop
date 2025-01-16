import React, { useState } from 'react';
import ord1 from "../../images/1.jpg";
import ord2 from "../../images/salad.webp";
import ord3 from "../../images/grape.jpeg";
import ord4 from "../../images/4.jpg";
import ord5 from "../../images/burger.jpg";
import ord6 from "../../images/cake.jpeg";
const Order = () => {
    const products = [
        { id: 1, name: "Pasts!", price: 5, img: ord1 },
        { id: 2, name: "Salad!", price: 9, img: ord2 },
        { id: 3, name: "Grape!", price: 7, img: ord3 },
        { id: 4, name: "Pasta!", price: 3, img: ord4 },
        { id: 5, name: "Burger!", price: 4, img: ord5 },
        { id: 6, name: "Special Cake!", price: 5, img: ord6 },
    ];
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };
    const removeCart = (productId) =>{
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };
    const totalAmount = cart.reduce((sum, item) => sum + item.price*item.quantity, 0);
    return (
        <div className='bg-base-100 py-20'>
            {/* Product Cards */}
            <div className='w-4/5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-0 mt-12'>
                {products.map((product) => (
                    <div key={product.id} className="card card-compact w-96 h-96 shadow-xl lg:pr-0 pr-4">
                        <figure>
                            <img className='w-96  h-96'
                                src={product.img}
                                alt={product.name} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.name}</h2>
                            <p>Price: ${product.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"
                                    onClick={() => addToCart(product)}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Cart Section */}
            <div className='w-4/5 mx-auto py-16'>
                <div className='text-center pb-10 font-bold'>
                    <h1 className="text-4xl">Your Purchase is running when you select the item!</h1>
                </div>
                {cart.length === 0 ? (
                    <p className='text-center text-lg'>Your cart is empty now.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    {/* <th>#</th> */}
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    {/* <th>Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={item.id}>
                                        {/* <td>{index + 1}</td> */}
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                       {/*  <td>{item.price}</td> */}
                                        <td>{item.price*item.quantity}</td>
                                        <button className='btn btn-success ' onClick={() => removeCart(item.id)}>Remove</button>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                   <th colSpan="3" className='text-right'>Total Amount:</th>
                                   <th>${totalAmount}</th>
                                   <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                )}
                <div className='text-center mt-6'>
                    <button className='btn btn-success text-white'
                    onClick={() => alert("Order placed successfully!")}
                    >
                         Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;