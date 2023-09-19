import React from 'react';
import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main class="holder contacto">
        <div>
            <h2>Contacto Rápido</h2>
            <form action="" method="" class="formulario">
                <p><label for="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre"/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email"/>
                </p>
                <p>
                    <label for="telefono">Teléfono</label>
                    <input type="text" name="telefono" id="telefono"/>
                </p>
                <p><label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
                </p>
                <p className='acciones'>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>
        <div className="datos">
            <h2>Otras vías de comunicación</h2>
            <p>También puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Teléfono: 43242388</li>
                <li>Email: contacto@transportesx.com.ar</li>
                <li>Facebook: transportesX</li>
                <li>Twitter: @transportesX</li>
                <li>skype: transportes_x</li>
            </ul>
        </div>
    </main>
    );
}

export default ContactoPage;