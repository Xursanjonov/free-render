import React, { Fragment, lazy, memo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
const NotFound = lazy(() => import('./components/not-found'))
const Auth = lazy(() => import('./pages/auth'))
const Login = lazy(() => import('./pages/login'))
const Dashboard = lazy(() => import('./pages/dashboard'))
const CreateUser = lazy(() => import('./pages/create-blog/CreateUser'))
const ManageUser = lazy(() => import('./pages/manage-user'))
const CreateBlog = lazy(() => import('./pages/create-blog'))
const CreateProduct = lazy(() => import('./pages/create-blog/CreateProduct'))
const ManageProduct = lazy(() => import('./pages/manage-user/ManageProduct'))
const Layouts = lazy(() => import('./layout'))
const ManageBlog = lazy(() => import('./pages/manage-blog'))

const App = () => {
  const token = useSelector((state) => state.auth.token)

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to={token ? "/layout/dashboard" : "/layout/dashboard"} replace />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Auth />} > */}
        <Route path='/layout/' element={<Layouts />} data-testid='layout' >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="manage-user" element={<ManageUser />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="manage-product" element={<ManageProduct />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="manage-blog" element={<ManageBlog />} />
        </Route>
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default memo(App)