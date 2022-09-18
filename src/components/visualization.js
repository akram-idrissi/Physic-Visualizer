import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getItem } from "../items";
import Controls from "./controls";

const Visualization = () => {
    const location = useLocation();
    const [visualization] = useState(getItem(location.state));

    const [MyComponent, setMyComponent] = useState(() => () => null);
    useEffect(() => {
        import("../physics/" + visualization.path + ".js").then((module) => {
            setMyComponent(() => module.default);
        });
    }, [visualization]);

    return (
        <section className="visualization animation fade-center delay-0-25">
            <MyComponent />
            <div className="controls-container">
                {visualization.props.length > 0 &&
                    visualization.props.map((prop) => (
                        <Controls key={prop.id} data={prop} />
                    ))}
            </div>
        </section>
    );
};

export default Visualization;
