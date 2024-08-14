import React, { memo } from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';

const userForm = {
    fname: "Johnn",
    lname: "Doee",
    username: "johnn",
    password: "$2a$10$355gw04g2M8NGBbcf5IlduqUjKDbARIXBxNMrmDBcDjLK7km3aVFO",
    age: 20,
    url: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BAHlIuDPK6lkExHi1DWN6cdzB2OJkmSSMNxEhQXpLnHQ3fslHw7AqUJsZEDvu85xhWw&usqp=CAU"],
    gender: "Male",
    isActive: true,
    email: "john13@gmail.com",
    budget: 123,
    role: "user",
}
const CreateUser = () => {
    const [dataUser, setDataUser] = React.useState(userForm)
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form name="basic"
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
            autoComplete="off" >
            <Form.Item label="First Name" name="fname" rules={[{ required: true, message: 'Please input your First Name!', },]} >
                <Input />
            </Form.Item>
            <Form.Item label="Last Name" name="lname" rules={[{ message: 'Please input your Last Name!', },]} >
                <Input />
            </Form.Item>
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!', },]} >
                <Input />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', },]} >
                <Input.Password />
            </Form.Item>
            <Form.Item label="Age" name="v" rules={[{ required: true, message: 'Please input your age!', },]} >
                <Input />
            </Form.Item>
            <Form.Item label="Image" name="url" rules={[{ required: true, message: 'Please input your image!', },]} >
                <Input />
            </Form.Item>
            <Form.Item label="Gender">
                <Select>
                    <Select.Option value="male">Male</Select.Option>
                    <Select.Option value="female">Female</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your Email!', },]} >
                <Input />
            </Form.Item>
            <Form.Item label="Budget" name="budget" rules={[{ required: true, message: 'Please input your budget!', },]} >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16, }} >
                <Button type="primary" className='w-full text-lg py-1' htmlType="submit">
                    Create
                </Button>
            </Form.Item>
        </Form>
    );
}
export default memo(CreateUser);