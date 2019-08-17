import React from 'react';
import Header from './components/Header'
import Action from './components/Action'
import Options from './components/Options'
import AddOption from './components/AddOption'
import OptionModal from './components/OptionModal'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title : 'Indecison App',
      subtitle: 'Put your life in the hands of God',
      options : [],
      selectedOption: undefined
    }
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handePick = this.handePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json)

      if(options) {
        this.setState({options: options})
      }
    } catch (error) {
      
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      // localStorage function only stores strings, hence the line above! 
      localStorage.setItem('options', json) 
    }
  }

  handleAddOption(option) {
    //validatoin purposes...
      if(!option) {
        return "Enter valid item to add"
      }else if (this.state.options.indexOf(option) > -1){
        return "This item already exist"
      } 

      this.setState((prevState) => {
        return{
          options: prevState.options.concat(option)
        }
      })
    }

  handleDelete() {
    this.setState({
      options: []
    })
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter( option => optionToRemove !== option )
  
    }))
    
  }


  handePick() {
    const randNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randNum];
    this.setState(() => ({
      selectedOption: option
    }))
  }

  render() {
    return(
      <div>
        <Header 
          title={this.state.title} 
          subtitle={this.state.subtitle}
        />
        <Action 
          handlePick = {this.handePick} 
          hasOptions = {this.state.options.length > 0}
        /> 
        <Options 
          options={this.state.options} 
          handleDelete = {this.handleDelete}
          handleAddOption ={this.handleAddOption}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption = {this.handleAddOption}/>
        <OptionModal 
          selectedOption={this.state.selectedOption}
        />
       
      </div>
    )
  }

}

export default App;
