import { Link, useNavigate } from "react-router-dom";
import bgImage from '../assets/queries.png';
import UseAuth from "../hooks/useAuth";
import axios from 'axios';
// import axiosCommon from "../hooks/useAxiosCommon";
import toast from "react-hot-toast";

const AddQueries = () => {
    const {user} = UseAuth();
    const navigate = useNavigate();

    const handleAddQuery = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.product_name.value;
        const productBrand = form.product_brand.value;
        const productImage = form.product_image.value;
        const queryTitle = form.query_title.value;
        const boycottingReasonDetails = form.boycotting_reason_details.value;
        const recommendationCount = 0;

        const queryUser = {
            email: user?.email,
            name: user?.displayName,
            image: user?.photoURL,
            currentDateTime: new Date().toLocaleString()
        }

        const queryData = { queryTitle, productName, productBrand, productImage, boycottingReasonDetails,recommendationCount,  queryUser} ;

        console.log(queryData);

        try{
            const {data} = axios.post('https://alt-choice-server.vercel.app/query', queryData);
            console.log(data);
            toast.success("Query Added Successfully")
            navigate('/my-queries')
        }catch(err){
            console.log(err);
            toast.error(err?.message)
        }

        form.reset();
    }




  return (
    <div >
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className=" bg-cover bg-center rounded-md"
      >
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 flex justify-center">
            <Link to='/' className=" px-6 py-2 rounded-md font-semibold text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#4ADE80] border-2 border-[#4ADE80] hover:bg-[#253745] hover:border-[#253745] hover:text-white focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Home / Add Queries</Link>
        </div>
      </div>


      <div className="w-full px-6 py-8 md:px-20 lg:w-1/2 mx-auto  mt-12 rounded-lg shadow-md">

      <form onSubmit={handleAddQuery}>
        <h2 className="text-center font-semibold text-4xl">Add Your Queries</h2>
        {/* input 1 */}
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="product_name"
          >
            Product Name
          </label>
          <input
            id="product_name"
            autoComplete="product_name"
            name="product_name"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
            type="text"
            required
          />
        </div>

        {/* input 2 */}
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="product_brand"
          >
            Product Brand
          </label>
          <input
            id="product_brand"
            autoComplete="product_brand"
            name="product_brand"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
            type="text"
            required
          />
        </div>

        {/* input 3 */}
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="product_image"
          >
            Product Image-URL
          </label>
          <input
            id="product_image"
            autoComplete="product_image"
            name="product_image"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
            type="text"
            required
          />
        </div>

        {/* input 4 */}
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="query_title"
          >
            Query Title
          </label>
          <input
            id="query_title"
            autoComplete="query_title"
            name="query_title"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
            type="text"
            required
          />
        </div>

        {/* input 5 */}
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="boycotting_reason_details"
          >
            Boycotting Reason Details
          </label>
          <input
            id="boycotting_reason_details"
            autoComplete="boycotting_reason_details"
            name="boycotting_reason_details"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
            type="text"
            required
          />
        </div>

        <button type="submit" className="w-full mt-8 px-6 py-2 rounded-md font-semibold text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#4ADE80] border-2 border-[#4ADE80] hover:bg-[#253745] hover:border-[#253745] hover:text-white focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"> Add Queries</button>

      </form>
      </div>
    </div>
  );
};

export default AddQueries;
