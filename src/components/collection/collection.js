import { React, useContext, useEffect } from "react";
import { Context } from "../../context/context";
import CollectionCard from "./collection-card";
import GoBack from "../goback";
import Grades from "./grades";

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
                {collections.length > 0 ? (
                    collections.map((collection) => (
                        <CollectionCard
                            key={collection.id}
                            collection={collection}
                        />
                    ))
                ) : (
                    <p className="sorry-msg">
                        There is no collection here yet, please come back later
                        for new updates !
                    </p>
                )}
            </div>
        </>
    );
};

export default Collection;
