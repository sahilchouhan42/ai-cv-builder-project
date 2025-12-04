import './App.css'
import Custom from './components/Custom'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  

  return (
    <>
    <div>
    <Navbar />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Custom />
      <Footer />
      </div>
    </>
  )
}

export default App
