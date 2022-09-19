import { React, useContext } from "react";
import { Context } from "../../context/context";

const Grades = () => {
    const { selectedGrade, handleSelectedGradeClick } = useContext(Context);

    return (
        <>
            <p className="grades-text">
                simulations are sorted by grade. select your grade and see all
                the available simulations.
            </p>
            <div className="grades">
                <p
                    data-grade="All"
                    data-og="All"
                    className={selectedGrade === "All" ? "active" : ""}
                    onClick={handleSelectedGradeClick}
                >
                    All
                </p>
                <p
                    data-grade="C-Core"
                    data-og="Common Core"
                    className={selectedGrade === "C-Core" ? "active" : ""}
                    onClick={handleSelectedGradeClick}
                >
                    Common Core
                </p>

                <p
                    data-grade="1-Bac"
                    data-og="First Year Baccalaureat"
                    className={selectedGrade === "1-Bac" ? "active" : ""}
                    onClick={handleSelectedGradeClick}
                >
                    First Year Baccalaureat
                </p>

                <p
                    data-grade="2-Bac"
                    data-og="Second Year Baccalaureat"
                    className={selectedGrade === "2-Bac" ? "active" : ""}
                    onClick={handleSelectedGradeClick}
                >
                    Second Year Baccalaureat
                </p>
            </div>
        </>
    );
};

export default Grades;
