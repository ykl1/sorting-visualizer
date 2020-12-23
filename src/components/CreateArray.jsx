import React, { useState } from 'react'
import Sort from './Sort'

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

  const generateRandomStr = (length) => {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }

  return (
    <div>
      <input placeholder='Set Array Length' onChange={e => createRandomArray(e.target.value)} />

      <div>
        {/* {displayArray.map(elem => (
          <p key={generateRandomStr(5)}>
            {elem}
          </p>
        ))} */}
      </div>
    </div>
  )
}

export default CreateArray