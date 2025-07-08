import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import CategoryMenu from '../Components/CategoryMenu';
import Cart from '../Components/Cart';
function Home({setShowPopup}) {
  const[searchText , setSearchText] = useState('');
  const [selectedCategory,setSelectedCategory] = useState('All');
    return (
        <>
          <Navbar searchText={setSearchText} setSearchText={setSearchText}/>
          <div className="main-content">

          <CategoryMenu searchText={searchText} selectedCategory={selectedCategory}/>
          </div>
        


          <Cart setShowPopup = {setShowPopup} searchText={searchText}/>
        </>
    );
}

export default Home;