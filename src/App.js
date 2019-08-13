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
      options : ["Hello", 667, "ayemitemi"]
    }
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handePick = this.handePick.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();
    const value = e.target.elements.option.value.trim();
    if(value){
      alert(value);
    }
  }

  handePick() {
    alert("clicked");
  }

  handleRemove() {
    console.log(this.state.options);
  }
  render() {
    return(
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle}/>
        <Action handlePick = {this.handePick} hasOptions = {this.state.options > 0}/> 
        <Options options={this.state.options} handleRemove={this.handleRemove}/>
        <AddOption handleAddOption = {this.handleAddOption}/>
      </div>
    )
  }

}

export default App;
