import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [salary, setSalary] = useState('0')
  const [usd, setUsd] = useState(false)
  const [uz, setUz] = useState(true)
  //let totalSalary = 1800;
  let charity = salary * 0.1
  let parents = salary * 0.1

  let totalFirstSpent = charity + parents
  let totalFirstSalary = salary - totalFirstSpent

  let entertainment = totalFirstSalary * 0.1
  let financeProtect = totalFirstSalary * 0.1

  let totalSecondSpent = entertainment + financeProtect
  let totalSecondSalary = totalFirstSalary - totalSecondSpent

  let capital = totalSecondSalary * 0.55
  let mainCapital = capital * 0.8
  let dreams = capital * 0.2
  let expendatire = totalSecondSalary * 0.45

  console.log('c', Math.floor(mainCapital))
  console.log('2', Math.floor(dreams))
  const optimizeNumbers = (num) => {
    if (usd) {
      return `$ ${new Intl.NumberFormat('en-US').format(num)}`
    } else {
      return `${new Intl.NumberFormat('uz-UZ').format(num)} so'm`
    }
  }

  return (
    <div className='App'>
      <input onChange={(e) => setSalary(e.target.value)} placeholder="please enter your salary" />
      <div />
      <label>USD</label>
      <input type="checkbox" onChange={(e) => { setUsd(!usd); setUz(!uz) }} checked={usd} />
      <label>UZ</label>
      <input type="checkbox" onChange={(e) => { setUz(!uz); setUsd(!usd) }} checked={uz} />
      <h1>Your total: {optimizeNumbers(salary)}</h1>
      <h2>Charity: {optimizeNumbers(charity)}</h2>
      <h2>Parents: {optimizeNumbers(parents)}</h2>
      <h5>Remained: {optimizeNumbers(totalFirstSalary)}</h5>
      <hr />
      <h2>Entertainment: {optimizeNumbers(entertainment)}</h2>
      <h2>FinanceProtect: {optimizeNumbers(financeProtect)}</h2>
      <h5>Remained: {optimizeNumbers(totalSecondSalary)}</h5>
      <hr />
      <h2>Capital: {optimizeNumbers(Math.floor(capital))}</h2>
      <h3>MainCapital: {optimizeNumbers(Math.floor(mainCapital))}</h3>
      <h3>Dreams: {optimizeNumbers(Math.floor(dreams))}</h3>
      <h2>Expenditure:{optimizeNumbers(Math.floor(expendatire))}</h2>
    </div>
  );
}

export default App;
