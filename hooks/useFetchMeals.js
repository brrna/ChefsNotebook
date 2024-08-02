import axios from "axios";
import { useEffect, useState } from "react";

function useFetchMeals(url) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async() => {
        setLoading(true)
        try {
            const response = await axios.get(url);
            setData(response.data.meals)
        } catch (err) {
            console.error("Error fetching data:", err.responseData?.data || err.message )
            setError(err)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return {data, loading, error} 

}

export default useFetchMeals;