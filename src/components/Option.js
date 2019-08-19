import React from "react"

function Option(props) {
        return(
            <div>
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