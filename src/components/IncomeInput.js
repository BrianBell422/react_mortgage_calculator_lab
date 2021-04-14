import {useState} from 'react';
import './IncomeInput.css'

const IncomeInput = ({onSalarySubmit, onDepositSubmit, onMonthlyCommitmentSubmit}) => {

  const [salary, setSalary] = useState(0)
  const [salary2, setSalary2] = useState(0)
  const [deposit, setDeposit] = useState(0)
  const [monthlyCommitments, setMonthlyCommitments] = useState (0)

  const handleSalaryChange = (evt) => {
    setSalary(evt.target.value)
  }

  const handleSalaryChange2 = (evt) => {
    setSalary2(evt.target.value)
  }

  const handleDeposit = (evt) => {
    setDeposit(evt.target.value)
  }
  
  const handleMonthlyCommitments = (evt) => {
      setMonthlyCommitments(evt.target.value)
  }

  const handleSalarySubmit = (evt) => {
    evt.preventDefault();
    onSalarySubmit(parseInt(salary) + parseInt(salary2))
    onDepositSubmit(parseInt(deposit))
    onMonthlyCommitmentSubmit(parseInt(monthlyCommitments))

  }

return (
<form className='income_input' onSubmit={handleSalarySubmit}>
<label>Annual Income 1</label>
  <input
    id="Salary-input"
    type="number"
    placeholder="Your Salary"
    value={salary}
    onChange={handleSalaryChange}
  ></input>

  <label>Annual Income 2</label>
  <input
    id="Salary2-input"
    type="number"
    placeholder="YourSalary"
    value={salary2}
    onChange={handleSalaryChange2}
  ></input>

<label>Deposit</label>
  <input
      id="deposit"
      type="number"
      placeholder="YourDeposit"
      value={deposit}
      onChange={handleDeposit}
    ></input>

<label>Other Monthly Commitments</label>
  <input
      id="commitments"
      type="number"
      placeholder="Monthly Commitments"
      value={monthlyCommitments}
      onChange={handleMonthlyCommitments}
    ></input>

  <input id="button" type="submit" value="Submit Income Details"></input>
</form>
)
}
export default IncomeInput;