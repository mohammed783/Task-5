  import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sign_in from './pages/Sign_in'
import SignUp from './components/Sign_up/Sign_up'
import Dashboard from './pages/Dashboard'
import Show from './pages/Show'
import Add from './pages/Add'


  function App() {
  

    return (
      <>
       <Routes>
        <Route path='/' element ={<Sign_in />} />
        <Route path='/Sign_up' element ={<SignUp />} />
        <Route path='/Dashboard' element ={<Dashboard />} />
        <Route path='/Show' element ={<Show />} />
        <Route path='/Add' element ={<Add />} />
        
       </Routes>
      </>
    )
  }

  export default App
