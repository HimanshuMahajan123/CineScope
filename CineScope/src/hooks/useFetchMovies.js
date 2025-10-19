import { useState, useEffect } from "react";
import React from 'react'

function useFetchmovies(url) {
  
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {

        if(!url){
            return;
        }

        setLoading(true)
        setError(null)

        fetch(url)
            .then((res) => {
                if(!res.ok){
                    throw new Error("failed to fetch data!")
                }
                return res.json();
            })
            .then((res) => {
                console.log(res.results)
                setData(res.results || res)
            })
            .catch((err) => {
                console.error("Error fetching data: ", err)
                setError(err.message)
            })
            .finally(() => setLoading(false))
    } , [url]);

    return {data , loading , error };
}

export default useFetchmovies
