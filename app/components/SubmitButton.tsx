"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = ({ label }: { label: string }) => {
  const {pending} = useFormStatus();
  
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md"
      aria-disabled={pending}
    >
      {label}
    </button>
  )
}

export default SubmitButton
