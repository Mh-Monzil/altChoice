import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Queries = () => {
  const query = useLoaderData();
  const [allQuery, setAllQuery] = useState(query);
  // console.log(query);
  console.log(allQuery);
  const [layout, setLayout] = useState(true);

  if(layout){
    console.log(true);
  }else{
    console.log(false);
  }

  const toggleLayout = (value) => {
    if(value === "grid-1"){
      setLayout(" sm:grid-cols-2 lg:grid-cols-3")
    }else{
      setLayout(" sm:grid-cols-1 lg:grid-cols-2")
    }
  }

  useEffect(() => {
    setAllQuery(
      [...allQuery].sort(
        (a, b) =>
          new Date(b.queryUser.currentDateTime) -
          new Date(a.queryUser.currentDateTime)
      )
    );
  }, []);

  console.log(allQuery);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="font-semibold text-4xl text-center">All query</h2>
      <div className="text-gray-800 dark:text-white font-semibold flex justify-end items-center gap-6 mt-12 px-6">
        <button onClick={() => toggleLayout("grid-1")} className="bg-green-400/20 text-green-500 py-2 px-4 rounded-lg border border-green-400">layout-1</button>
        <button onClick={() => toggleLayout("grid-2")} className="bg-green-400/20 text-green-500 py-2 px-4 rounded-lg border border-green-400">layout-2</button>
        
      </div>
      <div className={`${layout} grid grid-cols-1  gap-8 mt-16 `}>
        {allQuery.map((query) => (
          <div
            key={query._id}
            className="max-w-96 mx-auto flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
          >
            <div className="p-3 text-gray-800 dark:text-white flex items-center gap-4">
              <div>
                <img
                  className="w-12  h-12 rounded-full"
                  src={query?.queryUser?.image}
                  alt=""
                />
              </div>
              <div>
                <p className="text-lg">{query?.queryUser?.name}</p>
                <span className="text-[12px]">
                  {query?.queryUser?.currentDateTime}
                </span>
              </div>
            </div>
            <div className="relative">
              <img className="w-full h-80 " src={query?.productImage} />
              <p className="absolute right-2 bottom-2 text-white bg-[#253745] py-[2px] px-2 rounded-md text-sm font-thin">
                recommendation: {query?.recommendationCount}
              </p>
            </div>
            <div className="flex flex-col flex-1">
              <div className="p-4 md:p-5 flex-1">
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
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                  {query?.boycottingReasonDetails}
                </p>
                <p className="pt-1 font-medium text-sm text-gray-800 dark:text-white">
                  <span className="font-semibold text-base">Posted On :</span>{" "}
                  {query?.queryUser?.currentDateTime}
                </p>
              </div>

              <div className="flex px-4 pb-4 text-center">
                <Link to={`/view-details/${query._id}`} className="w-full text-white font-medium py-2 px-3 rounded-md bg-[#253745] hover:bg-green-400 hover:text-black transition-all duration-300">
                  Recommend
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queries;
