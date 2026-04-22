"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

function HandWrittenTitle({
  eyebrow = null,
  title = "Hand Written",
  subtitle = "Optional subtitle",
}) {
  const controls = useAnimationControls();

  // Loop infinito: desenha → apaga → desenha → ...
  useEffect(() => {
    let cancelled = false;

    async function loop() {
      while (!cancelled) {
        await controls.start({
          pathLength: 1,
          opacity: 0.35,
          transition: {
            pathLength: { duration: 2.4, ease: [0.43, 0.13, 0.23, 0.96] },
            opacity: { duration: 0.4 },
          },
        });
        // pausa visível com o círculo completo
        await new Promise((r) => setTimeout(r, 1800));
        await controls.start({
          pathLength: 0,
          opacity: 0,
          transition: { duration: 0.8, ease: "easeIn" },
        });
        // pequena pausa antes de reiniciar
        await new Promise((r) => setTimeout(r, 400));
      }
    }

    loop();
    return () => { cancelled = true; };
  }, [controls]);

  return (
    <div className="relative w-full flex flex-col items-center text-center py-10 px-4">

      {/* Eyebrow */}
      {eyebrow && (
        <motion.p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#1a7a5e',
            marginBottom: '1.25rem',
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.p>
      )}

      {/* Bloco texto + círculo SVG sobrepostos */}
      <div className="relative inline-flex flex-col items-center">

        {/* SVG — elipse larga que abraça todo o bloco de texto */}
        <motion.svg
          viewBox="0 0 600 180"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            top: '-40px',
            left: '-60px',
            width: 'calc(100% + 120px)',
            height: 'calc(100% + 80px)',
            pointerEvents: 'none',
            overflow: 'visible',
          }}
        >
          <motion.path
            d="M 558 58
               C 610 105, 555 168, 300 170
               C 55 170, 18 138, 18 90
               C 18 42, 85 10, 300 10
               C 515 10, 572 62, 558 58"
            fill="none"
            strokeWidth="7"
            stroke="#1a7a5e"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={controls}
          />
        </motion.svg>

        {/* Título */}
        <motion.h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 400,
            color: '#0d1f2d',
            lineHeight: 1.05,
            letterSpacing: '0.02em',
            position: 'relative',
            zIndex: 1,
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>

        {/* Subtítulo em itálico */}
        {subtitle && (
          <motion.p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(1.6rem, 4vw, 3rem)',
              fontWeight: 400,
              color: '#0d1f2d',
              fontStyle: 'italic',
              lineHeight: 1.15,
              position: 'relative',
              zIndex: 1,
              marginTop: '0.1rem',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export { HandWrittenTitle };
