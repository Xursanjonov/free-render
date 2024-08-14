import React, { memo } from 'react';
import { Button, Form, Input } from 'antd';

const productForm = {
    title: 'TEST 1',
    price: 1,
    oldPrice: 2,
    stock: 3,
    category: 'phone',
    available: 3,
    urls: [],
    desc: 'lorem',
    info: ['info 1', 'info 2'],
    rating: 3,
}
const CreateProduct = () => {
    const [newProduct, setNewProduct] = React.useState(productForm)
    const onFinish = (values) => { console.log('Success:', values); };
    const onFinishFailed = (errorInfo) => { console.log('Failed:', errorInfo); };

    return (
        <section className='w-full grid gap-4'>
            <h2 className='w-[480px] px-5 text-end text-2xl font-semibold bg-transparent'>Create Product</h2>
            <Form className='max-w-[600px] w-full'
                name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }}
                initialValues={{ remember: true, }} onFinish={onFinish}
                onFinishFailed={onFinishFailed} autoComplete="off"
            >
                <Form.Item label="Title" name="title"
                    rules={[{ required: true, message: 'Please input your Title!', },]} >
                    <Input />
                </Form.Item>
                <Form.Item label="Price" name="price"
                    rules={[{ required: true, message: 'Please input your price!', },]} >
                    <Input />
                </Form.Item>
                <Form.Item label="Old Price" name="oldPrice"
                    rules={[{ required: true, message: 'Please input your old price!', },]} >
                    <Input />
                </Form.Item>
                <Form.Item label="Stock" name="stock"
                    rules={[{ required: true, message: 'Please input your stock!', },]} >
                    <Input />
                </Form.Item>
                <Form.Item label="Category" name="category"
                    rules={[{ required: true, message: 'Please input your category!', },]} >
                    <Input />
                </Form.Item>
                <Form.Item label="Available" name="available"
                    rules={[{ required: true, message: 'Please input your available!', },]} >
                    <Input />
                </Form.Item>
                <Form.Item label="Description" name="desc"
                    rules={[{ required: true, message: 'Please input your Description!', },]} >
                    <Input />
                </Form.Item>
                <Form.Item label="Urls" className='border-0' name="urls"
                    rules={[{ required: true, message: 'Please input your images!', },]} >
                    <Input type='file' className='w-[205px] border-0 bg-transparent hover:bg-transparent active:bg-transparent' />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16, }} >
                    <Button className='w-full' type="primary" htmlType="submit"> Submit </Button>
                </Form.Item>
            </Form>
        </section>
    );
}
export default memo(CreateProduct);