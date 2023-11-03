"use client"

import React from 'react'
import { markComplete } from '../actions'

const MarkComplete = ({id} : {id: number}) => {
  
  return (
    <input type="checkbox" onChange={() => markComplete(id)} />
  )
}

export default MarkComplete
