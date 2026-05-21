import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

/* ─── campo de futebol como textura SVG inline ─── */
const FieldPattern = () => (
  <svg
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }}
    viewBox="0 0 600 400"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* campo externo */}
    <rect x="20" y="20" width="560" height="360" fill="none" stroke="#fff" strokeWidth="2" />
    {/* linha do meio */}
    <line x1="300" y1="20" x2="300" y2="380" stroke="#fff" strokeWidth="2" />
    {/* círculo central */}
    <circle cx="300" cy="200" r="60" fill="none" stroke="#fff" strokeWidth="2" />
    <circle cx="300" cy="200" r="4" fill="#fff" />
    {/* grande área esquerda */}
    <rect x="20" y="110" width="100" height="180" fill="none" stroke="#fff" strokeWidth="1.5" />
    {/* grande área direita */}
    <rect x="480" y="110" width="100" height="180" fill="none" stroke="#fff" strokeWidth="1.5" />
    {/* pequena área esquerda */}
    <rect x="20" y="155" width="40" height="90" fill="none" stroke="#fff" strokeWidth="1.5" />
    {/* pequena área direita */}
    <rect x="540" y="155" width="40" height="90" fill="none" stroke="#fff" strokeWidth="1.5" />
    {/* pênalti esquerdo */}
    <circle cx="78" cy="200" r="4" fill="#fff" />
    {/* pênalti direito */}
    <circle cx="522" cy="200" r="4" fill="#fff" />
    {/* arco esquerdo */}
    <path d="M120,150 A60,60 0 0,0 120,250" fill="none" stroke="#fff" strokeWidth="1.5" />
    {/* arco direito */}
    <path d="M480,150 A60,60 0 0,1 480,250" fill="none" stroke="#fff" strokeWidth="1.5" />
    {/* canto arcos */}
    <path d="M20,20 Q36,20 36,36" fill="none" stroke="#fff" strokeWidth="1.5" />
    <path d="M580,20 Q564,20 564,36" fill="none" stroke="#fff" strokeWidth="1.5" />
    <path d="M20,380 Q36,380 36,364" fill="none" stroke="#fff" strokeWidth="1.5" />
    <path d="M580,380 Q564,380 564,364" fill="none" stroke="#fff" strokeWidth="1.5" />
  </svg>
)

/* ─── Input animado ─── */
function FloatingInput({ label, type, value, onChange, error }) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  return (
    <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
      <label
        style={{
          position: 'absolute',
          left: '16px',
          top: active ? '6px' : '18px',
          fontSize: active ? '0.68rem' : '0.95rem',
          color: focused ? '#00c6ff' : 'rgba(255,255,255,0.74)',
          transition: 'all 0.22s cubic-bezier(0.22,1,0.36,1)',
          pointerEvents: 'none',
          letterSpacing: active ? '0.08em' : '0',
          textTransform: active ? 'uppercase' : 'none',
          fontFamily: '"Bebas Neue", "Oswald", sans-serif',
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          padding: '22px 16px 8px',
          background: focused
            ? 'rgba(0,198,255,0.06)'
            : 'rgba(255,255,255,0.05)',
          border: `1px solid ${error ? '#ff4d6d' : focused ? '#00c6ff' : 'rgba(255,255,255,0.12)'}`,
          borderRadius: '8px',
          color: '#fff',
          fontSize: '1rem',
          outline: 'none',
          transition: 'all 0.22s',
          boxSizing: 'border-box',
          fontFamily: '"Inter", sans-serif',
          boxShadow: focused ? '0 0 0 3px rgba(0,198,255,0.12)' : 'none',
        }}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            color: '#ff4d6d',
            fontSize: '0.75rem',
            marginTop: '4px',
            marginLeft: '4px',
          }}
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

