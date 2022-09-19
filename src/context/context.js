import { React, useState, createContext, useEffect } from "react";
import { getItems, getItemByGrade } from "../items";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [selectedGrade, setSelectedGrade] = useState("All");
    const [collections, setCollections] = useState(
        getItemByGrade(selectedGrade)
    );

    useEffect(() => {
        switch (selectedGrade) {
            case "All":
                setCollections(getItems());
                break;

            case "C-Core":
                setCollections(getItemByGrade("C-Core"));
                break;

            case "1-Bac":
                setCollections(getItemByGrade("1-Bac"));
                break;

            case "2-Bac":
                setCollections(getItemByGrade("2-Bac"));
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
