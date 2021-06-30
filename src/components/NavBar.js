import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {IoIosArrowDown,IoIosArrowForward} from 'react-icons/io'

const NavBar = () => {
    return (
        <header>
            <nav>
                <div className="nav-logo">
                    <img src="https://res.cloudinary.com/hdsqazxtw/image/upload/f_auto/v1579032128/coder-logo-white_t41xzb.png" alt="" width="180px"/>
                </div>
                <div className="nav-items">
                    <ul className="nav-items-ul">
                        <li>
                            Cursos <IoIosArrowDown/>
                            <ul className="nav-sub-items-ul">
                                <li>Diseño UX/UI <IoIosArrowForward/></li>
                                <li>Marketing Digital <IoIosArrowForward/></li>
                                <li>Programación <IoIosArrowForward/></li>
                                <li>Producto <IoIosArrowForward/></li>
                                <li>Data <IoIosArrowForward/></li>
                                <li>Herramientas <IoIosArrowForward/></li>
                            </ul>
                        </li>
                        <li>
                            Carreras <IoIosArrowDown/>
                            <ul className="nav-sub-items-ul">
                                <li>Carrera de Marketing Digital</li>
                                <li>Carrera de Desarrollo Front End</li>
                                <li>Carrera de Producto</li>
                                <li>Carrera de Diseño UX/UI</li>
                                <li>Carrera de Desarrollo Full Stack</li>
                                <li>Carrera de Desarrollo UX/UI</li>
                                <li>Carrera de Data Scientist</li>
                                <li>Carrera de Diseño UX Writing</li>
                                <li>Carrera de Diseño UX Research</li>
                            </ul>
                        </li>
                        <li>Lanzamientos</li>
                        <li>
                            Comunidad <IoIosArrowDown/>
                            <ul className="nav-sub-items-ul">
                                <li>Webinars</li>
                                <li>Recursos</li>
                                <li>Alumnos</li>
                                <li>Equipo</li>
                            </ul>
                        </li>
                        <li>Nosotros</li>
                    </ul>
                </div>
                <div className="nav-cart">
                    <FaShoppingCart/>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
