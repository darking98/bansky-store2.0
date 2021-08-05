import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {VscAccount} from 'react-icons/vsc'
import CartMenu from './CartMenu'
import { Link } from 'react-router-dom'

const NavBar = ({openMenu, setOpenMenu}) => {

    return (
        <header>
            <nav>
                <div className="nav-items">
                    <ul className="nav-items-ul ">
                        <li><Link to='/category/buzo'>Buzos</Link></li>
                        <li><Link to='/category/campera'>Camperas</Link></li>
                        <li><Link to ="/category/pantalon">Pantalones</Link></li>
                        <li><Link to="/category/zapatilla">Zapatillas</Link></li>
                        <li><Link to ="/category/remera">Remeras</Link></li>
                        <li><Link to={'/products'}>New Arraivals</Link></li>
                    </ul>
                </div>

                    <div className="nav-logo">
                        <img src="https://darking98.github.io/banskyStore/img/logo.png" alt="" width="100px"/>
                    </div>
                    <div className="nav-items">
                        <ul className="nav-items-ul ">
                            <li><Link to={'/products'}>Stores</Link></li>
                            <li><Link to={'/products'}>Social</Link></li>
                        </ul>
                    </div>
                   
                    <div className="nav-items-icons">
                        <VscAccount/>
                        <CartMenu openMenu={openMenu} setOpenMenu ={setOpenMenu}>
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
