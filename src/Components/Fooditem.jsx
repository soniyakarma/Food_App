import React, { useEffect, useState } from 'react'; import FoodCard from './FoodCard';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const FoodItem = ({ foodData }) => {
    const searchTerm = useSelector((state) => state.search.search);
    const { category } = useSelector((state) => state.category);
    const handleToast = (name) => toast.success(`${name} added`);
    const [foodData, setFoodData] = useState([]);
    useEffect(() => {
        fetch('/Database/food.json')
            .then((response) => {
                return response.json();
            }).then((data) =>
                setFoodData(data.FoodData))
            .catch((error) => {
                console.error("Error fetching food Data:", error);  });
    }, []);
    const filteredData = foodData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (<>  <Toaster
            position="top-center"
            reverseOrder={false} />
        <div className='flex flex-wrap gap-10 justify-center lg:justify-center mx-6 my-10 '>
            {filteredData.length > 0 ? (filteredData.map((item) => (
                <FoodCard key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    desc={food.desc}
                    rating={food.rating}
                    img={food.img}
                    handleToast={handleToast} />))
            ) : (
                <P> Item Not found.</P>
            )}  </div></>); };
export default FoodItem;