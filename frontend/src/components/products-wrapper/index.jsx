import React, { Fragment, memo, useEffect } from 'react'
import { Button, Card, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import productEmpty from '../../assets/images/empty2.jpg';
import { useDeleteProductMutation } from '../../context/api/productApi';

const ProductsWrapper = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(null);
    const [deleteId, { data }] = useDeleteProductMutation()
    const showModal = () => { setIsModalOpen(true); };
    const handleOk = () => { deleteId(product?._id); setIsModalOpen(false); };
    const handleCancel = () => { setIsModalOpen(false); };
    useEffect(() => { console.log(data) }, [])

    return (
        <Fragment>
            <Card className='w-[310px] border' cover={
                <figure className='w-[310px] h-[310px] mx-auto rounded-t-lg'>
                    <img alt="example" className='rounded-t-lg w-full h-[100%] object-cover' src={product?.urls ? product?.urls[0] : productEmpty} />
                </figure>} bordered={true}
                actions={[<Button className='border-0'> <EditOutlined key="edit" /> </Button>,
                <Button onClick={showModal} className='border-0'> <DeleteOutlined key="delete" /> </Button>,]} >
                <div className="w-full flex flex-col gap-2">
                    <h4 className='font-bold'>{product?.title}</h4>
                    <div className="flex flex-col gap-2 text-gray-800">
                        {product?.info.map((info, index) => <p className='w-full text-xs' key={index}>{info}</p>)}
                    </div>
                    <p className='w-full text-sm font-semibold text-gray-500'>Count: <span>{product?.stock}</span></p>
                </div>
            </Card>
            <Modal className='flex items-center justify-center' title="Delete Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Are you sure you want to delete this item {product?.title} . . . ?</p>
            </Modal>
        </Fragment>
    )
}

export default memo(ProductsWrapper)