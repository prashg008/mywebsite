import { useEffect, useRef, useState } from 'react'

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export function useKonami(): boolean {
  const [triggered, setTriggered] = useState(false)
  const seqRef = useRef<string[]>([])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const next = [...seqRef.current, e.key].slice(-KONAMI.length)
      seqRef.current = next
      if (next.join(',') === KONAMI.join(',')) {
        setTriggered(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return triggered
}

export function useKonamiWithDismiss(): [boolean, () => void] {
  const [triggered, setTriggered] = useState(false)
  const seqRef = useRef<string[]>([])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const next = [...seqRef.current, e.key].slice(-KONAMI.length)
      seqRef.current = next
      if (next.join(',') === KONAMI.join(',')) {
        setTriggered(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const dismiss = () => setTriggered(false)
  return [triggered, dismiss]
}
