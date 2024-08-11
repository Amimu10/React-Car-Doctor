import { Link } from "react-router-dom";
import checkoutImg from "../../../public/assets/images/checkout/checkout.png";

const CheckOut = () => {
  return (
    <div className="container mx-auto">
      <div className="relative">
        <img
          className="w-full lg:h-[300px] h-[200px] object-cover bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] bg-[#1E1E1E] my-14"
          src={checkoutImg}
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 rounded-md font-bold lg:text-[45px] md:text-[32px]">
          <h3 className="lg:text-4xl text-2xl font-semibold">Check Out</h3>
          <Link to="/" className="text-[#FF3811] font-bold text-[24px]">
            Back Home
          </Link>
        </div>
      </div>
      <div className="w-full mx-auto p-12 bg-[#F3F3F3]">
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="First name"
              className="input input-bordered focus:outline-none w-full"
            />
            <input
              type="text"
              placeholder="Last name" 
              className="input input-bordered focus:outline-none w-full"
            />
          </div>
          <div className="flex gap-5 my-4">
            <input
              type="text"
              placeholder="Your Phone"
              className="input input-bordered focus:outline-none w-full"
            />
            <input
              type="text"
              placeholder="Your Email" 
              className="input input-bordered focus:outline-none w-full"
            />
          </div>
          <textarea className="textarea focus:outline-none w-full textarea-lg" placeholder="Your Message"></textarea>
          <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white w-full my-4">Order Confirm</button>
        </div>
    </div>
  );
};

export default CheckOut;
