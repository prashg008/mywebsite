import { useEffect } from 'react'

const SPELL = 'coffee'

export function useCoffeeSpell(onTrigger: () => void): void {
  useEffect(() => {
    let buffer = ''
    const handler = (e: KeyboardEvent) => {
      const target = e.target
      if (!(target instanceof HTMLElement)) return
      const tag = target.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      buffer = (buffer + e.key).slice(-SPELL.length)
      if (buffer === SPELL) {
        onTrigger()
        buffer = ''
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onTrigger])
}
