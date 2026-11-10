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
        <path d="M0,150 C200,200 470,250 740,210 C950,160 1190,140 1450,210 L1510,320 L0,330 Z" />
      </svg>

      <div className="fondo-onda__contenido">{children}</div>
    </div>
  )
}