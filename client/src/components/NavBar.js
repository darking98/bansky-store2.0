import React,{useState} from 'react'
import {RiShoppingCart2Line} from 'react-icons/ri'
import {VscAccount} from 'react-icons/vsc'
import CartMenu from './CartMenu'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [openMenu,setOpenMenu] = useState(false);
    return (
        <header>
            <nav>
                <div className="nav-items">
                    <ul className="nav-items-ul ">
                        <li><Link to='/category/buzos'>Buzos</Link></li>
                        <li><Link to='/category/camperas'>Camperas</Link></li>
                        <li><Link to ="/category/pantalones">Pantalones</Link></li>
                        <li><Link to="/category/zapatillas">Zapatillas</Link></li>
                        <li><Link to ="/category/remeras">Remeras</Link></li>
                        <li><Link to={'/products'}>New Arraivals</Link></li>
                    </ul>
                </div>

                    <div className="nav-logo">
                        <Link to="/"><img src="https://darking98.github.io/banskyStore/img/logo.png" alt="" width="100px"/></Link>
                    </div>
                    <div className="nav-items">
                        <ul className="nav-items-ul ">
                            <li><Link to={'/products'}>Stores</Link></li>
                            <li><Link to={'/products'}>Social</Link></li>
                        </ul>
                    </div>
                   
                    <div className="nav-items-icons">
                        <VscAccount/>
                        <CartMenu openMenu={openMenu} setOpenMenu={setOpenMenu}>
                            <RiShoppingCart2Line
                                onClick={() => setOpenMenu(!openMenu)}
                            />
                        </CartMenu>
                    </div>


                
                
            </nav>
        </header>
    )
}

export default NavBar
