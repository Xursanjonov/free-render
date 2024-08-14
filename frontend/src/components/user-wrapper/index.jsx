import React from 'react';
import { Button, Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import userEmpty from '../../assets/images/user-empty.jpg';
const { Meta } = Card;

const UserWrapper = ({ user }) => (
    <Card className='w-[250px] border'
        cover={<figure className='w-[250px] h-[250px] mx-auto rounded-t-lg'>
            <img alt="example" style={{ width: '100%', height: '100%' }}
                className='rounded-t-lg' src={user?.url ? user?.url[0] : userEmpty} />
        </figure>}
        bordered={false}
        actions={[<Button className='border-0'> <EditOutlined key="edit" /> </Button>,
        <Button className='border-0'> <DeleteOutlined key="delete" /> </Button>,]} >
        <Meta title={'Full name: ' + user?.fname + ' ' + user?.lname} description={"This is the description"} />
        <Meta description={'Username: ' + user?.username} />
        <Meta description="This is the description" />
    </Card>
);
export default UserWrapper;