/**
 * ========================================
 * ScrollToTop - Scroll automático ao trocar de página
 * ========================================
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll para o topo ao trocar de página
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop