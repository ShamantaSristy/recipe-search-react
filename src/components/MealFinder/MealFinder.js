import React, { useEffect, useState } from 'react';

const MealFinder = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);
    const handleChange = event => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }
    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(response => response.json())
        .then(data => setMeals(data?.meals))
    },[search])
    return (
        <div>
            <h3>I will help you find your meal</h3>
            <input type="text" onChange={handleChange} placeholder="search recipes"/>
            <br/>
            <small>searching : {search}</small>
            <p>meal found: {meals?.length || 0}</p>
            <ul>
               {
                   meals?.map(meal => <li>{meal.strMeal}</li>)
               } 
            </ul>
        </div>
    );
};

export default MealFinder;