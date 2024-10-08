import axios from "axios";
import { useEffect, useState } from "react";

function useFetchCategories(url) {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async() => {
        setLoading(true)
        try { 
            const response = await axios.get(url);
            setData(response.data.categories)
        } catch (err) {
            console.error("Error fetching data: ", err.responseData?.data || err.message );
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {data, loading, error}

}

export default useFetchCategories