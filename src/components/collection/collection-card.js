import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/collections/ga.png";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace("./", "")] = r(item);
    });
    return images;
}

const images = importAll(
    require.context("../../images/collections", false, /\.(png|jpe?g|svg)$/)
);

const CollectionCard = ({ collection }) => {
    return (
        <Link to={`/visualize/${collection.slug}`} state={collection.id}>
            <div className="collection">
                <img src={images[collection.image]} alt="collection-img" />
                <div className="info">
                    <p className="truncate">{collection.name}</p>
                </div>
            </div>
        </Link>
    );
};

export default CollectionCard;
