import React, { useState, useEffect } from 'react'
export const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const isTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true)
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', isTop)
  }, [scrollToTop])
  return (
    <>
      <button
        className='flex items-center justify-center'
        style={{
          position: 'fixed',
          right: 50,
          bottom: 50,
          opacity: showScroll ? 1 : 0,
          height: 45,
          width: 45,
          borderRadius: 8,
          cursor: 'pointer',
          zIndex: 1,
          transition: 'all 500ms ease-out',
          background: '#F19F00'
        }}
        onClick={scrollToTop}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-6 h-6 text-white'
        >
          <path stroke-linecap='round' stroke-linejoin='round' d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18' />
        </svg>
      </button>
    </>
  )
}
