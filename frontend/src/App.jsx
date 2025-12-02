import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    <div className='relative'>
    <Navbar className='sticky top-0' />
      <Hero />
      </div>
    </>
  )
}

export default App
