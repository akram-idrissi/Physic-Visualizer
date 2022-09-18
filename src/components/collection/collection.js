import { React, useContext } from "react";
import { Context } from "../../context/context";
import CollectionCard from "./collection-card";
import Grades from "./grades";

const Collection = () => {
    const { collections } = useContext(Context);

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
