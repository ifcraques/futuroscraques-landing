import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Particles from './components/Particles'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Transparencia from './pages/Transparencia'
import QuemSomos from './pages/QuemSomos'
import Contato from './pages/Contato'
import ComoApoiar from './pages/ComoApoiar'
import DoacaoDireta from './pages/DoacaoDireta'
import DoacaoMateriais from './pages/DoacaoMateriais'
import Projetos from './pages/Projetos'
import Infografias from './pages/Infografias'
import Recrutamento from './pages/Recrutamento'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <CustomCursor />
      <Particles />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/comoapoiar" element={<ComoApoiar />} />
          <Route path="/doacao-direta" element={<DoacaoDireta />} />
          <Route path="/doacao-materiais" element={<DoacaoMateriais />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/infografias" element={<Infografias />} />
          <Route path="/recrutamento" element={<Recrutamento />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
