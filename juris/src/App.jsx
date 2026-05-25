import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Research from '@/pages/Research'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/pesquisa" replace />} />
        <Route path="/pesquisa" element={<Research />} />
      </Routes>
    </BrowserRouter>
  )
}
