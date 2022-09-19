import { React, useContext, useEffect } from "react";
import { Context } from "../../context/context";
import CollectionCard from "./collection-card";
import Grades from "./grades";
import GoBack from "../goback";

const Collection = () => {
    const { collections } = useContext(Context);

    const useWindowSize = () => {
        useEffect(() => {
            const handleWindowResize = () => {
                let width = window.innerWidth;

                let paragraphs = document.querySelectorAll(".grades p");
                Array.from(paragraphs).map((paragraph) => {
                    if (width <= 715) {
                        paragraph.textContent =
                            paragraph.getAttribute("data-grade");
                    } else {
                        paragraph.textContent =
                            paragraph.getAttribute("data-og");
                    }
                });
            };

            window.addEventListener("resize", handleWindowResize);
            handleWindowResize();
            return () =>
                window.removeEventListener("resize", handleWindowResize);
        }, []);
    };

    useWindowSize();

    return (
        <>
            <GoBack />
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
