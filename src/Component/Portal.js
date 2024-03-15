// import { Tobar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './TopBar'

export default function Portal({mode , setMode}) {
  return (
    <div className='Container'>
        <Topbar mode = {mode} setMode = {setMode}/>
        <Outlet/>    
    </div>
    
  )
}