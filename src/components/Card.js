import React from 'react';
import logo from '../logo.svg';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const handleClick = () => {
          this.props.onClick(this.props.index)
        }

        return ( 
          <div className={`card`} onClick={handleClick}>
                
            <div className="card-inner">
              <div className="card-face card-front">
                <h3> yo</h3>
                <img src={logo}/>
                <p>Front</p>
              </div>        
              
              <div className="card-face card-back">
                <h3>{this.props.name}</h3>
                <img src={logo}/>
                <p>{this.props.description}</p>
              </div>
            </div>
          </div>
        )
    }
}

export default Card;