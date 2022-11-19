import React, { Component, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AuthContext from '../../../context/AuthContext'
import StyledButton from '../../atoms/Button/StyledButton'
import BlogList from '../../organisms/BlogList/BlogList'
import Navbar from '../../organisms/Navbar/Navbar'

export default function HomePage() {
  let contextData= useContext(AuthContext)
  console.log(contextData.loggedIn)
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

///Homepage



//login
