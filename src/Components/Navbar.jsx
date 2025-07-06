import React, { useState ,useEffect} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../redux/Slices/SearchSlice';
import FoodCard from './FoodCard';

function Navbar() {
    const [foodData,setFoodData] =useState([]);
    const dispatch = useDispatch();
    const search = useSelector((state)=>state.search.search);
    const handleSearchChange =(e)=>{
        dispatch(setSearch(e.target.value));
    }
     useEffect(() => {
            fetch('/Database/food.json')
                .then((response) => {
    
                    return response.json();
                })
                .then((data) =>
                    setFoodData(data.FoodData))
                .catch((error) => {
                    console.error("Error fetching food Data:", error);
                });
        }, []);
    return (
        <>
        <nav className="d-flex flex-col lg:flex-row  justify-between py-3 mx-6 mb-10 ">

          <div>

            <h1 className='text-2xl font-bold'>Food App</h1>
        </div>  
        <div className='justify-between'>
            <input type="search" className=" p-2 border border-gray-400 text-sm rounded-lg outline-none  lg:w-[25vw] search-input" name="search" id="search"
             placeholder='Search here..' autoComplete='off' value={search}
            onChange={handleSearchChange}/>
            <button className=' p-1.5 ms-2 bg-primary rounded-lg btn bg-primary text-white ' >Search</button>
  
        </div>
        </nav>
        </>
    );
}

export default Navbar;