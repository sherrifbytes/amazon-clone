import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            {/* amazon logo section */}
            <Link to = "./">
                <img className="header__logo"
                src="./images/amazonlogo.png"/>
            </Link>
        
            {/* searchbar on top */}
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            {/* header nav */}
            <div className="header__nav">
                
                {/* each nav item below */}
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign In
                    </span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>

                <Link to = "./checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasket/>
                        <span className="header__optionLineTwo header__basketCount">
                            0
                        </span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
