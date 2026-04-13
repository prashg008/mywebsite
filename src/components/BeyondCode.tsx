import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ALL_FACTS = [
  "I've debugged code at 2am with cold coffee. Somehow it worked.",
  "Coffee first. Then git pull. That's the workflow.",
  'I measure project complexity in cups of coffee. Most things are 3-cup problems.',
  "My commit messages get significantly better after the second coffee. The jury's still out on the third.",
  "Black coffee, dark themes. There's a pattern here.",
  'I can identify a constellation faster than I can recall a CSS property from memory.',
  "Saturn's rings are objectively the best thing in the solar system. I will not take questions.",
  'Space is 100km away. Production bugs feel further.',
  "I've named exactly zero variables after planets. This is my biggest regret.",
  'Mountains and beaches are the same solution to the same problem: needing perspective.',
  "I've watched a sunrise from a mountainside and a sunset from a beach in the same week. That was a good week.",
  "Nature has no 404 pages. That's why I go there.",
  "Bike rides are where I solve the problems I've been staring at for three hours.",
  'Every long bike ride is just a stand-up meeting with better scenery.',
  "I've solved more bugs on a bike than at a desk. The desk doesn't know this yet.",
  "I paint. It's the only medium where 'works on my machine' isn't a valid excuse.",
  "My paintings have better colour theory than my CSS. I've made peace with this.",
  'Painting landscapes taught me that negative space matters. Still applying that lesson to my code.',
  'My anime watchlist is longer than my GitHub commit history. I\'m working on both.',
  "I've cried at anime more times than at broken builds. It's not a competition.",
  'One Piece has more chapters than my codebase has lines. Both are technically unfinished.',
  'If you want my attention, mention anime. If you want my respect, mention good anime.',
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}
const item = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

const BeyondCode = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const facts = useMemo(() => shuffle(ALL_FACTS).slice(0, 12), [])

  const handleFactClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const markerEl = e.currentTarget.querySelector('.beyond-fact-marker') as HTMLElement
    const originX = markerEl
      ? markerEl.getBoundingClientRect().left + markerEl.offsetWidth / 2
      : rect.left + 10
    const originY = markerEl
      ? markerEl.getBoundingClientRect().top + markerEl.offsetHeight / 2
      : rect.top + rect.height / 2

    const chars = ['✦', '★', '✧', '·', '✦']
    for (let i = 0; i < 7; i++) {
      const el = document.createElement('span')
      el.className = 'fact-spark'
      el.textContent = chars[i % chars.length]
      el.style.left = `${originX}px`
      el.style.top  = `${originY}px`
      const angle = (i / 7) * 360
      const dist  = 28 + Math.random() * 18
      el.style.setProperty('--tx', `${Math.cos((angle * Math.PI) / 180) * dist}px`)
      el.style.setProperty('--ty', `${Math.sin((angle * Math.PI) / 180) * dist}px`)
      el.style.animationDelay = `${i * 25}ms`
      document.body.appendChild(el)
      el.addEventListener('animationend', () => el.remove())
    }
  }

  return (
    <section className="section-alternate" id="beyond">
      <div className="container">
        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={item} className="section-header">
            <p className="section-overline" style={{ color: 'var(--text-secondary-on-alt)' }}>
              The human part
            </p>
            <h2 className="section-title" style={{ color: 'var(--text-on-alt)' }}>
              Beyond the code
            </h2>
          </motion.div>

          <div className="beyond-facts">
            {facts.map((fact) => (
              <motion.div
                key={fact}
                variants={item}
                className="beyond-fact"
                onClick={handleFactClick}
              >
                <span className="beyond-fact-marker">✦</span>
                <span className="beyond-fact-text">{fact}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BeyondCode
