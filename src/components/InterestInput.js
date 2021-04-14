import { useState } from 'react';
import './interestInput.css';


const InterestInput = ({onInterestSubmit, onYearsSubmit}) => {

  const [interest, setInterest] = useState(0)
  const [years, setYears] = useState(0)

  const handleYears = (evt) => {
    setYears(evt.target.value)
  }

  const handleInterest = (evt) => {
    setInterest(evt.target.value)
  }


    const handleInterestSubmit = (evt) => {
        evt.preventDefault();
        onInterestSubmit(parseInt(interest))
        onYearsSubmit(parseInt(years))


   //     setInterest(0);
  //   setYears(0);
    }

 return (
  <form className="interest" onSubmit={handleInterestSubmit}>
  <label>Interest Rate</label>
    <input
      id="interest-rate"
      type="number"
      placeholder="Your interest-rate"
      value={interest}
      onChange={handleInterest}
    ></input>

    <label>Number of Years</label>
    <input
      id="number-years"
      type="number"
      placeholder="Number of years"
      value={years}
     onChange={handleYears}
    ></input>

    <input id="button" type="submit" value="Find Rate"></input>
    </form>

 )
} 

export default InterestInput;