import React, { useState } from 'react'
import { generateRandomStr } from '../global'

const Sort = ({ displayArray }) => {
  const [currArray, setCurrArray] = useState(displayArray)

  return (
    <div>
      {currArray.map(elem => (
        <p key={generateRandomStr(5)}>{elem}</p>
      ))}

      <button>Merge Sort</button>
      <button>Quick Sort</button>
      <button>Bubble Sort</button>
      <button>Insertion Sort</button>
      <button>Selection Sort</button>
    </div>
  )
}

export default Sort
