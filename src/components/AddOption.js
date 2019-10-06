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

        //call the method passed as props and assign to a variable(error handler)
        const error =  this.props.handleAddOption(option)

        this.setState({
            error
        })

        if(!error){
            e.target.elements.option.value = ''
        }

    }

    render() {
        return(
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
        
    }


export default AddOption