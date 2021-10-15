import React from 'react';

import './Header.css';

class Header extends React.Component {
    
  constructor(props) {
    super(props);
  }

  render() {
    const seconds = Math.round(this.props.time / 1000)

    return (
      <div className="header">
                
        <div className="title-bar">
          <h1>Webutskottets julkalenderbidrag 2021</h1>
        </div>
        
        <div className="stats">
          <p>{this.props.name} ({this.props.liuid})</p> 
          <p>Time passed: {seconds}</p>
          <p>Total guesses: {this.props.guesses}</p> 
          <p>Correct guesses: {this.props.correct}</p>
          <p>Pairs left: {this.props.left}</p> 
        </div>
            
      </div>
    )
  }

}

export default Header;