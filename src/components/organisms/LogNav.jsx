import React from 'react'
import {Link} from 'react-router-dom'

const LogNav = () => {
    return (
        <div className="LogNav l-container">
            <div className="l-contain">
                <Link to="/">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/computer-store-a1f8e.appspot.com/o/assets%2Flogo.png?alt=media&token=9c70f14d-9f5f-437e-9f6f-8efaaf66c892"
                        alt="Logo Computer Store"
                    />
                </Link>
            </div>
        </div>
    )
}

export default LogNav