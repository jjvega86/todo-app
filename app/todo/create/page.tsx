import TodoFormSS from '@/app/components/TodoFormSS'
import Link from 'next/link'
import React from 'react'

const ToDoFormPage = () => {
    return (
        <div className='place-content-center grid'>
            <TodoFormSS />
            <Link
                href="/"
            >
                Back to Todos
            </Link>
        </div>
    )
}

export default ToDoFormPage
