import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className='flex flex-col justify-center w-screen'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
