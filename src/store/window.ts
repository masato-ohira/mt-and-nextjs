import { useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'

// state
// ------------------------------
const scrolledState = atom({
  key: 'window/scrolledState',
  default: false,
})

// hooks
// ------------------------------
export const useWindowEffect = () => {
  const [scrolled, setScrolled] = useRecoilState(scrolledState)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export const useWindow = () => {
  const [scrolled, setScrolled] = useRecoilState(scrolledState)

  return {
    scrolled,
    setScrolled,
  }
}
