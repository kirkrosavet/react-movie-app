import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav.jsx'
import Home from './components/home.jsx'
import Movies from './components/movies.jsx'
import Release from './components/release.jsx'
import Footer from './components/footer.jsx'
import About from './components/about.jsx'
import Watch from './components/watch.jsx'
import List from './components/list.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
      <Home/>
      <Movies/>
      <Release/>
      <List/>
      <Watch/>
      
      <About/>
      <Footer/>
      
      
    </>
  )
}

export default App
