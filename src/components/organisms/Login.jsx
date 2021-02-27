import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="Login">
            <div className="Login__Contain">
                <button className="Button-Outline Title-3-bold">
                    <i className="fab fa-facebook-f"></i>
                    Facebook
                </button>
                <button className="Button-Outline Title-3-bold">
                    <i className="fab fa-google"></i>
                    Google
                </button>
                <div className="Login__Break">
                    <hr/>
                    <p className="Title-3-bold">o</p>
                </div>
                <form className="Login__Form">
                    <input type="email" className="Input Title-3" placeholder="Correo electrónico"/>
                    <input type="password" className="Input Title-3" placeholder="Contraseña"/>
                    <input type="submit" className="Button-Primary Title-3-bold" value="Iniciar Sesión"/>
                </form>
                <div className="Login__Remember">
                    <Link to="/recuperar-contrasenia">
                        <p className="Paragraph">¿Olvidaste tu Contraseña?</p>
                    </Link>
                </div>
            </div>
            <div className="Login__Footer">
                <p className="Title-3-bold">¿Aún no tienes cuenta?</p>
                <Link to="/registro">
                    <button className="Button-Outline Title-3-bold">Regístrate</button>
                </Link>
            </div>
        </div>
    )
}

export default Login