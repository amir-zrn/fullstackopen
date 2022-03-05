import React from "react";

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td className="value-name"><td>{text}</td></td>
            <td className="value">{ value }</td>
        </tr>
    )
}

export default StatisticLine