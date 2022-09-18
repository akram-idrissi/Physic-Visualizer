import { React, useEffect, useContext } from "react";
import { Context } from "../../context/context";
import CollectionCard from "./collection-card";
import Grades from "./grades";

const Collection = () => {
    const { collections } = useContext(Context);

    useEffect(() => {
        let ranges = document.querySelectorAll(".range");

        for (let i = 0; i < ranges.length; i++) {
            ranges[i].style.background =
                "linear-gradient(to right, #2c5bd1 0%, #2c5bd1 50%, #434b5266 50%, #434b5266 100%)";
            ranges[i].oninput = function () {
                let value =
                    ((this.value - this.min) / (this.max - this.min)) * 100;
                this.style.background = `linear-gradient(to right, #2c5bd1 0%, #2c5bd1 ${value}%, #434b5266 ${value}%, #434b5266 100%`;
            };
        }
    });

    return (
        <>
            <Grades />
            <div className="collections">
                {collections.map((collection) => (
                    <CollectionCard
                        key={collection.id}
                        collection={collection}
                    />
                ))}
            </div>
        </>
    );
};

export default Collection;
