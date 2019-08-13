import React from 'react';
import Header from './components/Header'
import Action from './components/Action'
import Options from './components/Options'
import AddOptions from './components/AddOptions'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title : 'Indecison App',
      subtitle: 'Put your life in the hands of God',
      options : ["Hello", 667, "ayemitemi"]
    }
  }

  handePick() {
    alert("clicked");
  }

  handleRemove() {
    alert("Removed")
  }
  render() {
    return(
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle}/>
        <Action handlePick = {this.handePick}/>
        <Options options={this.state.options} handleRemove={this.handleRemove}/>
        <AddOptions/>
      </div>
    )
  }

}

export default App;
