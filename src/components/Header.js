import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="header">
                
        <div className="title-bar">
          <h3>Header</h3>
        </div>

        <div className="stats">
          <p>{this.props.name} ({this.props.liuid})</p> 
          <p>Time passed: tid</p> 
          <p>Correct guesses: {this.props.correct}</p>
          <p>Cards left: {this.props.left}</p> 
        </div>
            
      </div>
    )
  }

}

export default Header;