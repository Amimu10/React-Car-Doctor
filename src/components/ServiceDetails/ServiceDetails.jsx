import { Link, useLoaderData } from "react-router-dom";
import detailsImg from "../../../public/assets/images/checkout/checkout.png";
import logoImg from "../../../public/assets/logo.svg"
const ServiceDetails = () => {
  const service = useLoaderData();
  const {_id, price, img, title, description, facility } = service;
  // console.log(service);
  console.log(title);
  return (
    <div className="container mx-auto ">
      <div className="relative">
        <img
          className="w-full lg:h-[300px] h-[200px] object-cover bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] bg-[#1E1E1E] my-14"
          src={detailsImg}
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 rounded-md font-bold lg:text-[45px] md:text-[32px]">
          <h3 className="lg:text-4xl text-2xl font-semibold">
            Service Details
          </h3>
          <Link to="/" className="text-[#FF3811] font-bold text-[24px]">
            Back Home
          </Link>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-8">
        <div className="col-span-3">
          <img className="w-full h-[400px]" src={img} alt="" />
          <h3 className="text-[35px] font-bold text-[#151515] my-4">{title}</h3>
          <p className="text-justify">{description}</p>
          <div className="grid grid-cols-2 gap-3">
            {
                facility.map (item => <> 
                <div  className="p-4 card my-8 w-[350px] bg-[#F3F3F3] rounded-md border-2 border-t-[#FF3811]">
                <h3> {item.name}</h3>
                <p>{item.details}</p>
                </div>
                </>)
            }
        </div>
        </div>
        <div className="col-span-1">
          <div className="card bg-black shadow-xl p-4">
            <figure>
              <img className="mt-2"
                src={logoImg}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white mb-3">Need Help? We Are Here
              To Help You!</h2>
              <div className="bg-white w-[220px] h-[80px] rounded-xl text-center mx-auto ">
                    <h3 className="my-2"><span className="text-[#FF3811] text-[20px] font-bold ">Car Doctor </span>Special
                    </h3>
                    <p>Save up to <span className="text-[#FF3811] text-[16px]">60% off</span></p>
              </div>
            </div>
          </div>
          <h3 className="my-4 text-center lg:text-[35px] md:text-[24px] font-bold">Price ${price}</h3>
        <Link to={`/checkout/${_id}`}>  <button className="btn w-full bg-[#FF3811] hover:bg-[#FF3811] text-white text-[18px] rounded-md ">Proceed Checkout</button></Link>
        </div>
      </div>
      <div>
     
      </div>
    </div>
  );
};

export default ServiceDetails;
