import React, {useState, useEffect } from 'react'
var minutes = 0
var second = 0
var hours = 0
var intervalId=0
export default function Timer({ seconds }){
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [isfinished, setisFinished] = useState(false)
  const [my, setMy] = useState(false)

  useEffect(() => {
    if (!timeLeft) return;
   intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId)
      if (timeLeft === 10){
        setisFinished(true)
      }
      hours = Math.floor(timeLeft / (60 * 60));

      let divisor_for_minutes = timeLeft % (60 * 60);
      minutes = Math.floor(divisor_for_minutes / 60);

      let divisor_for_seconds = divisor_for_minutes % 60;
      second = Math.ceil(divisor_for_seconds) -2;
    };
  }, [timeLeft]);

console.log(timeLeft)


if(!my){
    if(timeLeft === 0){
        console.log("hii")
}
}

const handleEndTime =() =>{
  console.log('clicked')
  clearInterval(intervalId  )
  console.log(intervalId)
}
  return (
    <div>
      <h1>{hours}hrs:{minutes}min:{second}sec</h1>
      <button disabled={!isfinished} style={{backgroundColor:"red"}} onClick={()=>{handleEndTime()}}> submit </button>
    </div>
  );
};