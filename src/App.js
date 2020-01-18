import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { name: 'Ethan', age: '21' },
      { name: 'Vera', age: '31' },
      { name: 'Frank', age: '32' }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      people: [
        { name: 'Ethan', age: '21' },
        { name: 'Vera', age: '31' },
        { name: 'Sam', age: '32' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, Welcome to React</h1>
        <button onClick={this.switchNameHandler}>Change Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>Hobbies: eating</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', 'This is React!!'))
    // return React.createElement('div', { className: 'App' }, 'hi');
  }
}

export default App;
