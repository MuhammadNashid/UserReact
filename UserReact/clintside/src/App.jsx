import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './component/Index'
import Add from './component/Add'
import Edit from './component/Edit'
import Show from './component/Show'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Add" element={<Add/>}/>
        <Route path="/Edit/:id" element={<Edit/>}/>
        <Route path="/Show/:id" element={<Show/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App