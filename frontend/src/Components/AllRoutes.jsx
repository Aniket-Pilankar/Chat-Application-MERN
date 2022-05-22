import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChatPage from './ChatPage'
import HomePage from './HomePage'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/chats' element={<ChatPage />} />
            </Routes>
        </>
    )
}

export default AllRoutes