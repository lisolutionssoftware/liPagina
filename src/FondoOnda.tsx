import type { ReactNode } from 'react'

export default function FondoOnda({ children }: { children?: ReactNode }) {
  return (
    <div className="fondo-onda">
      <svg
        className="fondo-onda__ola"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,180 C100,200 400,250 720,210 C940,170 1190,180 1450,210 L1510,370 L0,330 Z" />
      </svg>

      <div className="fondo-onda__contenido">{children}</div>
    </div>
  )
}