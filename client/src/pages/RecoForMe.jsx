import { useEffect, useState } from "react";
import UseAuth from "../hooks/useAuth";


const RecoForMe = () => {
  const {user} = UseAuth();
    const [recoForMe, setRecoForMe] = useState([]);

    useEffect(() => {
      fetch(`https://alt-choice-server.vercel.app/recommendations/query-user/${user?.email}`, {credentials: 'include'})
      .then(res => res.json())
      .then(data => {
          console.log(data);
          setRecoForMe(data)
      })
  }, [])

    return (
        <div className="max-w-7xl mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase dark:text-neutral-900 text-center"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-900"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-900"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {
                    recoForMe.map(reco => <tr key={reco._id} className="hover:bg-gray-100 dark:hover:bg-neutral-300">
                    <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-600">
                      {reco?.recommenderName}
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-600">
                      {reco?.recommenderEmail}
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-600">
                    {reco?.productName}
                    </td>
                    <td className="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-600">
                    {reco?.currentTimeStamp}
                    </td>
                  </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default RecoForMe;