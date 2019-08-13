import React from "react"

function Action (props) {
    return(
            <div>
                <button onClick = {props.handlePick}>What should I do?</button>
            </div>
        )
}

export default Action