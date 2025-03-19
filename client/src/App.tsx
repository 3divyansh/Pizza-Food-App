import React from 'react'
import Login from './auth/Login'
import Signup from './auth/Signup'
import { BrowserRouter as Router, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import VerifyEmail from './auth/VerifyEmail';
import Navbar from './components/Navbar';
import MainLayout from './layout/MainLayout';
import HeroSection from './components/HeroSection';
import Profile from './components/Profile';
import SearchPage from './components/SearchPage';
import RestaurentDetail from './components/RestaurentDetail';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children : [
      {
        path : "/",
        element : <HeroSection />,
      },
      {
        path : "/profile",
        element : <Profile />,
      },
      {
        path  : "/search/:query",
        element : <SearchPage />,
      },
      {
        path  : "/restaurant/:id",
        element : <RestaurentDetail />,
      },
    ]
  },
  {
    path : "/login",
    element: <Login />,
  },
  {
    path : "/signup",
    element: <Signup />,
  },
  {
    path : "/forgot-password",
    element : <ForgotPassword />,
  },
  {
    path : "/reset-password",
    element : <ResetPassword />,
  },
  {
    path : "/verify-email",
    element : <VerifyEmail />,
  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    

    </div>
  )
}

export default App