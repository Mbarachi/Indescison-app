import React from "react"
// import Option from "./Option"

class Options extends React.Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div>
               <p>{this.props.option[0]}</p>
               <p>{this.props.option[1]}</p>
               <p>{this.props.option[2]}</p>
        
            </div>
        )
    }
}

export default Options