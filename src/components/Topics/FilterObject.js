import React, {Component} from 'react';

class FilterObject extends Component {
  constructor() {
     super();

     this.state = {

      employees: [{"name": "Theo", "title": "CEO", "salary": 100000, "height": "6 ft 2 in"}, {"movie": "Hyde", "game": "Scrabble", "eye color": "blue", "height": "5 ft 10 in"}, {"name": "Jekyll", "title": "Physician's Assistant", "salary": 80000, "height": "6 ft 4 in"}],

      filteredEmployees: [],
      userInput: ""
     }
  }

  handleChange = (value) => {
    this.setState({userInput: value});
  }

  handleClick = (prop) => {
    let employees = this.state.employees;
    let filteredEmployees = [];

    for (let i = 0; i <employees.length; i++) {
      if (employees[i].hasOwnProperty(prop)) {
        filteredEmployees.push(employees[i]);
      }
    }
    this.setState({filteredEmployees: filteredEmployees});
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4 value="filterObject"> Filter Object </h4>
        <span className="PuzzleText" >Original: {JSON.stringify(this.state.employees, null, 10)}  </span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} />
        <button className="confirmationButton" onClick={() => this.handleClick(this.state.userInput)} > Filter </button>
        <span className="resultsBox filterObjectRB" > Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)} </span>
        </div>
     )
  }
}
export default FilterObject;

