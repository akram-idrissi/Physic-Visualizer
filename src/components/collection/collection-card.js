import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/orbit.svg";

const CollectionCard = ({ collection }) => {
    return (
        <div className="collection">
            <img src={img} alt="" />
            <div className="info">
                <p className="truncate">
                    {collection.grade} - {collection.name}
                </p>
                <Link
                    to={`/visualize/${collection.name}`}
                    state={collection.id}
                >
                    <button>
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
                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                            />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CollectionCard;
