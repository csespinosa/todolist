import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

//css'
import '../styles/ToDo.css'

// components
import ToDo from './components/ToDo';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDo />
  </StrictMode>,
)
