import { useMemo, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Facts grouped by theme — each group gets a different card tint
const FACT_GROUPS: { emoji: string; facts: string[] }[] = [
  {
    emoji: '☕',
    facts: [
      "I've debugged code at 2am with cold coffee. Somehow it worked.",
      "Coffee first. Then git pull. That's the workflow.",
      'I measure project complexity in cups of coffee. Most things are 3-cup problems.',
      "My commit messages get significantly better after the second coffee. The jury's still out on the third.",
      "Black coffee, dark themes. There's a pattern here.",
    ],
  },
  {
    emoji: '🔭',
    facts: [
      'I can identify a constellation faster than I can recall a CSS property from memory.',
      "Saturn's rings are objectively the best thing in the solar system. I will not take questions.",
      'Space is 100km away. Production bugs feel further.',
      "I've named exactly zero variables after planets. This is my biggest regret.",
    ],
  },
  {
    emoji: '🌿',
    facts: [
      'Mountains and beaches are the same solution to the same problem: needing perspective.',
      "I've watched a sunrise from a mountainside and a sunset from a beach in the same week. That was a good week.",
      "Nature has no 404 pages. That's why I go there.",
    ],
  },
  {
    emoji: '🚴',
    facts: [
      "Bike rides are where I solve the problems I've been staring at for three hours.",
      'Every long bike ride is just a stand-up meeting with better scenery.',
      "I've solved more bugs on a bike than at a desk. The desk doesn't know this yet.",
    ],
  },
  {
    emoji: '🎨',
    facts: [
      "I paint. It's the only medium where 'works on my machine' isn't a valid excuse.",
      'My paintings have better colour theory than my CSS. I\'ve made peace with this.',
      'Painting landscapes taught me that negative space matters. Still applying that lesson to my code.',
    ],
  },
  {
    emoji: '📺',
    facts: [
      "My anime watchlist is longer than my GitHub commit history. I'm working on both.",
      "I've cried at anime more times than at broken builds. It's not a competition.",
      'One Piece has more chapters than my codebase has lines. Both are technically unfinished.',
      'If you want my attention, mention anime. If you want my respect, mention good anime.',
    ],
  },
]

// Tint colours per group (subtle, works on dark bg)
const TINTS = [
  'rgba(201,100,66,0.08)',   // coffee — terracotta
  'rgba(100,140,201,0.08)',  // space — cool blue
  'rgba(100,180,130,0.08)',  // nature — sage
  'rgba(201,170,66,0.08)',   // bike — warm amber
  'rgba(180,100,180,0.08)',  // painting — soft purple
  'rgba(66,180,200,0.08)',   // anime — teal
]

// Small rotations for the scrapbook feel
const ROTATIONS = [-1.8, 1.2, -0.6, 1.5, -1.1, 0.8]

function spawnSparks(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  const originX = rect.left + rect.width / 2
  const originY = rect.top + rect.height / 2
  const chars = ['✦', '★', '✧', '·', '✦']
  for (let i = 0; i < 7; i++) {
    const el = document.createElement('span')
    el.className = 'fact-spark'
    el.textContent = chars[i % chars.length]
    el.style.left = `${originX}px`
    el.style.top = `${originY}px`
    const angle = (i / 7) * 360
    const dist = 28 + Math.random() * 18
    el.style.setProperty('--tx', `${Math.cos((angle * Math.PI) / 180) * dist}px`)
    el.style.setProperty('--ty', `${Math.sin((angle * Math.PI) / 180) * dist}px`)
    el.style.animationDelay = `${i * 25}ms`
    document.body.appendChild(el)
    el.addEventListener('animationend', () => el.remove())
  }
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 20, rotate: 0 },
  visible: (rot: number) => ({
    opacity: 1,
    y: 0,
    rotate: rot,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
}

const BeyondCode = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  // Pick one random fact per group
  const CARDS = useMemo(
    () =>
      FACT_GROUPS.map((g) => ({
        emoji: g.emoji,
        fact: g.facts[Math.floor(Math.random() * g.facts.length)],
      })),
    []
  )

  return (
    <section className="section-alternate" id="beyond">
      <div className="container">
        <motion.div ref={ref} variants={container} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} className="section-header">
            <p className="section-overline" style={{ color: 'var(--text-secondary-on-alt)' }}>
              The human part
            </p>
            <h2 className="section-title" style={{ color: 'var(--text-on-alt)' }}>
              Beyond the code
            </h2>
          </motion.div>

          <div className="beyond-cards">
            {CARDS.map(({ emoji, fact }, i) => (
              <motion.div
                key={i}
                custom={ROTATIONS[i]}
                variants={card}
                className="beyond-card"
                style={{ background: TINTS[i] }}
                onClick={spawnSparks}
                whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.2 } }}
              >
                <span className="beyond-card-emoji">{emoji}</span>
                <p className="beyond-card-text">{fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BeyondCode
