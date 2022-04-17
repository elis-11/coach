import React from 'react'

export const Num = ({number, st}) => {
  return (
<div style={{border: '1px solid #ccc', margin: '10px'}}>
  <div>
    Number:{number}
  </div>
<div>
    String: {st}
</div>
</div>
  )
}
