import { React, useState, createContext, useEffect } from "react";
import { getItems, getItemByGrade } from "../items";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [selectedGrade, setSelectedGrade] = useState("all");
    const [collections, setCollections] = useState(
        getItemByGrade(selectedGrade)
    );

    useEffect(() => {
        switch (selectedGrade) {
            case "all":
                setCollections(getItems());
                break;

            case "tc":
                setCollections(getItemByGrade("tc"));
                break;

            case "1bac":
                setCollections(getItemByGrade("1bac"));
                break;

            case "2bac":
                setCollections(getItemByGrade("2bac"));
                break;

            default:
                console.log("no handle for this");
                break;
        }
    }, [selectedGrade]);

    const handleSelectedGradeClick = (event) => {
        setSelectedGrade(event.target.getAttribute("data-grade"));
    };

    return (
        <Context.Provider
            value={{
                collections,
                setCollections,
                selectedGrade,
                setSelectedGrade,
                handleSelectedGradeClick,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };
