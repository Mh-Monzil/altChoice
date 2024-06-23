import { Link, useNavigate } from "react-router-dom";
import registerImg from "../assets/register.json";
import Lottie from "lottie-react";
import logo from "../assets/alt.png";
import UseAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";
import axios from 'axios';

const Register = () => {
  const { user, createUser, updateUserProfile, setUser } =
    UseAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if(user){
        navigate('/')
      }
    }, [navigate, user])

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const user = { name, photo, email, password };
    console.log(user);

    try {
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(name, photo);
      setUser({ ...result?.user, photoURL: photo, displayName: name });

      const {data} = await axios.post("https://alt-choice-server.vercel.app/jwt", {email: result?.user?.email}, {withCredentials: true})

      toast.success("Sign Up Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)]">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-8 sm:h-8" src={logo} alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Register your account now
          </p>
          <form onSubmit={handleRegister}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="name"
              >
                Username
              </label>
              <input
                id="name"
                autoComplete="name"
                name="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                id="photo"
                autoComplete="photo"
                name="photo"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
                type="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
                type="password"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-2 rounded-md font-semibold text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#00DDB3] border-2 border-[#00DDB3] hover:bg-[#253745] hover:border-[#253745] hover:text-white focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
        <div className="hidden w-full h-full my-auto bg-cover bg-center lg:block lg:w-1/2 flex-col">
          <Lottie
            animationData={registerImg}
            className="hidden bg-cover bg-center lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
