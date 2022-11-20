import React, { Component, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AuthContext from '../../../context/AuthContext'
import StyledButton from '../../atoms/Button/StyledButton'
import BlogList from '../../organisms/BlogList/BlogList'
import Navbar from '../../organisms/Navbar/Navbar'

export default function HomePage() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

///Homepage



//login
