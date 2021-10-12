import React from "react"

import "./Snowflakes.css"

class Snowflakes extends React.Component {
  render() {
    return (
      <div className='snowflakes' aria-hidden='true'>
        {Array(50)
          .fill("❅")
          .map((a) => (
            <div className='snowflake'>❅</div>
          ))}
      </div>
    )
  }
}

export default Snowflakes