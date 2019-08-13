import React from "react"

function AddOption(props) {
        return(
            <div>
                <form onSubmit={props.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }


export default AddOption