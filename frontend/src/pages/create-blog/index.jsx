import React, { memo } from 'react';
import { Button, Form, Input } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const CreateBlog = () => {

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input your Title!', },]} >
                <Input placeholder='Title' />
            </Form.Item>

            <Form.Item label="Description" name="desc" rules={[{ required: true, message: 'Please input your Description!', },]} >
                <Input placeholder='Description' />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16, }} >
                <Button className='w-full' type="primary" htmlType="submit"> Create </Button>
            </Form.Item>
        </Form>
    );
}
export default memo(CreateBlog);