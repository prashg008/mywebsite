import { useEffect } from 'react'

const HIDDEN_TITLES = ['☕ Back already?', '🔭 Still here?', '🌙 Taking a break?']
const DEFAULT_TITLE = 'Prashanth G'
let hiddenIdx = 0

export function useTabTitle(): void {
  useEffect(() => {
    const handler = () => {
      if (document.hidden) {
        document.title = HIDDEN_TITLES[hiddenIdx % HIDDEN_TITLES.length]
        hiddenIdx++
      } else {
        document.title = DEFAULT_TITLE
      }
    }
    document.addEventListener('visibilitychange', handler)
    return () => document.removeEventListener('visibilitychange', handler)
  }, [])
}
