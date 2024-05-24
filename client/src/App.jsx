import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.scss'
function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Chat/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
