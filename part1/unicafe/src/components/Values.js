import React from "react";

const Values = ({text, value}) => {
    return (
        <>
            <p className="value-name">{text}</p>
            <span className="value">{ value }</span>
        </>
    )
}

export default Values