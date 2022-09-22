import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/collections/ga.png";

const CollectionCard = ({ collection }) => {
    return (
        <Link to={`/visualize/${collection.slug}`} state={collection.id}>
            <div className="collection">
                <img src={img} alt="collection-img" />
                <div className="info">
                    <p className="truncate">{collection.name}</p>
                </div>
            </div>
        </Link>
    );
};

export default CollectionCard;
