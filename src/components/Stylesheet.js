import { buildQueries } from "@testing-library/react";
import React from "react";
import './Styles.css'

const abc={
    color: 'red'
    
}


function Stylesheet(props) {

    let className=props.random ? 'random': '';

    return(
        <div>
            <h1 className={`${className} font`}>Stylesheets</h1>
            <p style={abc}>Inline css</p>
        </div>
    )
}
export default Stylesheet