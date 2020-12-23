import React, { useState } from 'react'
import Sort from './Sort'
import { generateRandomStr } from '../global'

const CreateArray = () => {
  const [displayArray, setDisplayArray] = useState([])
  
  const createRandomArray = (length) => {
    let tempArray = []
    for (let i = 0; i < length; i++) {
      tempArray.push(getRandomValue(5, 200))
    }
    setDisplayArray(tempArray)
  }

  const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    <div>
      <input placeholder='Set Array Length' onChange={e => createRandomArray(e.target.value)} />

      <div>
        <Sort 
          key={generateRandomStr(5)}
          displayArray={displayArray}
        />
      </div>
    </div>
  )
}

export default CreateArray