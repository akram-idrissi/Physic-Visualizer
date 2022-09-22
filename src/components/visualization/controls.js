import { React } from "react";

const Controls = ({ visualization }) => {

    



    const setRangeOutput = (event) => {
        const parent = event.target.parentNode;
        parent.querySelector(".range-value").value =
            parent.querySelector(".range").value;
    };

    return (
        <>
            {visualization.props.length > 0 &&
                visualization.props.map((prop, i) => (
                    <div key={i} className="input">
                        <label className="label">{prop.name}</label>
                        <div className="controls">
                            <input className="range-value" type="text" />
                            <input
                                data-index={i}
                                className="range"
                                type="range"
                                min={prop.min}
                                max={prop.max}
                                step={prop.step}
                            />
                        </div>
                    </div>
                ))}
        </>
    );
};

export default Controls;
