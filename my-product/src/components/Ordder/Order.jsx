import React from 'react';
import ord1 from "../../images/1.jpg";
import ord2 from "../../images/salad.webp";
import ord3 from "../../images/grape.jpeg";
import ord4 from "../../images/4.jpg";
import ord5 from "../../images/burger.jpg";
import ord6 from "../../images/cake.jpeg";
const Order = () => {
    return (
        <div className='bg-base-100 py-20'>
            <div className='w-4/5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-0 mt-12'>
                <div className="card card-compact w-96 h-96 shadow-xl lg:pr-0 pr-4">
                    <figure>
                        <img className='w-96  h-96'
                            src={ord1}
                            alt="image1" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pasta!</h2>
                        <p>Price: $2</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* card no 1 */}
                <div className="card card-compact w-96 h-96 shadow-xl lg:pr-0 pr-4">
                    <figure>
                        <img className='w-96  h-96'
                            src={ord2}
                            alt="image2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Salad!</h2>
                        <p>Price: $3</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* card no 2 */}
                <div className="card card-compact w-96 h-96 shadow-xl lg:pr-0 pr-4">
                    <figure>
                        <img className='w-96  h-96'
                            src={ord3}
                            alt="image3" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Grape!</h2>
                        <p>Price: $5</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* card no 3 */}
                <div className="card card-compact w-96 h-96 shadow-xl lg:pr-0 pr-4">
                    <figure>
                        <img className='w-96  h-96'
                            src={ord4}
                            alt="image4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pasta!</h2>
                        <p>Price: $4</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* card no 4 */}
                <div className="card card-compact w-96 h-96 shadow-xl lg:pr-0 pr-4">
                    <figure>
                        <img className='w-96  h-96'
                            src={ord5}
                            alt="image5" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Burger!</h2>
                        <p>Price: $9</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* card no 5 */}
                <div className="card card-compact w-96 h-96 shadow-xl lg:pr-0 pr-4">
                    <figure>
                        <img className='w-96 h-96'
                            src={ord6}
                            alt="image6" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Special Cake!</h2>
                        <p>Price: $4</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {/* card no 4 */}
            </div>
        </div>
    );
};

export default Order;