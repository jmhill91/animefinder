import React, {useState} from 'react';
import './App.css';
import LoginPage from './components/LoginPage'

function App() {

  const [userDetails] = useState(null);

  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
