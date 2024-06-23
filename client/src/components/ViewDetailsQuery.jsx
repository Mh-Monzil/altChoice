import { useLoaderData, useParams } from "react-router-dom";
import UseAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const ViewDetailsQuery = () => {
  const { user } = UseAuth();
  const query = useLoaderData();
  const { id } = useParams();
  const [singleQuery, setSingleQuery] = useState(query);
  const [comments, setComments] = useState([]);

  const {
    queryTitle,
    productImage,
    productName,
    productBrand,
    boycottingReasonDetails,
    recommendationCount,
    queryUser,
  } = singleQuery;

  const handleAddRecommendation = async (e) => {
    e.preventDefault();
    console.log("recommendation");

    const form = e.target;
    const recommendationTitle = form.recommendation_title.value;
    const recommendedProductName = form.recommended_product_name.value;
    const recommendedProductImage = form.recommended_product_image.value;
    const recommendationReason = form.recommendation_reason.value;

    const queryId = id;
    const userEmail = queryUser?.email;
    const userName = queryUser?.name;
    const recommenderEmail = user?.email;
    const recommenderName = user?.displayName;
    const currentTimeStamp = new Date().toLocaleDateString();

    const recommendations = {
      recommendationTitle,
      recommendedProductName,
      recommendedProductImage,
      recommendationReason,
      queryId,
      productName,
      queryTitle,
      userEmail,
      userName,
      recommenderEmail,
      recommenderName,
      currentTimeStamp,
    };
    form.reset();

    console.log(recommendations);

    if (userEmail === recommenderEmail) {
      toast.error("Query creator can't recommend");
    } else {
      const { data } = await axios.post(
        "https://alt-choice-server.vercel.app/recommendations",
        recommendations
      );
      toast.success("Recommendation successful");

      increment();
      recommendComment();
      refetch();
    }
  };

  const increment = async () => {
    const { data } = await axios.post(`https://alt-choice-server.vercel.app/increment/${id}`);
  };

  useEffect(() => {
    refetch();
  }, []);

  const refetch = async () => {
    const { data } = await axios(`https://alt-choice-server.vercel.app/query/${id}`);
    setSingleQuery(data);
  };

  useEffect(() => {
    recommendComment();
  }, []);

  const recommendComment = async () => {
    const { data } = await axios(`https://alt-choice-server.vercel.app/recommendations/${id}`);
    setComments(data);
  };

  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8  pb-20">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight ">
            {queryTitle}
          </h1>
          <p className="font-bold text-lg sm:text-xl mt-3">
            Product name:{" "}
            <span className=" font-semibold  rounded-3xl">{productName}</span>
          </p>
          <p className="font-bold text-lg sm:text-xl mt-1">
            Product Brand:{" "}
            <span className=" font-semibold  rounded-3xl">{productBrand}</span>
          </p>
          <p className="font-bold text-lg sm:text-xl mt-3">
            Alternation Reason:{" "}
            <span className=" text-lg font-normal text-gray-800  dark:text-neutral-400">
              {boycottingReasonDetails}.
            </span>
          </p>
          <p className="font-bold text-lg sm:text-xl mt-1 ">
            Date Posted:{" "}
            <span className=" text-lg font-normal text-gray-800  dark:text-neutral-400">
              {queryUser.currentDateTime}.
            </span>
          </p>
          <p className="font-bold text-lg sm:text-xl mt-1 ">
            Recommendation:{" "}
            <span className=" text-lg font-normal text-gray-800  dark:text-neutral-400">
              {recommendationCount}
            </span>
          </p>
          <p className="font-semibold text-lg mt-3">Query created by:</p>
          <div className="mt-4 flex items-center gap-3">
            <img
              className="w-12  h-12 rounded-full"
              src={queryUser?.image}
              alt=""
            />
            <span className=" text-lg font-normal text-gray-800  dark:text-neutral-400">
              {queryUser?.email}
            </span>
          </div>
        </div>

        <div className="relative ms-4">
          <img className="w-full rounded-md" src={productImage} />
          <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>
        </div>
        {/* <!-- End Col --> */}
      </div>

      <div className="grid  gap-4 md:gap-8 xl:gap-20 mt-24 ">
        <div className="p-4 grid grid-cols-1 xl:grid-cols-2 gap-5">
          {comments.map((comment) => (
            <div key={comment._id}>
              <h3 className="font-bold text-lg mb-2">
                Recommended By: {comment?.recommenderName}
              </h3>
              <div className="flex md:h-60  bg-white rounded-lg shadow-lg dark:bg-gray-900">
                <div
                  className="w-full md:w-2/4 bg-cover bg-center "
                  style={{
                    backgroundImage: `url(${comment?.recommendedProductImage})`,
                  }}
                ></div>

                <div className="w-full md:w-2/3 p-4 md:p-4">
                  <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                    {comment?.recommendationTitle}
                  </h1>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {comment?.recommendedProductName}
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {comment?.recommendationReason}
                  </p>

                  <div className="flex justify-between mt-3 item-center">
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{comment?.currentTimeStamp}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* form  */}
        <div className="w-full lg:w-2/3 px-6 py-8 md:px-20 mx-auto  rounded-lg shadow-md ">
          <form onSubmit={handleAddRecommendation}>
            <h2 className="text-center font-semibold text-4xl py-4">
              Add A Recommendation
            </h2>
            {/* input 1 */}
            <div className="grid grid-cols-1  gap-6">
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="recommendation_title"
                >
                  Recommendation Title
                </label>
                <input
                  id="recommendation_title"
                  autoComplete="recommendation_title"
                  name="recommendation_title"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
                  type="text"
                  required
                />
              </div>

              {/* input 2 */}
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="recommended_product_name"
                >
                  recommended Product Name
                </label>
                <input
                  id="recommended_product_name"
                  autoComplete="recommended_product_name"
                  name="recommended_product_name"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
                  type="text"
                  required
                />
              </div>

              {/* input 3 */}
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="recommended_product_image"
                >
                  Recommended Product Image
                </label>
                <input
                  id="recommended_product_image"
                  autoComplete="recommended_product_image"
                  name="recommended_product_image"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
                  type="text"
                  required
                />
              </div>

              {/* input 4 */}
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="recommendation_reason"
                >
                  recommendation Reason
                </label>
                <input
                  id="recommendation_reason"
                  autoComplete="recommendation_reason"
                  name="recommendation_reason"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-green-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-green-300"
                  type="text"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 px-6 py-2 rounded-md font-semibold text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#4ADE80] border-2 border-[#4ADE80] hover:bg-[#253745] hover:border-[#253745] hover:text-white focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              {" "}
              Add Queries
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsQuery;
