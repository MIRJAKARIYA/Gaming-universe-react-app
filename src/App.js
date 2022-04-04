import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import 'flowbite';
import DhakaOffice from './components/DhakaOffice/DhakaOffice';
import NewDelhiOffice from './components/NewDelhiOffice/NewDelhiOffice';
import NewYorkOffice from './components/NewYorkOffice/NewYorkOffice';
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}>
            <Route path='dhakaoffice' element={<DhakaOffice></DhakaOffice>}></Route>
            <Route path='newdelhioffice' element={<NewDelhiOffice></NewDelhiOffice>}></Route>
            <Route path='newyorkoffice' element={<NewYorkOffice></NewYorkOffice>}></Route>
          </Route>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
        </Routes>
    </div>
  );
}

export default App;
