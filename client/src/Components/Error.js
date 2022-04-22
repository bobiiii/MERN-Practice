import React from 'react'
import {Link} from "react-router-dom"
import "./Css/Error.css"
const Error = () => {
    return (<>
    <div className="error-main">
        <h2>404 Error : Page Not Found </h2>
        <Link to="/">Go Back to homepage</Link>

    </div>
    </>)
}

export default Error
