import { useState } from 'react'
import './App.css'

import AppStateProvider from './context/context'
import Home from './pages/Home'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import ExpenseTable from './pages/ExpenseTable'

function App() {


  return (
   <>
<AppStateProvider>
<Router>
  <Routes>
    <Route path='/' element={<Home/>}      />
    <Route path='/expensetable' element={<ExpenseTable/>}  />

  </Routes>
</Router>
</AppStateProvider>
   </>
  )
}

export default App
