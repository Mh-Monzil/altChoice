

const Testimonial = () => {
    return (
        
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-24">
  <h2 className='font-semibold text-4xl text-center'>Testimonial</h2>
  <p className="text-center font-medium py-6">Explore diverse product alternatives, discover eco-friendly options, and make informed choices. Your go-to destination for conscious consumerism.</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
      <div className="flex-auto p-4 md:p-6">

        <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white"><em>
        "Innovative platform that efficiently presents alternative products. Great for informed, conscious consumer decisions. Highly recommended!"
        </em></p>
      </div>

      <div className="p-4 rounded-b-xl md:px-6">
        <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
          Nicole Grazioso
        </h3>
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          Director Payments & Risk | HubSpot
        </p>
      </div>
    </div>
    

    
    <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
      <div className="flex-auto p-4 md:p-6">

        <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white"><em>
          "User-friendly website with insightful product alternatives. Makes eco-conscious shopping a breeze. A must-visit!"
        </em></p>
      </div>

      <div className="p-4 rounded-b-xl md:px-6">
        <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
          Josh Tyson
        </h3>
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          Product Manager | Capsule
        </p>
      </div>
    </div>
    

    
    <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
      <div className="flex-auto p-4 md:p-6">

        <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white"><em>
          "Engaging and informative! Offers valuable product alternatives and detailed comparisons. Perfect for thoughtful shoppers."
        </em></p>
      </div>

      <div className="p-4 rounded-b-xl md:px-6">
        <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
          Luisa
        </h3>
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          Senior Director of Operations | Fitbit
        </p>
      </div>
    </div>
    
  </div>
  
</div>

    );
};

export default Testimonial;