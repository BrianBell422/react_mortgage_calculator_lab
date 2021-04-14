import IncomeInput from '../components/IncomeInput';
import AffordableDisplay from '../components/AffordableDisplay';
import InterestInput from '../components/InterestInput';
import React, {useState, useEffect} from 'react';
import './MortageCalculatorContainer.css'

const MorgageCalculatorContainer = () => {

  const [salary, setSalary] = useState(0)
  const [deposit, setDeposit] = useState(0)
  const [monthlyCommitments, setMonthlyCommitments] = useState(0)
  const [affordable, setAffordable] = useState(0)
  const [displayAffordable, setDisplayAffordable] = useState(false)
  const [interest, setInterest] = useState(0)
  const [years, setYears] = useState(0)
  const [repayment, setRepayment] = useState(0)
  const [displayRepayment, setDisplayRepayment] = useState(false)

  const handleSalaryAmount = (salary) => {
    setSalary(salary)
  }

  const handleDepositAmount = (deposit) => {
    setDeposit(deposit)
  }

  const handleMonthlyCommitments = (monthlyCommitments) => {
      setMonthlyCommitments(monthlyCommitments)
  }

  const handleInterestAmount = (interest) => {
      setInterest(interest)
  }

  const handleYearsAmount = (years) => {
      setYears(years)
  }

  useEffect(() => {
    if(salary <= 0){
      return;
    }
    setDisplayAffordable(true)
    setAffordable((salary * 3) + (deposit) - (monthlyCommitments))
  }, [salary, deposit, monthlyCommitments])

  useEffect(() => {
    if (interest <= 0 && years <= 0){
      return;
    }
    setDisplayRepayment(true)
    const superInterest = ((affordable / 100) * interest)
    setRepayment((superInterest + affordable) / years / 12)
  }, [interest, years, affordable])

  return (  
    <div className="form">
      <h1 id="header">Morgage Calculator</h1>
      <IncomeInput
       onSalarySubmit={(salary) => handleSalaryAmount(salary)}
       onDepositSubmit={(deposit) => handleDepositAmount(deposit)}
       onMonthlyCommitmentSubmit={(monthlyCommitments) => handleMonthlyCommitments(monthlyCommitments)}
       />

      <InterestInput
        onInterestSubmit={(interest) => handleInterestAmount(interest)}
        onYearsSubmit={(years) => handleYearsAmount(years)}
      />   
      <AffordableDisplay 
      affordable={affordable}
      repayment={repayment}
      displayAffordable={displayAffordable}
      displayRepayment={displayRepayment}
      />
    </div>
  )
}

export default MorgageCalculatorContainer;