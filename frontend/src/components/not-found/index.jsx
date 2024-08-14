import React, { memo } from 'react'
import notFoundImg from '../../assets/images/not-found.jpg'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full min-h-screen flex flex-col gap-4 items-center justify-center">
            <img className='max-w-[400px] w-[100%]' src={notFoundImg} alt="Page not Found" />
            <h1 className='text-3xl font-bold text-gray-400'>Page Not Found . . .</h1>
            <Button onClick={() => navigate(-1)} className='max-w-[280px] w-[100%] font-semibold text-gray-400' type='default'>Go Back</Button>
        </div>
    )
}

export default memo(NotFound)