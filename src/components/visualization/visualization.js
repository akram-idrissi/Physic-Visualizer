import { React, useEffect, useState, useRef, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { getItem } from "../../items";
import GoBack from "../goback";

const Visualization = () => {
    const location = useLocation();
    const [visualization] = useState(getItem(location.state));
    const [state, setState] = useState(visualization.controls);

    const main = useRef(
        lazy(() => import(`../../physics/${visualization.path}.js`))
    );

    useEffect(() => {
        let ranges = document.querySelectorAll(".range");
        Array.from(ranges).map((range, i) => {
            let percentage =
                visualization.props[i].min == visualization.controls[i]
                    ? 0
                    : 100 /
                      (visualization.props[i].max / visualization.controls[i]);
            range.style.background = `linear-gradient(to right, #2c5bd1 0%, #2c5bd1 ${percentage}%, #434b5266 ${percentage}%, #434b5266 100%)`;

            range.oninput = () => {
                let value =
                    ((range.value - range.min) / (range.max - range.min)) * 100;
                range.style.background = `linear-gradient(to right, #2c5bd1 0%, #2c5bd1 ${value}%, #434b5266 ${value}%, #434b5266 100%`;
            };
        });
    }, []);

    const onRangeChange = (event) => {
        let controls = {};
        const parent = event.target.parentNode;
        const inputsRange = document.querySelectorAll(".input");
        Array.from(inputsRange).map((input, i) => {
            controls[i] = input.querySelector(".range").value;
        });
        parent.querySelector(".range-value").value = event.target.value;
        setState(controls);
    };

    return (
        <>
            <div className="back-header">
                <GoBack style={{}} />
                <h1 className="visualization-name">{visualization.name}</h1>
            </div>
            <section className="visualization">
                <Suspense>
                    <main.current state={state} />
                </Suspense>
                <div className="controls-container">
                    {visualization.props.length > 0 &&
                        visualization.props.map((prop, i) => (
                            <div key={i} className="input">
                                <label className="label">{prop.name}</label>
                                <div className="controls">
                                    <input
                                        defaultValue={visualization.controls[i]}
                                        className="range-value"
                                        type="text"
                                    />
                                    <input
                                        defaultValue={visualization.controls[i]}
                                        type="range"
                                        min={prop.min}
                                        max={prop.max}
                                        step={prop.step}
                                        className="range"
                                        onChange={onRangeChange}
                                    />
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
};

export default Visualization;
