import React, { useState } from 'react'
import { Counter } from './components/Counter'

export const App = () => {

  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <Counter count={count} setCount={setCount} />
    </div>
  )
}