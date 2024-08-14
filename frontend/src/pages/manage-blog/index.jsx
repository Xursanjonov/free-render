import React, { memo, useState } from 'react'
import BlogProducts from '../../components/blog-wrapper'
const ManageBlogData = [
    {
        id: 1,
        title: "Blog Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        userId: '12345',
    },
    {
        id: 2,
        title: "Blog Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        userId: '12345',
    },
    {
        id: 3,
        title: "Blog Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        userId: '12345',
    },
    {
        id: 4,
        title: "Blog Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        userId: '12345',
    },
    {
        id: 5,
        title: "Blog Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        userId: '12345',
    },
    {
        id: 6,
        title: "Blog Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        userId: '12345',
    },
    {
        id: 7,
        title: "Blog Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        userId: '12345',
    },
    {
        id: 8,
        title: "Blog Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        userId: '12345',
    },
    {
        id: 9,
        title: "Blog Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        userId: '12345',
    },
    {
        id: 10,
        title: "Blog Item",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        userId: '12345',
    },
]

const ManageBlog = () => {
    const [data, setData] = useState(ManageBlogData)

    return (
        <div className='w-full overflow-y-auto mx-auto flex flex-wrap items-center justify-between gap-4'>
            {
                data?.map(blog => (
                    <BlogProducts key={blog?.id} blog={blog} />
                ))
            }
        </div>
    )
}

export default memo(ManageBlog)