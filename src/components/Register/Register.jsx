import { Link, useNavigate } from "react-router-dom";
import googleImg from "../../../public/assets/icons/google.png";
import LoginImg from "../../../public/assets/images/login/login.svg";
import {  useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); 

const handleRegister = (e) => {
       e.preventDefault();
       const form = e.target; 
       const name = form.name.value; 
       const email = form.email.value;
       const password = form.password.value;
       console.log(name, email, password);

       createUser(email, password)
       .then(result => {
        console.log(result.user);
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "user created successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate("/")
       })
       .catch(error => {
        console.log(error.message); 
       })
}

    return (
        <div className="hero my-24">
        <div className="flex md:flex-row flex-col items-center gap-8">
          <div>
            <img className="h-[460px]" src={LoginImg} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center mt-5 text-[#FF3811]">
              Register now!
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered focus:border-none hover:border-[#FF3811] "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered focus:border-none hover:border-[#FF3811] "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
              <div className="relative flex items-center ">
              <input
                  type = {showPassword?"text" : "password"}

                  name="password"
                  placeholder="password"
                  className="w-full input input-bordered focus:border-none hover:border-[#FF3811]"
                  required
                />
                <span className=" right-0 px-4 text-[20px] absolute "  onClick={() =>setShowPassword(!showPassword)}>
                 {
                    showPassword ? <FaEye></FaEye>  : <FaEyeSlash></FaEyeSlash>
                 }
                </span>
              </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">
               Register
                </button>
              </div>
            </form>
            <div className="text-center font-medium space-y-4">
              <div className="text-center">
                <h5>Or Sign In with</h5>
                <Link>
                  {" "}
                  <img className="mx-auto mt-3" src={googleImg} alt="" />
                </Link>
              </div>
              <h5 className="pb-5">
                Already Have an account?{" "}
                <Link className="text-[#FF3811]" to="/login">
                  Login
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;