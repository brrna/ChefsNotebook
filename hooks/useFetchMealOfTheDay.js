import { async } from "@babel/runtime/regenerator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

function useFetchMealOfTheDay(data) {

    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const fetchMealOfTheDay = async () => {
            const today = new Date().toISOString().split('T')[0];

            const storedMeal = await AsyncStorage.getItem('mealOfTheDay');
            const storedDate = await AsyncStorage.getItem('mealDate');

            if (storedMeal && storedDate === today) {
                setMeal(JSON.parse(storedMeal));
            } else {
                if (data && data.length > 0) {
                    const fetchedMeal = data[0]
                    setMeal(fetchedMeal);
                    await AsyncStorage.setItem('mealOfTheDay', JSON.stringify(fetchedMeal))
                    await AsyncStorage.setItem('mealDate', today);
                }
            }
        };
        fetchMealOfTheDay();
    }, [data]);
    return meal;
}

export default useFetchMealOfTheDay;