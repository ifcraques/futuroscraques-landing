import { useState } from 'react'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { cn } from '@/lib/utils'

// Imports estáticos — Vite garante que as fotos carregam
import imgGustavo  from '@/assets/time/gustavo.jpg'
import imgGenoveva from '@/assets/time/genoveva.jpg'
import imgManoel   from '@/assets/time/manoel.jpg'
import imgAriane   from '@/assets/time/ariane.jpg'
import imgJean     from '@/assets/time/jean.jpg'
import imgVivian   from '@/assets/time/vivian.jpg'
import imgLeo      from '@/assets/time/leo.jpg'
import imgVanessa  from '@/assets/time/vanessa.png'
import imgSandra   from '@/assets/time/sandra.png'
import imgJulia    from '@/assets/time/julia.png'

// Placeholder SVG inline para quem ainda não tem foto
const PLACEHOLDER = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e8ede8'/%3E%3Ccircle cx='200' cy='155' r='70' fill='%23c5d4c5'/%3E%3Cellipse cx='200' cy='340' rx='110' ry='80' fill='%23c5d4c5'/%3E%3C/svg%3E`

const IFC_MEMBERS = [
  {
    id: '1',
    name: 'Gustavo Bracco',
    role: 'Diretor',
    image: imgGustavo,
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '2',
    name: 'Genoveva Rodrigues Simão',
    role: 'Vice-Presidente',
    image: imgGenoveva,
    social: { linkedin: '#' },
  },
  {
    id: '3',
    name: 'Manoel Alves',
    role: 'Presidente',
    image: imgManoel,
    social: { linkedin: '#' },
  },
  {
    id: '4',
    name: 'Sandra Silva',
    role: 'Diretora Financeira',
    image: imgSandra,
    social: { linkedin: '#' },
  },
  {
    id: '5',
    name: 'Ariane Rodrigues',
    role: 'Diretora',
    image: imgAriane,
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '6',
    name: 'Jean Brito',
    role: 'Assessor Administrativo',
    image: imgJean,
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '7',
    name: 'Vivian Alves',
    role: 'Assessora Administrativa',
    image: imgVivian,
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '8',
    name: 'Leo Willians',
    role: 'Coordenador Esportivo',
    image: imgLeo,
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '9',
    name: 'Vanessa Struckl',
    role: 'Marketing',
    image: imgVanessa,
    social: { linkedin: '#' },
  },
  {
    id: '10',
    name: 'Julia Camilo',
    role: 'Assistente Social',
    image: imgJulia,
    social: { linkedin: '#' },
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
