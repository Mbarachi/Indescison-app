import React from "react"
import Option from "./Option"

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-title">Your Options</h3>
                <button 
                    className="button button--link"
                    onClick={props.handleDelete}
                    >
                        Remove all
                </button>
            </div>
            
            {props.options.length === 0 && <p className="message">Please Enter an Item to get started!</p>}
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

export default Options