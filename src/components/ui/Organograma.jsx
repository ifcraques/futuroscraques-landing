/**
 * Organograma IFC
 * Estrutura:
 *   Assembléia Geral
 *     └── Presidente
 *           ├── Vice Presidente
 *           ├── Tesoureiro
 *           └── Secretaria Geral
 *                 ├── Conselho Fiscal (×3)
 *                 └── Conselho Deliberativo (×3)
 */

const ACCENT = '#1a6688'
const CARD_BG = '#e8edf2'
const CARD_BORDER = '#c4d0db'

function OrgCard({ label, bold = false, small = false }) {
  return (
    <div style={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Shadow card behind (stacked effect) */}
      <div style={{
        position: 'absolute',
        top: '-6px',
        left: '-6px',
        right: '-6px',
        bottom: '-6px',
        background: ACCENT,
        borderRadius: '10px',
        zIndex: 0,
      }} />
      {/* Front card */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        background: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: '8px',
        padding: small ? '10px 14px' : '14px 22px',
        minWidth: small ? '90px' : '120px',
        textAlign: 'center',
      }}>
        <span style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: small ? '0.65rem' : '0.72rem',
          fontWeight: bold ? 700 : 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#1a2332',
          lineHeight: 1.3,
          display: 'block',
        }}>
          {label}
        </span>
      </div>
    </div>
  )
}

function VLine({ height = 28 }) {
  return (
    <div style={{
      width: '1px',
      height: `${height}px`,
      background: '#94a3b8',
      margin: '0 auto',
    }} />
  )
}

function HLine() {
  return (
    <div style={{
      height: '1px',
      background: '#94a3b8',
      flex: 1,
    }} />
  )
}

export default function Organograma() {
  return (
    <div style={{
      padding: '2rem 1rem 3rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowX: 'auto',
    }}>
      {/* Level 1 — Assembléia Geral */}
      <OrgCard label="Assembléia Geral" bold />

      <VLine height={28} />

      {/* Level 2 — Presidente */}
      <OrgCard label="Presidente" />

      <VLine height={28} />

      {/* Level 3 horizontal connector */}
      <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', maxWidth: '640px', justifyContent: 'center' }}>
        {/* Left branch line */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingTop: 0 }}>
          <div style={{ width: '50%', height: '1px', background: '#94a3b8' }} />
        </div>
        {/* Center vertical stub */}
        <div style={{ width: '1px', background: '#94a3b8', height: '28px', flexShrink: 0 }} />
        {/* Right branch line */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingTop: 0 }}>
          <div style={{ width: '50%', height: '1px', background: '#94a3b8' }} />
        </div>
      </div>

      {/* Level 3 — VP / Tesoureiro / Secretaria Geral */}
      <div style={{
        display: 'flex',
        gap: 'clamp(1rem, 3vw, 3rem)',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <OrgCard label={'Vice\nPresidente'} bold />
          <VLine height={28} />
          {/* Level 4 under VP: Conselho Fiscal × 2 */}
          <div style={{ display: 'flex', gap: 'clamp(0.5rem, 1.5vw, 1.2rem)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              <OrgCard label="Conselho Fiscal" small />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              <OrgCard label="Conselho Fiscal" small />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <OrgCard label="Tesoureiro" bold />
          <VLine height={28} />
          {/* Level 4 under Tesoureiro: Conselho Fiscal */}
          <OrgCard label="Conselho Fiscal" small />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <OrgCard label={'Secretaria\nGeral'} />
          <VLine height={28} />
          {/* Level 4 under Secretaria: Conselho Deliberativo × 3 */}
          <div style={{ display: 'flex', gap: 'clamp(0.5rem, 1.5vw, 1.2rem)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <OrgCard label="Conselho Deliberativo" small />
            <OrgCard label="Conselho Deliberativo" small />
            <OrgCard label="Conselho Deliberativo" small />
          </div>
        </div>
      </div>
    </div>
  )
}
