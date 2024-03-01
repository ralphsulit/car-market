// ** React
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'

// ** Components
import HomePage from './pages/HomePage.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import NotFound from './pages/NotFound.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import LoginPage from './pages/LoginPage.tsx';

const NavbarContainer = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarContainer />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFound />
      },
      {
        path: '/about',
        element: <About />,
        errorElement: <NotFound />
      },
      {
        path: '/services',
        element: <Services />,
        errorElement: <NotFound />
      },
      {
        path: '/contact',
        element: <Contact />,
        errorElement: <NotFound />
      },
      {
        path: '/login',
        element: <LoginPage />,
        errorElement: <NotFound />
      },
    ]
  },
])


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App