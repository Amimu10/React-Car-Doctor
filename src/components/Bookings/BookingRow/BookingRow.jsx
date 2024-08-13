const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, Service, Price, Date, CustomerName, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-28 w-28">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{CustomerName}</td>
      <td>{Service}</td>
      <td>{Date}</td>
      <td>{Price}</td>
      <th>
        {
          status ==="confirm"? <span className="font-bold text-[16px]">Confirmed</span>
          :
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white"
          >
            Pending
          </button>
        }
      </th>
    </tr>
  );
};

export default BookingRow;
