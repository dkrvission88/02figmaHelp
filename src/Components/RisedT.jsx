import React from 'react'
import "./risedt.css"
import { useNavigate } from 'react-router-dom'

function RisedT() {

  const navigate = useNavigate("");
  const create = () => {
    navigate('/Raise')
  }

  return (
    <>

      <div className="left"></div>

      <div className="right">

        <div className="top">
          <div className="help">
            <h3>Help</h3>
          </div>
          <div className="btn3">
            <button onClick={create} type='submit' className='btn03'>Raise a Ticket</button>
          </div>

        </div>

        <div className="botton">
          <table >
            <tr>
              <th>Created on </th>
              <th>Issue</th>
              <th>Last Update</th>
              <th>Status</th>
            </tr>
            
            <tr>
              <td>22nd jan'24</td>
              <td>I encountered a technical gitch while
                navigating the Zestire platform. <a href=''>View more</a>
              </td>


              <td>Thank you for bringing this to our
                attention. We sincerely apologize for the
                innconvenience... <a href=''>View more</a>  </td>
              <td style={{color: "red"}}>Closed</td>
            </tr>

          </table>
        </div>




      </div>

    </>
  )
}

export default RisedT