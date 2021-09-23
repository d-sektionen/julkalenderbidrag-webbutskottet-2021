import React from 'react';
import logo from '../logo.svg';

class Player extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div 
        className="player" 
        style={{            

        }}>
                
        <p>{this.props.name}</p>    {/*Namn och liu-id, token från liu api typ*/}
        <p>{this.props.program}</p> {/*Skriv in självmant i meny? Ha bild på programloggan vid sidan av namnet?*/}
        <p>{this.props.time}</p> 

            
      </div>
    )
  }

}

export default Player;