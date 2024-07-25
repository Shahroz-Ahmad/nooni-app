import './App.css';
import Nav from './Component/Nav';
import { Routes, Route } from 'react-router-dom';
import DetailPage from './Component/DetailPage';
import HomePage from './Component/HomePage';
import Footer from './Component/Footer';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} > </Route>
        <Route path='/details/:id' element={<DetailPage />} > </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
