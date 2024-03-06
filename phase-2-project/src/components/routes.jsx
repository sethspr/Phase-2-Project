import About from './pages/About'
import Cool from './pages/Cool'
import Home from './Home';
import Post from "./pages/Post";
import UserProfile from './UserProfile';

const router = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/post',
        element: <Post/>
    },
    {
        path: '/cool',
        element: <Cool />
    },
    {
        path: '/profile/:id',
        element: <UserProfile />
    }

]

export default router