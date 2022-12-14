import { React, useState, createContext, useEffect } from "react";
import { getItems, getItemByGrade } from "../items";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [sketch, setSketch] = useState(null);
    const [controls, setControls] = useState({});
    const [selectedGrade, setSelectedGrade] = useState(
        localStorage.getItem("grade") || "All"
    );
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
        let grade = event.target.getAttribute("data-grade");
        localStorage.setItem("grade", grade);
        setSelectedGrade(grade);
    };

    return (
        <Context.Provider
            value={{
                collections,
                setCollections,
                selectedGrade,
                setSelectedGrade,
                handleSelectedGradeClick,
                controls,
                setControls,
                sketch,
                setSketch,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };
