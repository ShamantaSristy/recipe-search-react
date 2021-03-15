import React, { useEffect, useState } from 'react';

const MealDetails = () => {
    const [meal, setMeal] = useState();
    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
        .then(response => response.json())
        .then(data => setMeal(data?.meals?.[0]))
    },[])
    return (
        <div>
            <h1>This is meal details</h1>
            <h4>Name: {meal?.strMeal}</h4>
        </div>
    );
};

export default MealDetails;