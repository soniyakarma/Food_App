import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import toast, { Toaster } from 'react-hot-toast';

const CategoryMenu = ({ searchText}) => {
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
  useEffect(()=>{
    const filtered =  foodData.filter(food => food.name.toLowerCase().includes(searchText));
    setFilteredData(filtered); 
  },[searchText,foodData]);
   const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredData(foodData);
    } else {
      const filtered = foodData.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  };
  const categories = ['All', 'Burger', 'Pizza', 'Noodles','Snacks','Pasta'];

  return (<> <Toaster position="top-center"
    reverseOrder={false}
  />
    <div className='my-6 text-center justify-center '>
      <h2 className='text-4xl font-bold mb-4'>🍽 Find The Best Food</h2> <br />
       <div className='btn bg-primary text-white  overflow-x-auto flex flex-nowrap gap-4 w-full sm:w-[aut0] gap-2  lg:w-[80vw] lg:items-center py-2  justify-evenly lg:mx-auto'>
        {categories.map((cat, index) => (
          <span key={cat} onClick={() => handleCategoryClick(cat)} >{cat}
          </span>))}</div> <br />
      <div className='flex justify-center'>
        <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5   gap-3'>
          {filteredData.length > 0 ? (filteredData.map((food) => (
            <FoodCard key={food.id}
              id={food.id} name={food.name} price={food.price} desc={food.desc} rating={food.rating} img={food.img} handleToast={handleToast}
            />
          ))) : (
        
           

              <h1 className='font-bold text-xl '>Item Not Found !</h1>
      
          
          )}
        </div>
      </div>  </div></>);
};
export default CategoryMenu;
