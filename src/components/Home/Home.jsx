import About from "../About/About";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Team></Team>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;