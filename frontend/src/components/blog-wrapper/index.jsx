import React, { memo, useState } from 'react'
import { Button, Card, Modal } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const BlogProducts = ({ blog }) => {
    const [isModalOpen, setIsModalOpen] = useState(null);
    const [isDelete, setIsDelete] = useState(null);
    // Update
    const showModal = () => { setIsModalOpen(blog) };
    const handleSubmit = () => { setIsModalOpen(null); setIsDelete(null); console.log('edit') };
    // Delete
    const showDelete = () => { setIsDelete(blog) };
    const handleDelete = () => { setIsDelete(null); setIsModalOpen(null); console.log('delete') };
    const handleCancel = () => { setIsModalOpen(null); setIsDelete(null); console.log('Cancel') };

    return (
        <>
            <Card title={`${blog?.title??'Blog item'} ${blog?.id}`} bordered={false} className='w-[300px] mx-auto border' >
                <h1>{blog?.id} {blog?.title}</h1>
                <p>{blog?.desc}</p>
                <div className="w-full mt-5 border-t-2 pt-2 flex items-center justify-end gap-2">
                    <Button type="default" className='p-2' onClick={showModal}><EditOutlined /></Button>
                    <Button type="default" className='p-2' onClick={showDelete}><DeleteOutlined /></Button>
                </div>
            </Card>
            {
                isModalOpen ? <Modal title="Update Modal" open={isModalOpen} onOk={handleSubmit} onCancel={handleCancel}>
                    <h2>{isModalOpen?.title}</h2>
                    <p>{isModalOpen?.desc}</p>
                </Modal> : <></>
            }
            {
                isDelete ? <Modal title="Delete Modal" open={isDelete} onOk={handleDelete} onCancel={handleCancel}>
                    <h2>Are you sure you want to delete this item?</h2>
                </Modal> : <></>
            }
        </>
    )
}

export default memo(BlogProducts)