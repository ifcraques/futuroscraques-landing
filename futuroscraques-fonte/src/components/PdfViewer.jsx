export default function PdfViewer({ pdfUrl, title = 'Apresentação' }) {
  const handleOpenPdf = () => {
    // Abre o PDF em uma nova aba com visualizador protegido
    // Usa toolbar=0 para esconder a barra de ferramentas do PDF incluindo download
    const url = `${pdfUrl}#toolbar=0&navpanes=0`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleOpenPdf}
      style={{
        background: 'var(--accent)',
        color: '#fff',
        border: 'none',
        padding: '1rem 2rem',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: 700,
        cursor: 'pointer',
        transition: 'all 0.3s',
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-3px)'
        e.target.style.boxShadow = '0 8px 20px rgba(0,162,232,0.3)'
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)'
        e.target.style.boxShadow = 'none'
      }}
    >
      📄 {title}
    </button>
  )
}
