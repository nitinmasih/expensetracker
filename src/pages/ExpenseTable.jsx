import React from 'react'
import Table from '../components/Table'
import { useAppContext } from '../context/context.jsx'

const ExpenseTable = () => {
  const { globalState } = useAppContext()
  
  return (
    <div className='table-page'>
      <h1 style={{ textAlign: "center", color: "green", minWidth: "300px" }}>Expense Table</h1>
      <Table tabledata={globalState} />
    </div>
  )
}

export default ExpenseTable
