import React, { memo, useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, QrcodeOutlined, AppstoreAddOutlined, AppstoreOutlined, EditOutlined, ProductOutlined, UserAddOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Button, ConfigProvider, Layout, theme } from 'antd';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../context/slices/authSlice';
const { Header, Sider, Content } = Layout;


const Layouts = () => {
    const { pathname } = useLocation()
    const [collapsed, setCollapsed] = useState(false);
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
    const siderItemActive = `w-[${collapsed ? '30' : '100'}%] hover:text-black p-3 flex items-center justify-center text-md gap-4 mx-auto bg-blue-500 font-semibold rounded-md text-[#000]`
    const siderItem = `w-[${collapsed ? '30' : '100'}%] p-3 flex items-center justify-center text-md gap-4 mx-auto bg-transparent font-semibold rounded-md text-white`

    return (
        <div>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} >
                    <div className="w-full sticky top-0 left-0 bottom-0 h-screen flex flex-col items-start justify-start gap-2" >
                        <h1 onClick={() => navigate('/layout/profile')}
                            className={`w-full h-[64px] cursor-pointer flex items-center justify-center
                            gap-4 text-lg font-bold text-white bg-transparent`}>
                            <span className='w-[40px] h-[40px] font-bold flex items-center justify-center rounded-full bg-blue-500'>
                                {user?.fname.split('')[0] ?? 'N'}
                            </span>
                            <span className={collapsed ? 'hidden' : 'block'}>{user?.fname ?? 'Nusratillo'} {user?.lname}</span>
                        </h1>
                        <div className="w-full px-2 mt-2 flex flex-col items-start justify-center gap-2">
                            <NavLink to={'/layout/dashboard'} title='Dashboard'
                                className={pathname === '/layout/dashboard' ? siderItemActive : siderItem}>
                                <AppstoreOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'w-[114px]'}`}>Dashboard</span>
                            </NavLink>
                            <NavLink to={'/layout/create-user'} title='Create User'
                                className={pathname === '/layout/create-user' ? siderItemActive : siderItem}>
                                <UserAddOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'w-[114px]'}`}>Create User</span>
                            </NavLink>
                            <NavLink to={'/layout/manage-user'} title='Manage User'
                                className={pathname === '/layout/manage-user' ? siderItemActive : siderItem}>
                                <UserOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'w-[114px]'}`}>Manage User</span>
                            </NavLink>
                            <NavLink to={'/layout/create-product'} title='Create Product'
                                className={pathname === '/layout/create-product' ? siderItemActive : siderItem}>
                                <AppstoreAddOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'w-[114px]'}`}>Create Product</span>
                            </NavLink>
                            <NavLink to={'/layout/manage-product'} title='Manage Product'
                                className={pathname === '/layout/manage-product' ? siderItemActive : siderItem}>
                                <ProductOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'w-[114px]'}`}>Manage Product</span>
                            </NavLink>
                            <NavLink to={'/layout/create-blog'} title='Create Blog'
                                className={pathname === '/layout/create-blog' ? siderItemActive : siderItem}>
                                <EditOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'w-[114px]'}`}>Create Blog</span>
                            </NavLink>
                            <NavLink to={'/layout/manage-blog'} title='Manage Blog'
                                className={pathname === '/layout/manage-blog' ? siderItemActive : siderItem}>
                                <QrcodeOutlined className='w-[30px] flex items-center justify-center' />
                                <span className={`${collapsed ? 'hidden' : 'w-[114px]'}`}>Manage Blog</span>
                            </NavLink>
                        </div>
                        <ConfigProvider>
                            <Button className='w-full font-bold text-red-600 absolute bottom-4' type="link"
                                onClick={() => dispatch(logout())} size="large" icon={<LogoutOutlined />}>Logout</Button>
                        </ConfigProvider>
                    </div>
                </Sider>
                <Layout>
                    <Header className='w-full flex items-center justify-between bg-white' >
                        <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)} className='text-[16px]'
                        />
                        <Link to={'/layout/profile'}>
                            <Avatar size={40} className='cursor-pointer backdrop-brightness-100'  >{user?.fname.split('')[0] ?? 'N'}</Avatar>
                        </Link>
                    </Header>
                    <Content className={`min-h-[80vh] mx-4 my-6 p-6 bg-[${colorBgContainer}] rounded-[${borderRadiusLG}]`}
                        style={{
                            overflow: 'auto'
                        }} >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default memo(Layouts)