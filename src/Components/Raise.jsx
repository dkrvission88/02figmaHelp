import React from 'react'
import "./raise.css"
import { Navigate, useNavigate } from 'react-router-dom'

function Raise() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Redirect logic here
    navigate('/Submit'); // Use the navigate function from useNavigate
  };
  return (
    <>
      <div className="left">

      </div>

      <div className="right">


        <h3>Help</h3>
        <div className="ima1">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_sSF6EG.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className='row'>
          <span className="material-symbols-outlined">
            south
          </span>
        </div>
        <div className="pp">
          <p className='p1'>Have questions or concerns? Feel free to raise a ticket, and our team will seiftly</p>
          <p className='p2'>address Your queries.</p>
        </div>


        <div className="btn1">
          <button onClick={handleRedirect} type='submit' className='btn01'>Raise a Ticket</button>
        </div>
      </div>


    </>
  )
}

export default Raise