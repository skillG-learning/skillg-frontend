import Layout from '../views/layout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../views/admin/login';
import Admin from '../views/admin';
import Course from '../views/courseDetail';
import Blog from '../views/blogDetail';

const AppRoutes = () => {
    const isAdmin = localStorage.getItem("isAdmin");
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} />
                <Route path='/admin/login' element={<Login />} />
                {
                    isAdmin &&
                    <Route path='/admin/home/:subpage?' element={<Admin />} />
                }
                <Route path='/course/detail/:_id' element={<Course />} />
                <Route path='/blog/detail/:_id' element={<Blog />} />

                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;