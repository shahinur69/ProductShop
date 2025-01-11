import React from 'react';
import img1 from "../../images/burger.jpg";
import img2 from "../../images/pasta.jpg";
import img3 from "../../images/cake.jpeg";
import img4 from "../../images/salad.webp";
import img5 from "../../images/tomato.avif";
import img6 from "../../images/grape.jpeg";
const Home = () => {
    return (
        <div className='bg-base-300'>
            <div className='w-4/5 mx-auto py-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:mt-0 mt-12'>
                <div className="card bg-base-100 lg:w-96 w-72 shadow-xl">
                    <figure>
                        <img className='w-96 h-72'
                            src={img1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-lg">
                        <h2 className="card-title">Burger!</h2>
                        <p>If you choose it more , you van buy it without doubt.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-sm text-white bg-red-800 border-none">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 lg:w-96 w-72 shadow-xl">
                    <figure>
                        <img className='w-96 h-72'
                            src={img2}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-lg">
                        <h2 className="card-title">Pastaa!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-sm text-white bg-red-800 border-none">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 lg:w-96 w-72 shadow-xl">
                    <figure>
                        <img className='w-96 h-72'
                            src={img3}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-lg">
                        <h2 className="card-title">Best Cake</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-sm text-white bg-red-800 border-none">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 lg:w-96 w-72 shadow-xl">
                    <figure>
                        <img className='w-96 h-72'
                            src={img4}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-lg">
                        <h2 className="card-title">Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-sm text-white bg-red-800 border-none">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 lg:w-96 w-72 shadow-xl">
                    <figure>
                        <img className='w-96 h-72'
                            src={img5}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-lg">
                        <h2 className="card-title">Best Tomato</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-sm text-white bg-red-800 border-none">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 lg:w-96 w-72 shadow-xl">
                    <figure>
                        <img className='w-96 h-72'
                            src={img6}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-lg">
                        <h2 className="card-title">Grape</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary text-sm text-white bg-red-800 border-none">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-4/5 mx-auto py-16'>
                <div className='text-center pb-10 font-bold'>
                    <h1 className="text-4xl">Some Key Features</h1>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Quality</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Grape</td>
                                <td>Quality Specialist for children</td>
                                <td>Green</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Orange</td>
                                <td>Quality best for older</td>
                                <td>Orange</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Jackfruit</td>
                                <td>Specially for foreigner</td>
                                <td>Blown</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;