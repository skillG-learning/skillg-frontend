import Layout from '../views/layout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../views/admin/login';
import Admin from '../views/admin';

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

                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;