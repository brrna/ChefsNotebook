import axios from "axios";
import { useEffect, useState } from "react";

function useFetchCategories(url) {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        setLoading(true)
        try { 
            const {data: responseData} = await axios.get(url);
            setData(responseData.meals)
        } catch (err) {
            console.error("Error fetching data:", err.responseData?.data || err.message );
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {data, loading, error}

}

export default useFetchCategories