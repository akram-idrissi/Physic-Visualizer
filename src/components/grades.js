import React from "react";

const Grades = () => {
    return (
        <div className="container">
            <div className="grades">
                <select>
                    <option value="tc">Tronc Commun</option>
                    <option value="1bac">1 Bac</option>
                    <option value="2bac">2 Bac</option>
                </select>
            </div>
        </div>
    );
};

export default Grades;
