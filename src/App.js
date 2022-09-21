import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="mainContent">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
