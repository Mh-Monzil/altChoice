import axios from "axios";
import { useEffect, useState } from "react";
import QueryCard from "./QueryCard";


const RecentQueries = () => {
    const [queryData, setQueryData] = useState([]) ;

    useEffect( () => {
        getQuery();
    },[])

    const getQuery = async () => {
        const {data} = await axios('https://alt-choice-server.vercel.app/query')
        setQueryData(data.slice(-6).reverse())
    }

    console.log(queryData);


    console.log();
    return (
        <div className="mt-24 max-w-7xl mx-auto">
            <h2 className="font-semibold text-4xl text-center">Recently Asked Queries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {
                    queryData?.map(query => (
                        <QueryCard key={query._id} query={query} />
                    ))
                }
            </div>
        </div>
    );
};

export default RecentQueries;