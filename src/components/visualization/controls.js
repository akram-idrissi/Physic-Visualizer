import React from "react";

const Controls = ({ data }) => {
    return (
        <div className="input">
            <label className="label">{data.name}</label>
            <div className="controls">
                <input
                    className="range-value"
                    type="text"
                    defaultValue="10.0"
                />
                <input
                    className="range"
                    type="range"
                    min={data.min}
                    max={data.max}
                    step={data.step}
                />
            </div>
        </div>
    );
};

export default Controls;
