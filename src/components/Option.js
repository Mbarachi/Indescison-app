import React from "react"

function Option(props) {
        return(
            <div className="option">
                {props.optionText}
                <button 
                    className="button button--link"
                    onClick={ (e) => {
                            props.handleDeleteOption(props.optionText)
                        }}
                >
                Remove
                </button> 
            </div>
        )
    }

export default Option