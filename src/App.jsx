
import { useState } from 'react';
import './App.css'
import TextField from '@mui/material/TextField';



function App() {
  //state to hold values from the input field
  const[principle,setprinciple]=useState(0)
  const[rate,setrate]=useState(0)
  const[year,setyear]=useState(0)
  const[interest,setinterest]=useState(0)
//conditional rendering
  const[isprinciple,setisprinciple]=useState(true)
  const[israte,setisrate]=useState(true)
  const[isyear,setisyear]=useState(true)


  const validate=(e)=>{
    console.log(e.target.value);
    console.log(e.target.name);
    let name=e.target.name
    let value=e.target.value
   /*  console.log(!!value.match(/^[0-9]*$/)); */
    if(!!value.match(/^[0-9]*$/)){
    if(name=="principle")
      {
        setprinciple(value)
        setisprinciple(true)
      }
      else if(name=="rate")
        {
          setrate(value)
          setisrate(true)
        }
        else{
          setyear(value)
          setisyear(true)
        }
      }
      else{
        if(name=="principle"){
           setprinciple(value) //false case-albhabetical values will not type but shows it is invalid input
          setisprinciple(false)
        }
        else if(name=="rate")
          {
             setrate(value)//false case-albhabetical values will not type but shows it is invalid input
            setisrate(false)
          }
          else{
             setyear(value) //false case-albhabetical values will not type but shows it is invalid input
            setisyear(false)
          }

      }

  }
  const handleReset=()=>{
    setprinciple(0)
    setrate(0)
    setyear(0)
    setisprinciple(true)
    setisrate(true)
    setisyear(true)
    setinterest(0)
    
    
  }
  const calculate=()=>{
    setinterest((principle * rate * year)/100)
  }
  /* console.log('Principle:',principle);
  console.log('rate:',rate);
  console.log('year:',year); */
 
  

  return (
    
    
    <div id="simple">
    <h1 id="first">Simple Interest App</h1>
    <h6 id="second">Calculate your simple interest Easily</h6>
    <div id="box">
      <h2 className='bg-warning'>₹{interest}</h2>
      <p className='bg-warning'>Total simple interest</p>

    </div>
    <form className='m'>
    <div className='mb-3'>
    <TextField id="outlined-basic"   value={principle||""} name="principle"label="₹Principal Amount" onChange={(e)=>validate(e)} variant="outlined" className="w-100"/>
    </div>
    {!isprinciple &&
    <p className='text-danger'>*Invalid Input</p>}
    <div className='mb-3'>
    <TextField id="outlined-basic"   value={rate||""} name="rate"  label="Rate of interest (p.a)%" onChange={(e)=>validate(e)} variant="outlined" className="w-100"/>
    </div>
    {!israte &&
    <p className='text-danger'>*Invalid Input</p>}
    <div className=' mb-4'>
    <TextField id="outlined-basic"   value={year||""}  name="year" label="Year(yr)" variant="outlined" onChange={(e)=>validate(e)} className="w-100"/>
    </div>
    {!isyear &&
    <p className='text-danger'>*Invalid Input</p>}
    
    </form>
    <button id="calc"disabled={isprinciple&&israte&&isyear ?false:true}onClick={calculate}>calculate</button>
    <button id="reset" onClick={handleReset}>reset</button>
    </div>  
    
  
  )
}

export default App
