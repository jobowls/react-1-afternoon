import React, {Component} from 'react';

class FilterString extends Component {
  constructor() {
     super();

     this.state = {
      dogs: ["Boston Terrier", "Husky", "Maltese", "Boxer", "African Boerboel", "Poodle", "Heeler"],
      userInput: "",
      filteredDogs: []
     }
  }

  


  render() {
    return (
      <div className="puzzleBox filterStringPB">

        <h4 value="Filter String"></h4>
        <span className="puzzleText" > </span>
        <input className="inputLine" />
        <button className="confirmationButton" ></button>
        <span className="resultsBox filterStringRB" ></span>
           
        </div>
     )
  }
}
export default FilterString;