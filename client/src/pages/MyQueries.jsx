import { Link } from "react-router-dom";
import bgImage from "../assets/queries.png";
import UseAuth from "../hooks/useAuth";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

const MyQueries = () => {
  const { user, loading } = UseAuth();
  const [myQueries, setMyQueries] = useState([]);
  const [sortedQueries, setSortedQueries] = useState([]);
  console.log(user);

  useEffect(() => {
    getMyQuery();
  }, []);

  const getMyQuery = async () => {
    const { data } = await axios(
      `https://alt-choice-server.vercel.app/my-query/${user?.email}`,{withCredentials: true}
    );

    console.log(data);
    setMyQueries(data);
  };
  console.log(myQueries);

  useEffect(() => {
    setSortedQueries([...myQueries].sort((a, b) => new Date(b.queryUser.currentDateTime) - new Date(a.queryUser.currentDateTime)));
}, [myQueries])
console.log(sortedQueries);

  // const array = myQueries.map(query => query.queryUser.currentDateTime);
  // console.log(array);
  // console.log("sort", array.sort((a,b) => new Date(b) - new Date(a)));

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const {data} = await axios.delete(`https://alt-choice-server.vercel.app/delete-query/${id}`)
        console.log(data);
        const remaining = myQueries?.filter((item) => item._id !== id);
        setMyQueries(remaining);

        Swal.fire({
          title: "Deleted!",
          text: "Query has been deleted.",
          icon: "success"
        });
      }
    });
  };





  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-gradient-to-b from-green-600/20 to-black/80  via-transparent bg-left-top rounded-md"
      >
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 ">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Explore Queries & Add Your Own
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-400">
              Need advice? Don't hesitate. Click below to add your query.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/add-queries"
              className="inline-flex justify-center items-center gap-x-3 text-center  bg-gradient-to-tl from-green-500 to-cyan-500 shadow-lg shadow-transparent hover:shadow-green-700/50 border border-transparent text-white text-lg font-semibold rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-7 dark:focus:ring-offset-gray-800"
            >
              Add Queries
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="my-24">
        <h2 className="text-center font-semibold  text-3xl md:text-4xl my-10">
          My Queries
        </h2>
        {loading && <ScaleLoader height={30} width={3} color="#36d7b7" />}
        {user && myQueries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
            {sortedQueries?.map((query) => (
              <div
                key={query._id}
                className="max-w-96 min-w-96 mx-auto flex flex-col bg-white border hover:border-white hover:shadow-xl shadow-sm rounded-xl hover:rounded-2xl dark:hover:border-white dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 relative pb-14"
              >
                <img
                  className="w-full h-80 rounded-t-xl"
                  src={query?.productImage}
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {query?.queryTitle}
                  </h3>
                  <div className="text-gray-800 dark:text-white font-semibold flex justify-between items-center my-3">
                    <p className="bg-green-400/20 text-green-500 py-2 px-4 rounded-lg">
                      {query?.productName}
                    </p>
                    <p className="bg-green-400/20 text-green-500 py-2 px-4 rounded-lg">
                      {query?.productBrand}
                    </p>
                  </div>
                  <p className="pt-1 text-gray-500 dark:text-neutral-400">
                    {query?.boycottingReasonDetails.slice(0,100)}...
                  </p>
                  <p className="font-medium text-sm text-gray-800 dark:text-white"><span className="font-semibold text-base">Posted On :</span> {query?.queryUser?.currentDateTime}</p>
                  <div className="flex items-center flex-wrap justify-between mt-4 absolute bottom-4 left-0 w-full px-4">
                    <Link to={`/view-details/${query?._id}`} className=" text-white font-medium py-2 px-3 rounded-md bg-[#253745] transition-all duration-300 mx-auto">View Details</Link>
                    <Link to={`/update-query/${query?._id}`} className=" text-white font-medium py-2 px-3 rounded-md bg-[#253745] transition-all duration-300 mx-auto">Update</Link>
                    <Link onClick={() => handleDelete(query?._id)} className=" text-white font-medium py-2 px-3 rounded-md bg-[#253745] transition-all duration-300  mx-auto">Delete</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-center font-bold text-xl">
              You haven't added any query yet
            </p>
            <Link className=" inline-flex justify-center items-center gap-x-3 text-center  bg-gradient-to-tl from-green-500 to-cyan-500 shadow-lg shadow-transparent hover:shadow-green-700/50 border border-transparent text-white text-lg font-semibold -skew-x-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 py-2 px-5 dark:focus:ring-offset-gray-800">
              Click to Add Queries
            </Link>
          </div>
        )}
      </div>


        
    </>
  );
};

export default MyQueries;
