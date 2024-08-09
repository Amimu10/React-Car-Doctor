
import img1 from "../../../public/assets/images/banner/1.jpg";
import img2 from "../../../public/assets/images/banner/2.jpg";
import img3 from "../../../public/assets/images/banner/3.jpg";
import img4 from "../../../public/assets/images/banner/4.jpg";
import img5 from "../../../public/assets/images/banner/5.jpg";


const Banner = () => {
  return (
 <div className="container mx-auto">
   <div className="carousel w-full h-[600px]">
    <div id="slide1" className="carousel-item relative w-full">
      <img className="rounded-xl w-full" src={img1} />
      <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="space-y-7  w-2/3 pl-12">
          <h2 className="lg:text-5xl md:4xl text-3xl text-white">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white">
            There are many variations of passages of available, but the
            majority have suffered alteration in some form
          </p>
          <div className="md:flex block lg:space-y-0 space-y-3">
            <button className="btn btn-warning text-white mr-5">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning hover:text-white">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex transform -translate-y-1/2 left-5 justify-end right-5 bottom-0">
        <a
          href="#slide4"
          className="btn btn-circle mr-5 focus:bg-[#FF3811] text-white"
        >
          ❮
        </a>
        <a
          href="#slide2"
          className="btn btn-circle focus:bg-[#FF3811] text-white"
        >
          ❯
        </a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <img className="rounded-xl w-full" src={img2} />
      <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="space-y-7  w-2/3 pl-12">
          <h2 className="lg:text-5xl md:4xl text-3xl text-white">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white">
            There are many variations of passages of available, but the
            majority have suffered alteration in some form
          </p>
          <div className="md:flex block lg:space-y-0 space-y-3">
            <button className="btn btn-warning text-white mr-5">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning hover:text-white">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex transform -translate-y-1/2 left-5 justify-end right-5 bottom-0 text-white">
        <a
          href="#slide1"
          className="btn btn-circle mr-5 focus:bg-[#FF3811]"
        >
          ❮
        </a>
        <a href="#slide3" className="btn btn-circle focus:bg-[#FF3811]">
          ❯
        </a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <img className="rounded-xl w-full" src={img3} />
      <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="space-y-7  w-2/3 pl-12">
          <h2 className="lg:text-5xl md:4xl text-3xl text-white">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white">
            There are many variations of passages of available, but the
            majority have suffered alteration in some form
          </p>
          <div className="md:flex block lg:space-y-0 space-y-3">
            <button className="btn btn-warning text-white mr-5">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning hover:text-white">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex transform -translate-y-1/2 left-5 justify-end right-5 bottom-0 text-white">
        <a
          href="#slide2"
          className="btn btn-circle mr-5 focus:bg-[#FF3811]"
        >
          ❮
        </a>
        <a href="#slide4" className="btn btn-circle focus:bg-[#FF3811]">
          ❯
        </a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <img className="rounded-xl w-full" src={img4}  />
      <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="space-y-7  w-2/3 pl-12">
          <h2 className="lg:text-5xl md:4xl text-3xl text-white">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white">
            There are many variations of passages of available, but the
            majority have suffered alteration in some form
          </p>
          <div className="md:flex block lg:space-y-0 space-y-3">
            <button className="btn btn-warning text-white mr-5">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning hover:text-white">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex transform -translate-y-1/2 left-5 justify-end right-5 bottom-0 text-white">
        <a
          href="#slide3"
          className="btn btn-circle mr-5 focus:bg-[#FF3811]"
        >
          ❮
        </a>
        <a href="#slide1" className="btn btn-circle focus:bg-[#FF3811]">
          ❯
        </a>
      </div>
    </div>
    <div id="slide5" className="carousel-item relative w-full">
      <img className="rounded-xl w-full" src={img5}  />
      <div className="absolute rounded-lg flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
        <div className="space-y-7  w-2/3 pl-12">
          <h2 className="lg:text-5xl md:4xl text-3xl text-white">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white">
            There are many variations of passages of available, but the
            majority have suffered alteration in some form
          </p>
          <div className="md:flex block lg:space-y-0 space-y-3">
            <button className="btn btn-warning text-white mr-5">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning hover:text-white">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex transform -translate-y-1/2 left-5 justify-end right-5 bottom-0 text-white">
        <a
          href="#slide2"
          className="btn btn-circle mr-5 focus:bg-[#FF3811]"
        >
          ❮
        </a>
        <a href="#slide5" className="btn btn-circle focus:bg-[#FF3811]">
          ❯
        </a>
      </div>
    </div>
  </div>
 </div>
  );
};

export default Banner;
