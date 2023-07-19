import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { MementoRoutes } from './routes/MementoRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <MementoRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
