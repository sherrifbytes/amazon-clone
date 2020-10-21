import React from 'react';
import './styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            {/* amazon logo section */}
            <img className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        
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

                <div className="header__optionBasket">
                    <ShoppingBasket/>
                    <span className="header__optionLineTwo header__basketCount">
                        0
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Header