/* ─── Componente principal ─── */
export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const containerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleMouse = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const validate = () => {
    const errs = {}
    if (!email) errs.email = 'Email obrigatório'
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = 'Email inválido'
    if (!senha) errs.senha = 'Senha obrigatória'
    else if (senha.length < 6) errs.senha = 'Mínimo 6 caracteres'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setLoading(true)
    /* simulação de autenticação – substitua pelo seu backend */
    await new Promise((r) => setTimeout(r, 1800))
    setLoading(false)
    setSuccess(true)
    setTimeout(() => navigate('/'), 1500)
  }

  /* luz de holofote que segue o cursor */
  const spotlightX = `${mousePos.x * 100}%`
  const spotlightY = `${mousePos.y * 100}%`

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        background: '#040d18',
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* ── holofote dinâmico ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 50% 60% at ${spotlightX} ${spotlightY}, rgba(0,198,255,0.07) 0%, transparent 70%)`,
          pointerEvents: 'none',
          transition: 'background 0.1s',
          zIndex: 1,
        }}
      />

      {/* ── metade esquerda — painel da marca ── */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          background: 'linear-gradient(145deg, #041020 0%, #061830 50%, #032510 100%)',
          padding: '4rem 3rem',
          borderRight: '1px solid rgba(0,198,255,0.08)',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
        className="login-left-panel"
      >
        {/* campo como textura de fundo */}
        <FieldPattern />

        {/* grade de luz de estádio */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(0,198,255,0.04) 80px),
              repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(0,198,255,0.04) 80px)
            `,
            pointerEvents: 'none',
          }}
        />

        {/* holofote superior diagonal */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '70%',
            height: '70%',
            background: 'radial-gradient(ellipse, rgba(0,198,255,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '50%',
            height: '50%',
            background: 'radial-gradient(ellipse, rgba(22,163,74,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* conteúdo da marca */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '400px' }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{ marginBottom: '2.5rem' }}
          >
            <img
              src="https://static.wixstatic.com/media/3db4e0_27f9403394064b069d5a94a0cec86f23~mv2.png"
              alt="Instituto Futuros Craques"
              style={{
                height: '80px',
                objectFit: 'contain',
                filter: 'brightness(1.2) drop-shadow(0 0 20px rgba(0,198,255,0.4))',
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{
              fontFamily: '"Bebas Neue", "Oswald", "Impact", sans-serif',
              fontSize: 'clamp(2.8rem, 4vw, 4.5rem)',
              color: '#ffffff',
              lineHeight: 0.9,
              letterSpacing: '0.02em',
              margin: 0,
              marginBottom: '1rem',
            }}
          >
            ÁREA DO
            <br />
            <span
              style={{
                background: 'linear-gradient(90deg, #00c6ff, #16a34a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              PARCEIRO
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{
              color: 'rgba(255,255,255,0.74)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              maxWidth: '300px',
              margin: '0 auto',
            }}
          >
            Acesse relatórios de impacto, acompanhe projetos e gerencie sua contribuição ao futuro do esporte.
          </motion.p>

          {/* stats flutuantes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginTop: '3rem',
            }}
          >
            {[
              { n: '1.2K', l: 'atletas' },
              { n: '12', l: 'cidades' },
              { n: '98%', l: 'aprovação' },
            ].map(({ n, l }) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: '2rem',
                    color: '#00c6ff',
                    letterSpacing: '0.05em',
                    lineHeight: 1,
                    textShadow: '0 0 20px rgba(0,198,255,0.5)',
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.62)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginTop: '2px',
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── metade direita — formulário ── */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '460px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '3rem 3.5rem',
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
        }}
        className="login-right-panel"
      >
        {/* linha decorativa diagonal */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '3px',
            height: '100%',
            background: 'linear-gradient(180deg, transparent, #00c6ff 30%, #16a34a 70%, transparent)',
            opacity: 0.5,
          }}
        />

        <div style={{ width: '100%', maxWidth: '360px' }}>
          {/* voltar ao site */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ marginBottom: '3rem' }}
          >
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'rgba(255,255,255,0.66)',
                textDecoration: 'none',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: '"Bebas Neue", sans-serif',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#00c6ff')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.66)')}
            >
              ← Voltar ao site
            </Link>
          </motion.div>

          {/* cabeçalho do form */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ marginBottom: '2.5rem' }}
          >
            <p
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: '#00c6ff',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              Área restrita
            </p>
            <h2
              style={{
                fontFamily: '"Bebas Neue", "Oswald", sans-serif',
                fontSize: '2.4rem',
                color: '#ffffff',
                letterSpacing: '0.04em',
                margin: 0,
                lineHeight: 1,
              }}
            >
              ENTRAR
            </h2>
          </motion.div>

          {/* formulário */}
          <AnimatePresence>
            {success ? (
              <motion.div
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  background: 'rgba(22,163,74,0.1)',
                  border: '1px solid rgba(22,163,74,0.3)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✓</div>
                <p style={{ color: '#4ade80', fontFamily: '"Bebas Neue", sans-serif', fontSize: '1.2rem', letterSpacing: '0.1em' }}>
                  ACESSO CONFIRMADO
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Redirecionando…</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.45 }}
                >
                  <FloatingInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.55 }}
                >
                  <FloatingInput
                    label="Senha"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    error={errors.senha}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: '2rem',
                    marginTop: '-0.5rem',
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: 'rgba(255,255,255,0.62)',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#00c6ff')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.62)')}
                  >
                    Esqueci minha senha
                  </a>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.75 }}
                  whileHover={!loading ? { scale: 1.02, boxShadow: '0 20px 50px rgba(0,198,255,0.3)' } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: loading
                      ? 'rgba(0,198,255,0.2)'
                      : 'linear-gradient(135deg, #0099cc 0%, #00c6ff 50%, #16a34a 100%)',
                    backgroundSize: '200% 100%',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: '1.1rem',
                    letterSpacing: '0.2em',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'background 0.3s',
                  }}
                >
                  {loading ? (
                    <>
                      <Spinner />
                      VERIFICANDO...
                    </>
                  ) : (
                    'ACESSAR ÁREA DO PARCEIRO'
                  )}
                </motion.button>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  style={{
                    textAlign: 'center',
                    marginTop: '1.5rem',
                    color: 'rgba(255,255,255,0.62)',
                    fontSize: '0.82rem',
                  }}
                >
                  Não tem acesso?{' '}
                  <Link
                    to="/comoapoiar"
                    style={{ color: '#00c6ff', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                  >
                    Torne-se parceiro
                  </Link>
                </motion.p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* rodapé */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            color: 'rgba(255,255,255,0.15)',
            fontSize: '0.72rem',
            letterSpacing: '0.06em',
          }}
        >
          © {new Date().getFullYear()} Instituto Futuros Craques
        </motion.p>
      </motion.div>

      {/* estilos responsive */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500&display=swap');

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .login-left-panel {
            display: none !important;
          }
          .login-right-panel {
            width: 100% !important;
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </div>
  )
}

/* ── spinner minimalista ── */
function Spinner() {
  return (
    <span
      style={{
        width: '16px',
        height: '16px',
        border: '2px solid rgba(255,255,255,0.3)',
        borderTopColor: '#fff',
        borderRadius: '50%',
        display: 'inline-block',
        animation: 'spin 0.7s linear infinite',
      }}
    />
  )
}
