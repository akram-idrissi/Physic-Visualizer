import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getItem } from "../items";
import Controls from "./controls";

const Visualization = () => {
    const location = useLocation();
    const [visualization] = useState(getItem(location.state));

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

    const [MyComponent, setMyComponent] = useState(() => () => null);
    useEffect(() => {
        import("../physics/" + visualization.path + ".js").then((module) => {
            setMyComponent(() => module.default);
        });
    }, [visualization]);

    return (
        <>
            <h1 className="visualization-name">{visualization.name}</h1>
            <section className="visualization animation fade-center delay-0-25">
                <MyComponent />
                <div className="controls-container">
                    {visualization.props.length > 0 &&
                        visualization.props.map((prop) => (
                            <Controls key={prop.id} data={prop} />
                        ))}
                </div>
            </section>
        </>
    );
};

export default Visualization;
