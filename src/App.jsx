
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import History from './pages/History';
import PageNotFount from './pages/PageNotFount';
import ResumeGenerator from './pages/ResumeGenerator';
import UserForm from './pages/UserForm';



function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/resume' element={<ResumeGenerator />} />
        <Route path='/form' element={<UserForm />} />
        <Route path='/history' element={<History />} />
        <Route path='/*' element={<PageNotFount />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
