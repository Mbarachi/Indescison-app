import React from "react"
import Option from "./Option"

function Options(props) {
        return(
            <div>
                <button onClick={props.handleDelete}>Remove all</button>
                { 
                    props.options.map(
                        option =>  
                            <Option key={option} 
                            optionText = {option}
                            handleDeleteOption = {props.handleDeleteOption}
                        />)

                }
            </div>
        )
   
}

export default Options