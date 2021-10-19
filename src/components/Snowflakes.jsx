import React from "react"

import "./Snowflakes.css"

function Snowflakes() {
  return (
    <div className='snowflakes' aria-hidden='true'>
      {Array(50)
        .fill("❅")
        .map((a, i) => (
          <div className='snowflake' key={i}>❅</div>
        ))}
    </div>
  )
}

export default Snowflakes