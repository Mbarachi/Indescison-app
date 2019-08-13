import React from "react"

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error : undefined
        }
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(e) {
        e.preventDefault()

        // Get the individual option from the Input box
        const option = e.target.elements.option.value.trim();

        //if option exists/true then call the method pass as props pass in the option
        const error =  this.props.handleAddOption(option)

        this.setState({
            error
        })

    }

    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
        
    }


export default AddOption