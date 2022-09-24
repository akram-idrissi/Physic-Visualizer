import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <>
            <h1 className="e-404">
                This page doesn't exist &nbsp; &nbsp; <span className="go-home"><Link to="/">Go Home</Link></span>
            </h1>
        </>
    );
};

export default Error404;
