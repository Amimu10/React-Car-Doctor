import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import cartImg from "../../../public/assets/images/checkout/checkout.png";
import BookingRow from "./BookingRow/BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/bookings/${id}`, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        })
        .catch((error) => console.error('Error deleting booking:', error));
      }
    });
  };
  

 const handleBookingConfirm = (id) => {
      fetch(`http://localhost:3000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({status: "confirm"})
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount > 0) {
            // alert("Booking Confirm Successfully")
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
             updated.status = "confirm";
            const newBookings = {updated, ...remaining} 
            setBookings(newBookings);  
        }
      })
 } 

  return (
    <div className="container mx-auto">
      <div className="relative">
        <img
          className="w-full lg:h-[300px] h-[200px] object-cover bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] bg-[#1E1E1E] my-14"
          src={cartImg}
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 rounded-md font-bold lg:text-[45px] md:text-[32px]">
          <h3 className="lg:text-4xl text-2xl font-semibold">Cart Details</h3>
          <Link to="/" className="text-[#FF3811] font-bold text-[24px]">
            Back Home
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <th></th>
          <thead>
            <tr className="text-[16px]">
              <th></th>
              <th>image</th>
              <th>Customer Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
