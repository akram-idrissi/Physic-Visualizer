import { React, useEffect, useState, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { getItem } from "../../items";
import Controls from "./controls";
import Modal from "./modal";
import GoBack from "../goback";

const Visualization = () => {
    const location = useLocation();
    const [visualization] = useState(getItem(location.state));

    const Main = lazy(() => import(`../../physics/${visualization.path}.js`));

    useEffect(() => {
        let ranges = document.querySelectorAll(".range");
        Array.from(ranges).map((range) => {
            range.style.background =
                "linear-gradient(to right, #2c5bd1 0%, #2c5bd1 50%, #434b5266 50%, #434b5266 100%)";

            range.oninput = () => {
                let value =
                    ((range.value - range.min) / (range.max - range.min)) * 100;
                range.style.background = `linear-gradient(to right, #2c5bd1 0%, #2c5bd1 ${value}%, #434b5266 ${value}%, #434b5266 100%`;
            };
        });
    }, []);

    const handleSettingsClick = () => {
        let modal = document.getElementById("modal");
        modal.style.visibility = "visible";
    };

    return (
        <>
            <div className="back-header">
                <GoBack />
                <h1 className="visualization-name">{visualization.name}</h1>
            </div>
            <section className="visualization">
                <Suspense>
                    <Main />
                </Suspense>

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
