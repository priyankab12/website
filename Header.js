import React from "react";
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
function Header() {
    return (
        <div className="header">
            <a href="#"><img className="header-logo" src="./images/jkk.png" alt="Sorry man" /></a>
            <ul id="navbar">
            <li><a class="active" href="index.html">HOME</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="Blog.html">Info</a></li>
            <li><a href="Contact.html">Contact</a></li>
            </ul>

        <div className="header_search">
            <input 
            className="header_search" type="text"/>
            <SearchIcon className="header_searchIcon2"/>
        </div>

        <div className="header_nav">
            <div className="header_option">
            Sign in /Register
            </div> 
            <div className="header_option">
            Wishlist
            </div> 
            <div className="header_option">
            Cart
            </div> 
            <div className="header_optionBasket">
            <ShoppingCartSharpIcon/>
            <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      

        </div>
   
        </div>
            
      
        
      
    )   
}

export default Header