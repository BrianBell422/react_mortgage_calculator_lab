const AffordableDisplay = ({affordable, repayment, displayRepayment, displayAffordable}) => {

const repaymentElement = (displayRepayment) ? (<p>The repayment with be this per month: £{repayment}</p>) : null

const affordableElement = (displayAffordable) ? (<p>The maximum mortgage you can afford is: £{affordable}</p>) : null

  return (
    <div>
        {affordableElement}
        {repaymentElement}
    </div>
  )
}

export default AffordableDisplay;