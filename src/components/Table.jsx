import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/context';
import "./Table.css"

const Table = () => {
    const { globalState } = useAppContext();

    const [totalExpense, setTotalExpense] = useState(0)

    useEffect(() => {
        const total = globalState.expenseData.reduce((acc, expense) => acc + expense.value, 0);
        setTotalExpense(total);
    }, [globalState.expenseData]);
    return (
        <div className='main-container'>
        
            <table>
                <thead>
                    <tr>
                        <th>Expense Name</th>
                        <th>Expense Value</th>
                    </tr>
                </thead>
                <tbody>
                    {globalState.expenseData.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.name}</td>
                            <td>{expense.value}</td>

                        </tr>

                    ))}
                </tbody>
            </table>

            <div className="total">
                <div className='total-name'>Total</div>
                <div className='total-expense'>{totalExpense}</div>
            </div>
        </div>
    );

}

export default Table