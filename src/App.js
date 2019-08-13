import React from 'react';
import Header from './components/Header'
import Action from './components/Action'
import Options from './components/Options'
import AddOption from './components/AddOption'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title : 'Indecison App',
      subtitle: 'Put your life in the hands of God',
      options : []
    }
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handePick = this.handePick.bind(this);
  }

  handleAddOption(option) {
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
  handePick() {
    const randNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randNum];
    alert(option);
  }

  render() {
    return(
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle}/>
        <Action 
          handlePick = {this.handePick} 
          hasOptions = {this.state.options.length > 0}
        /> 
        <Options 
          options={this.state.options} 
          handleRemove={this.handleRemove}
          handleDelete = {this.handleDelete}
        />
        <AddOption handleAddOption = {this.handleAddOption}/>
      </div>
    )
  }

}

export default App;
