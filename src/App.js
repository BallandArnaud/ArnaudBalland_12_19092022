import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
