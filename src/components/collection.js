import React, { useEffect } from "react";

const Collection = () => {
    useEffect(() => {
        let ranges = document.querySelectorAll(".range");

        for (let i = 0; i < ranges.length; i++) {
            ranges[i].style.background =
                "linear-gradient(to right, #2c5bd1 0%, #2c5bd1 50%, #434b5266 50%, #434b5266 100%)";
            ranges[i].oninput = function () {
                let value =
                    ((this.value - this.min) / (this.max - this.min)) * 100;
                this.style.background = `linear-gradient(to right, #2c5bd1 0%, #2c5bd1 ${value}%, #434b5266 ${value}%, #434b5266 100%`;
            };
        }
    });

    return (
        <section className="visualization">
            <canvas id="canvas"></canvas>
            <div className="controls-container">
                <div className="input">
                    <label className="label">Gravity</label>
                    <div className="controls">
                        <input
                            className="range-value"
                            type="text"
                            defaultValue="10.0"
                        />
                        <input
                            className="range"
                            type="range"
                            min="10"
                            max="100"
                        />
                    </div>
                </div>
                <div className="input">
                    <label className="label">Air resistence</label>
                    <div className="controls">
                        <input
                            className="range-value"
                            type="text"
                            defaultValue="10.0"
                        />
                        <input
                            className="range"
                            type="range"
                            min="10"
                            max="100"
                        />
                    </div>
                </div>
                <div className="input">
                    <label className="label">Box size</label>
                    <div className="controls">
                        <input
                            className="range-value"
                            type="text"
                            defaultValue="10.0"
                        />
                        <input
                            className="range"
                            type="range"
                            min="10"
                            max="100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collection;
