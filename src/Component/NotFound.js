import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='Container'>
         <div>
        <h1>404 Notfound</h1>
        <h2><Link to="/portal/home">Back to HomePage</Link></h2>
        <img src='https://tse4.mm.bing.net/th?id=OIP.YD-33XjCtygKvH6nbILozQHaGd&pid=Api&P=0&h=180' alt='404'/>
    </div>    
    </div>
  )
}
