import React from 'react'

export const Arr = ({arr}) => {
  return (
    // <div>Array: {arr[0]}</div>
    // <div>Array: {arr[1]}</div>
    <div style={{ border: "1px solid #ccc", margin: "20px" }}>
        Array: {arr.map(item=>(
            <div key={item}>{item}</div>
        ))}
    </div>
  )
}
