import { useState } from 'react'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { cn } from '@/lib/utils'

/**
 * TeamShowcase — Seção TIME do IFC
 * Grade de fotos interativa com hover e links sociais.
 * Fotos: pessoas diversas, trajes formais/elegantes.
 */

const IFC_MEMBERS = [
  {
    id: '1',
    name: 'Marcos Andrade',
    role: 'Professor de Educação Física',
    image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=500&fit=crop&crop=top',
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '2',
    name: 'Dra. Camila Ferreira',
    role: 'Médica e Nutricionista',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=top',
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '3',
    name: 'Rafael Costa',
    role: 'Advogado',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=top',
    social: { linkedin: '#' },
  },
  {
    id: '4',
    name: 'Dra. Priya Mendes',
    role: 'Psicóloga',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=top',
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '5',
    name: 'Thiago Barbosa',
    role: 'Engenheiro e Administrador',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=top',
    social: { linkedin: '#' },
  },
  {
    id: '6',
    name: 'Juliana Rocha',
    role: 'Comunicação e Design',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop&crop=top',
    social: { linkedin: '#', instagram: '#' },
  },
]

export default function TeamShowcase({ members = IFC_MEMBERS }) {
  const [hoveredId, setHoveredId] = useState(null)

  const col1 = members.filter((_, i) => i % 3 === 0)
  const col2 = members.filter((_, i) => i % 3 === 1)
  const col3 = members.filter((_, i) => i % 3 === 2)

  return (
    <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-16 select-none w-full max-w-5xl py-4 px-0">

      {/* ── Grade de fotos ── */}
      <div className="flex gap-2 md:gap-3 flex-shrink-0">
        {/* Coluna 1 */}
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((m) => (
            <PhotoCard
              key={m.id}
              member={m}
              className="w-[110px] h-[125px] sm:w-[130px] sm:h-[145px] md:w-[152px] md:h-[168px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
        {/* Coluna 2 — deslocada para baixo */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[52px] md:mt-[72px]">
          {col2.map((m) => (
            <PhotoCard
              key={m.id}
              member={m}
              className="w-[122px] h-[138px] sm:w-[144px] sm:h-[158px] md:w-[168px] md:h-[184px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
        {/* Coluna 3 — deslocada média */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[24px] md:mt-[34px]">
          {col3.map((m) => (
            <PhotoCard
              key={m.id}
              member={m}
              className="w-[114px] h-[130px] sm:w-[136px] sm:h-[152px] md:w-[158px] md:h-[174px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Lista de nomes ── */}
      <div className="flex flex-col gap-5 pt-1 flex-1 w-full">
        {members.map((m) => (
          <MemberRow
            key={m.id}
            member={m}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  )
}

/* ── Foto card ── */
function PhotoCard({ member, className, hoveredId, onHover }) {
  const isActive = hoveredId === member.id
  const isDimmed = hoveredId !== null && !isActive

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-300',
        className,
        isDimmed ? 'opacity-50' : 'opacity-100'
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive
            ? 'grayscale(0) brightness(1)'
            : 'grayscale(1) brightness(0.75)',
        }}
      />
    </div>
  )
}

/* ── Linha de nome + cargo ── */
function MemberRow({ member, hoveredId, onHover }) {
  const isActive  = hoveredId === member.id
  const isDimmed  = hoveredId !== null && !isActive
  const hasSocial = member.social?.linkedin || member.social?.instagram

  return (
    <div
      className={cn(
        'cursor-pointer transition-opacity duration-300',
        isDimmed ? 'opacity-40' : 'opacity-100'
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Nome + ícones sociais */}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'h-[3px] rounded-full flex-shrink-0 transition-all duration-300',
            isActive ? 'w-5 bg-green-600' : 'w-3 bg-gray-300'
          )}
        />
        <span
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className={cn(
            'text-base md:text-[17px] font-semibold leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-gray-900' : 'text-gray-600'
          )}
        >
          {member.name}
        </span>

        {/* Ícones sociais — aparecem só no hover */}
        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-1.5 ml-0.5 transition-all duration-200',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none'
            )}
          >
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-gray-400 hover:text-green-600 hover:bg-green-50 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={10} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-gray-400 hover:text-green-600 hover:bg-green-50 transition-all duration-150 hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={10} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Cargo */}
      <p
        style={{ fontFamily: "'Outfit', sans-serif" }}
        className="mt-1.5 pl-[27px] text-[10px] font-medium uppercase tracking-[0.18em] text-gray-400"
      >
        {member.role}
      </p>
    </div>
  )
}
