import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="newsletter">
        <label for="email">Recibí descuentos y ofertas exclusivas!</label>
        <input type="text" id="email" placeholder="Email" />
        <button type="button">Enviar</button>
      </div>
      <div class="footer-help">
            <h3>Ayuda</h3>
            <a href="">
                <p>54-9115577-7894</p>
            </a>
            <a href="">
                <p>help@bansky.com</p>
            </a>
            <a href="">
                <p>Cambios o Devoluciones</p>
            </a>
            <a href="">
                <p>FAQ/Contact Us</p>
            </a>
        </div>
        <div class="footer-shop">
            <h3>Shop</h3>
            <a href="">
                <p>Ropa de Hombres</p>
            </a>
            <a href="">
                <p>Ropa de Mujeres</p>
            </a>
            <a href="">
                <p>Vintage</p>
            </a>
            <a href="">
                <p>Zapatillas</p>
            </a>
            <a href="">
                <p>Descuentos</p>
            </a>
        </div>
        <div class="footer-social">
            <h3>Redes sociales</h3>
            <p>Seguinos para ofertas exclusivas y descuentos todas las semanas!</p>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-twitter"></i></a>
            <a href=""><i class="fab fa-pinterest"></i></a>
        </div>
        <div class="footer-company">
            <h3>Nosotros</h3>
            <a href="">
                <p>Nuestras Tiendas</p>
            </a>
            <a href="">
                <p>Patrocinadores</p>
            </a>
            <a href="">
                <p>Nuestra historia</p>
            </a>
            <a href="">
                <p>Trabajá con nosotros</p>
            </a>
        </div>

        <div class="footer-logo">
            <a href="index.html"><img src="https://darking98.github.io/banskyStore/img/logo-blanco.png" alt="Logo blanco de Bansky"/></a>
        </div>

        <div class="footer-copyright">
            <p>© 2021 Bansky. Todos los derechos reservados.</p>
        </div>
    </footer>
  );
};

export default Footer;
