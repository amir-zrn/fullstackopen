import React from "react";
import Part from "./Part"
const Content = (props) => {

    return (
        <>
        <Part part={props.part[0].name} exercise={props.part[0].exercises} />
        <Part part={props.part[1].name} exercise={props.part[1].exercises} />
        <Part part={props.part[2].name} exercise={props.part[2].exercises} />
      </>
    )
}

export default Content;