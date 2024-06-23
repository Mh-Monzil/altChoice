import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import notFound from '../assets/errorpage.json';


const ErrorPage = () => {
    return (
        <div className="text-center h-screen my-auto flex flex-col justify-center space-y-5 p-20 f
        ">
            <Lottie className="w-80 mx-auto" animationData={notFound} ></Lottie>
            <p className="text-4xl font-bold">Page Not Found?</p>
            <p className="font-semibold text-gray-500">Whoops, this is embracing.</p>
            <p className="font-semibold text-gray-500">Looks like the page you were looking for wasn't found.</p>
            <Link to='/'>
                <button className=" text-white capitalize transition-colors duration-300 transform bg-[#00DDB3] border-2 border-[#00DDB3] hover:bg-[#253745] hover:border-[#253745] hover:text-white text-base md:text-lg font-bold px-6 py-2 rounded-md cursor-pointer  border-none">Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;