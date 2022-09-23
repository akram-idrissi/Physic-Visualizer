import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = ({ style }) => {
    const navigate = useNavigate();

    return (
        <button
            className="go-back"
            onClick={() => navigate(-1)}
            style={style ? style : ""}
        >
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
            <span className="text">Go Back</span>
        </button>
    );
};

export default GoBack;
