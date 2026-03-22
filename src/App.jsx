import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Particles from './components/Particles'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Transparencia from './pages/Transparencia'
import QuemSomos from './pages/QuemSomos'
import Contato from './pages/Contato'
import ComoApoiar from './pages/ComoApoiar'
import Projetos from './pages/Projetos'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Particles />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/comoapoiar" element={<ComoApoiar />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
