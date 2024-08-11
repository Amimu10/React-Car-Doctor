
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, img, title, price} = service;
  console.log(service);

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[250px]" src={img}></img>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions flex justify-between items-center">
         <p className="text-[#FF3811]">Price ${price}</p>
        <Link to={`/details/${_id}`}><FaArrowRight className="text-[#FF3811]"/>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
