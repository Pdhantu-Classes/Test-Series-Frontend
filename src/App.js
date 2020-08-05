import React,{useEffect} from 'react';
import ReactGA from 'react-ga';
import Routes from './Routes'
import './App.css';



function App() {

  useEffect(() => {

    ReactGA.initialize('UA-174561068-1')
    ReactGA.pageview(window.location.pathname)
  
  }, [])
  return (
    
    <div className="App">
     <Routes />
    </div>

  )
}

export default App;
