import React from 'react'
import Main from './Component/Main'
import Mealinfo from './Component/Mealinfo'
import { Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:mealid' element={<Mealinfo/>}/>
      </Routes>
    
  )
}

export default App
