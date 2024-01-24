import React from 'react'
import "./submit.css"
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Submit() {
  const [issue, setIssue] = useState("")
  const [date, setDate] = useState("")
  const [des, setDes] = useState("")

  const handler = (e) => {
    e.preventDefault()

  }
  const navigate = useNavigate();
  const send = () => {
    navigate('/RisedT');
  };


  return (
    <>

      <div className="left">

      </div>



      <div className="right">


        <form className='form' onSubmit={(e) => handler}>
          <h3>Help</h3>
          <div className="first">
            <div className="issue">
              <level className="iss" >Issue <sup>*</sup> </level><br />
              <input type='text' placeholder='' name={issue} onChange={(e) => setIssue(e.target.value)} ></input>
            </div>
            <div className="date">
              <label className='dd'>Date <sup>*</sup> </label><br />
              <input type='date' placeholder='' name={date} onChange={(e) => setDate(e.target.value)} ></input>
            </div>
          </div>
          <div className="des">
            <label className='dc'>Description <sup>*</sup> </label><br />
            <textarea id='' name={des} placeholder='' onChange={(e) => setDes(e.target.value)}></textarea>
          </div>

          <div className="btn2">
            <button onClick={send} type='submit' className='btn02'>Submit</button>
          </div>
        </form>

      </div>

    </>
  )
}

export default Submit