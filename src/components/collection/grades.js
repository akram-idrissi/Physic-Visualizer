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
                    data-grade="all"
                    className={selectedGrade === "all" ? "active" : ""}
                    onClick={handleSelectedGradeClick}
                >
                    All
                </p>
                <p
                    data-grade="tc"
                    className={selectedGrade === "tc" ? "active" : ""}
                    onClick={handleSelectedGradeClick}
                >
                    Common Core
                </p>

                <p
                    data-grade="1bac"
                    className={selectedGrade === "1bac" ? "active" : ""}
                    onClick={handleSelectedGradeClick}
                >
                    First Year Baccalaureat
                </p>

                <p
                    data-grade="2bac"
                    className={selectedGrade === "2bac" ? "active" : ""}
                    onClick={handleSelectedGradeClick}
                >
                    Second Year Baccalaureat
                </p>
            </div>
        </>
    );
};

export default Grades;
