import React from "react";
import Part from "./Part"
const Content = (props) => {

    return (
        <>
        <Part part={props.part1} exercise={props.exercises1} />
        <Part part={props.part2} exercise={props.exercises2} />
        <Part part={props.part3} exercise={props.exercises3} />
      </>
    )
}

export default Content;