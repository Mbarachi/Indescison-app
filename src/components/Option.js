import React from "react"

class Option extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    render() {
        return(
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

export default Option