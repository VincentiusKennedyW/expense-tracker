import './App.css'
import { ExpenseForm } from './components/ExpenseForm'
import { ExpenseList } from './components/ExpenseList'
import { TotalExpense } from './components/TotalExpense'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">💸 Expense Tracker</h1>
      <ExpenseForm />
      <TotalExpense />
      <ExpenseList />
    </div>
  )
}

export default App
