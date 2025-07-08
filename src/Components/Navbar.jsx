import React, { useState ,useEffect} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { CiSearch } from "react-icons/ci";
import { setSearch } from '../redux/Slices/SearchSlice';
import FoodCard from './FoodCard';

function Navbar({setSearchText}) {
    const [foodData,setFoodData] =useState([]);
    const dispatch = useDispatch();
    const search = useSelector((state)=>state.search.search);
    // const handleSearchChange =(e)=>{
    //     dispatch(setSearch(e.target.value));
    // }
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

            <h1 className='text-2xl font-bold '>FoodRush</h1> <br />
        </div>  
        <div className='justify-between'>
         
            <input type="search" className='p-2 border border-gray-400 text-sm rounded-lg outline-none lg:w-[25vw] search-input' name='search' placeholder='Search food... ' 
            onChange={(e)=>{
                setSearchText(e.target.value.toLowerCase())
            }} />
           
       
  
        </div>
        </nav>
        </>
    );
}

export default Navbar;