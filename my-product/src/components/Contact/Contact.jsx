import React, { useState } from 'react';
import con1 from "../../images/HDAI1008.JPG";
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setNotification(`Thank you, ${name} ! We will contact you very soon.`)
        setName('');
        setEmail('');
        setMessage('');
    }
    return (
        <div className='bg-base-200'>
            <div className='lg:mt-0 mt-12'>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={con1} className="max-w-sm rounded-lg shadow-2xl" alt="myself" />
                        <div>
                            <h1 className="text-5xl font-bold">If you are very eager to know something , please contact us</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-secondary text-white text-base">Join Us</button>
                        </div>
                    </div>
                </div>
                <div className='hero bg-base-300 min-h-screen'>
                    <div className="">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold capitalize">please contact us now!</h1>
                                <p className="py-6">
                                    A Contact Us page provides guidance for existing customers and offers an overview of your brand for new visitors.
                                    A strong Contact Us page should contain several elements, such as a phone number and links to social media channels.
                                    It should also be easy to navigate, as this makes for a positive customer experience .
                                </p>
                            </div>
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <form onSubmit={handleSubmit} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name:</span>
                                        </label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email:</span>
                                        </label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Message:</span>
                                        </label>
                                        <textarea type="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="message" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-primary bold text-base">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {notification && <div className='bg-black text-green-700 px-5 py-3 rounded-xl w-1/3 text-lg font-bold'>{notification}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;