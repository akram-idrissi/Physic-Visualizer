import React from "react";
import { Link } from "react-router-dom";

const ToHome = () => {
    return (
        <Link to="/">
            <button className="to-home">
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                </span>
                <span>Go Home</span>
            </button>
        </Link>
    );
};

export default ToHome;
