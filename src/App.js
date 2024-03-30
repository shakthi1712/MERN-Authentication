import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
function App() {
  const isUserSignedIn=!!localStorage.getItem('token')
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          {isUserSignedIn && <Route path='/account' element={<Account />} />}
        </Routes>
    </div>
  );
}

export default App;
