import React, { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#02344d';
      showAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  };

  return (
   
    <Router>
      <Navbar title="Textutils" aboutText="about Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path='/' element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          {/* <Route path='/home' element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Textform showAlert={showAlert} heading="enter the text to analyze" mode={mode} /> */}
        {/* <About /> */}
      </div>
    </Router>   
  );
}

export default App;
