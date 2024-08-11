import errorImg from "../../public/assets/images/error/404.png";
import Navbar from "../components/Header/Navbar";


const ErrorPage = () => {
    return (
        <div >
            <Navbar></Navbar>
            <img className="h-[50vh]  mx-auto" src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;