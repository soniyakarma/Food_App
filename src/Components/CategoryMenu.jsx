import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
// import { selectSearchQuery } from '../redux/Slices/SearchSlice';
const CategoryMenu = ({allItems}) => {
  const handleToast = (name) => toast.success(`${name} added`);
  const [foodData, setFoodData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  useEffect(() => {
    fetch('/database/food.json')
    .then((res) => res.json())
    .then((data) => {
      console.log("✅ Loaded Data:", data.FoodData);
      setFoodData(data.FoodData);
      setFilteredData(data.FoodData);
    }).catch((err) => {
      console.error("❌ Error loading food.json:", err);
    });
  }, []);
  const search = useSelector((state)=>state.search.search.toLowerCase());
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredData(foodData);
    } else {
      const filtered = foodData.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  };
  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];
  return (<> <Toaster position="top-center"
    reverseOrder={false}
  />
    <div className='my-6 text-center justify-center'>
      <h2 className='text-xl font-semibold mb-4'>🍽 Find The Best Food</h2> <br />
      <div className='btn bg-primary text-white  flex flex-wrap gap-4 w-full sm:w-[100vw]  lg:w-[80vw] lg:items-center py-2  justify-evenly lg:mx-auto'>
        {categories.map((cat, index) => (
          <button key={cat} onClick={() => handleCategoryClick(cat)} >{cat}
          </button>))}</div> <br />
          <div className='flex justify-center'>
      <div className='grid grid-cols-2 md:grid-cols-3  sm:grid-cols-2 lg:grid-cols-4 gap-2 '>
        {filteredData.length > 0 ? (filteredData.map((food) => (
          <FoodCard key={food.id}
            id={food.id} name={food.name} price={food.price} desc={food.desc} rating={food.rating} img={food.img} handleToast={handleToast}
          />
        ))) : (<div>No item found</div>)}
         </div> 
         </div>  </div></>);
};
export default CategoryMenu;
