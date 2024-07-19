import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostDetails from './components/pages/PostDetails';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Post from './components/pages/Post';
import Home from './components/pages/Home';
import PostLayout from './components/PostLayout';
import Layout from './components/Layout';
import Error from './components/pages/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='post' element={<PostLayout />}>
              <Route index element={<Post />} />
              <Route path=':category' element={<PostDetails />} />
            </Route>
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
