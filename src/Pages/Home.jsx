import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import CategoryMenu from '../Components/CategoryMenu';

import Cart from '../Components/Cart';
function Home({setShowPopup}) {
  const[searchText , setSearchText] = useState("");
    return (
        <>
          <Navbar searchText={setSearchText} setSearchText={setSearchText}/>
          <CategoryMenu/>
        
          <Cart setShowPopup = {setShowPopup} searchText={searchText}/>
        </>
    );
}

export default Home;