import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import SignIn from '../pages/auth/SignIn';
import Callback from '../pages/auth/Callback';
import SignedOut from '../pages/auth/SignedOut';
import Dashboard from '../pages/dashboard/Index';
import Profile from '../pages/dashboard/Profile';
import ProtectedRoute from '../components/ProtectedRoute';
import DebugBackend from '../pages/DebugBackend';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },

      { path: 'signin', element: <SignIn /> },
      { path: 'callback', element: <Callback /> },
      { path: 'signed-out', element: <SignedOut /> },
      { path: 'debug', element: <DebugBackend /> },

      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
