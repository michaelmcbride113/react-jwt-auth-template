import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';

const App = () => {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
      <h1>Hello, friend!</h1>
    </>
  );
};

export default App;

