import React,{useState} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {VscAccount} from 'react-icons/vsc'
import CartMenu from './CartMenu'

const NavBar = ({}) => {
  const [openMenu, setOpenMenu] = useState(false);

    return (
        <header>
            <nav>
                
                <div className="nav-items">
                    <ul className="nav-items-ul ">
                        <li>Men</li>
                        <li>Women</li>
                        <li>New Arraivals</li>
                    </ul>
                </div>

                    <div className="nav-logo">
                        <img src="https://darking98.github.io/banskyStore/img/logo.png" alt="" width="100px"/>
                    </div>
                    <div className="nav-items">
                        <ul className="nav-items-ul ">
                            <li>Stores</li>
                            <li>Social</li>
                        </ul>
                    </div>
                   
                    <div className="nav-items-icons">
                        <VscAccount/>
                        <CartMenu openMenu={openMenu}>
                            <FaShoppingCart
                                onClick={() => setOpenMenu(!openMenu)}
                            />
                        </CartMenu>
                    </div>


                
                
            </nav>
        </header>
    )
}

export default NavBar
