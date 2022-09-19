import React from "react";
import Controls from "./controls";

const Modal = ({ visualization }) => {
    return (
        <div id="modal" className="modal">
            {visualization.props.length > 0 &&
                visualization.props.map((prop) => (
                    <Controls key={prop.id} data={prop} />
                ))}
        </div>
    );
};

export default Modal;
