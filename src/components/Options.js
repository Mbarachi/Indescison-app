import React from "react"
import Option from "./Option"

class Options extends React.Component {
    render() {
        return(
            <div>
                <button onClick={this.props.handleDelete}>Remove all</button>
               {this.props.options.map((option) =>  <Option key={option} optionText = {option} /> )}
        
            </div>
        )
    }
}

export default Options