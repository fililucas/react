import React from "react";

const ClickTracker = () => {
    const triggerAlert = (msg) => {
        alert(msg);
    };

    return (
        <h1 onClick={(e) => triggerAlert("Hola", e)} id="title">
            Click
        </h1>
    )
}

export default ClickTracker;