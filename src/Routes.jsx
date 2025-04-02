import Home from './pages/Home';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';
import PostDetails from './pages/PostDetails';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/blogs', element: <Blogs /> },
  { path: '/PostDetails/:postID', element: <PostDetails /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
