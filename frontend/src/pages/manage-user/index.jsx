import React, { memo } from 'react'
import UserWrapper from '../../components/user-wrapper'
import { useGetUsersQuery } from '../../context/api/userApi'
import { usersData } from '../../static'
import Loader from '../../components/loader'

const ManageUser = () => {
    const { data, isFetching } = useGetUsersQuery()
    const users = data?.payload ?? usersData
    console.log(users)

    return (
        <section className='w-full mx-auto flex flex-wrap items-center justify-start gap-6'>
            {
                isFetching ? <div className='w-full flex items-start justify-center'><Loader /></div> :
                    users?.map(user => <UserWrapper key={user?.id} user={user} />)
            }
        </section >
    )
}

export default memo(ManageUser)