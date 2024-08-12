import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const service  = useLoaderData(); 
    const {_id, title, img, price} = service;
    const {user} = useContext(AuthContext); 
    // console.log(user);

    const handleOrder = (e) => {
      e.preventDefault();
       const form = e.target; 
       const name = form.name.value; 
       const date = form.date.value; 
       const price = form.price.value;
       const email = user?.email;  
       console.log(name, date, email, price);

       const checkout = {
        CustomerName : name, 
        email,
        Price : price,
        Date: date,
        Service: title,
        img, 
        Service_id: _id,
  
  }
  console.log(checkout);

  fetch("http://localhost:3000/bookings", {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(checkout),
})
.then(res => res.json())
.then(data => {
    console.log(data);
    if(data.insertedId){
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Order Submitted Successfully",
        showConfirmButton: true,
        timer: 1500
      });
    }
})
    }



  return (
    <div className="container mx-auto">
      <div className="relative">
        <img
          className="w-full lg:h-[300px] h-[200px] object-cover bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] bg-[#1E1E1E] my-14"
          src={img}
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
        <form  onSubmit={handleOrder}>
        <div className="flex gap-5">
            <input
              type="text"
              placeholder="Name"
              defaultValue={user? user.displayName: ""}
              name = "name"
              className="input input-bordered focus:outline-none w-full"
            />
            <input
              type="date"
              placeholder="Date" 
              name="date"
              className="input input-bordered focus:outline-none w-full"
            />
          </div>
          <div className="flex gap-5 my-4">
            <input
              type="text"
              placeholder="Your Email" 
              defaultValue={user? user.email : ""}
              name="email"
              className="input input-bordered focus:outline-none w-full"
            />
            <input
              type="text"
              placeholder="Price" 
              name="price"
              defaultValue={"$"+ " " + price} 
              className="input input-bordered focus:outline-none w-full"
            />
          </div>
          <textarea className="textarea focus:outline-none w-full textarea-lg" placeholder="Your Message"></textarea>
          <button type="submit" className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white w-full my-4">Order Confirm</button>
        </form>
        </div>
    </div>
  );
};

export default CheckOut;
