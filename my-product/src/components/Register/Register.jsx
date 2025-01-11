import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Register = () => {
    const [successReg, setRegisterSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setRegisterSuccess('');
        setRegisterError('');
        if (password.length < 6) {
            setRegisterError("please give more than 6 character!!!")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user);
                setRegisterSuccess("User created successfully!!");
            })
            .catch((error) => {
                console.log(error);
                setRegisterError(error.message);
            })
    }
    return (
        <div className='bg-base-200'>
            <div className="hero min-h-screen lg:mt-0 mt-12">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Register now!</h1>
                        <p className="py-6">
                            A registration page, also known as a sign-up page, allows users to create an account with a system.
                            A login page allows users to log in to an existing account.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-base">Register Now</button>
                            </div>
                        </form>
                        {successReg && <p className="text-green-600 text-xl text-center mb-5">{successReg}</p>}
                        {registerError && <p className="text-red-600 text-xl text-center mb-5">{registerError}</p>}
                        <p className="text-lg  font-semibold px-3">Already have an account ? Please <Link className="text-green-600" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;