import React from "react";

const Grades = () => {
    return (
        <div className="container">
            <div className="grades">
                <select>
                    <option value="tc">Tronc Commun</option>
                    <option value="1bac">Premiere annee Bac</option>
                    <option value="2bac">Deuxieme annee Bac</option>
                </select>
            </div>
        </div>
    );
};

export default Grades;
