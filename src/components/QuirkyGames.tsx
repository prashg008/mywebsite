import { useEffect, useMemo, useRef, useState } from 'react'

type CoffeeDrop = {
  x: number
  y: number
  vy: number
}

const COFFEE_WIDTH = 340
const COFFEE_HEIGHT = 210
const CATCHER_WIDTH = 54
const CATCHER_HEIGHT = 12

function CoffeeCatcherGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number | null>(null)
  const runningRef = useRef(true)
  const speedRef = useRef(0)
  const dropsRef = useRef<CoffeeDrop[]>([])
  const lastSpawnRef = useRef(0)
  const lastFrameRef = useRef(0)
  const catcherXRef = useRef((COFFEE_WIDTH - CATCHER_WIDTH) / 2)

  const [score, setScore] = useState(0)
  const [misses, setMisses] = useState(0)

  useEffect(() => {
    runningRef.current = misses < 5
  }, [misses])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') speedRef.current = -240
      if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') speedRef.current = 240
      if (e.key.toLowerCase() === 'r' && misses >= 5) {
        setScore(0)
        setMisses(0)
        dropsRef.current = []
      }
    }

    const onKeyUp = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight', 'a', 'd'].includes(e.key.toLowerCase())) speedRef.current = 0
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [misses])

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return

    const draw = (now: number) => {
      if (!lastFrameRef.current) lastFrameRef.current = now
      const dt = Math.min((now - lastFrameRef.current) / 1000, 0.05)
      lastFrameRef.current = now

      ctx.clearRect(0, 0, COFFEE_WIDTH, COFFEE_HEIGHT)
      ctx.fillStyle = 'rgba(201,100,66,0.12)'
      ctx.fillRect(0, 0, COFFEE_WIDTH, COFFEE_HEIGHT)

      if (runningRef.current) {
        catcherXRef.current += speedRef.current * dt
        catcherXRef.current = Math.max(0, Math.min(COFFEE_WIDTH - CATCHER_WIDTH, catcherXRef.current))

        if (now - lastSpawnRef.current > 500) {
          lastSpawnRef.current = now
          dropsRef.current.push({
            x: 16 + Math.random() * (COFFEE_WIDTH - 32),
            y: -20,
            vy: 75 + Math.random() * 45,
          })
        }

        const survivors: CoffeeDrop[] = []
        let caught = 0
        let missed = 0

        for (const d of dropsRef.current) {
          const nextY = d.y + d.vy * dt
          const hitY = nextY + 10 >= COFFEE_HEIGHT - 22
          const hitX = d.x >= catcherXRef.current && d.x <= catcherXRef.current + CATCHER_WIDTH

          if (hitY && hitX) {
            caught += 1
            continue
          }
          if (nextY > COFFEE_HEIGHT + 20) {
            missed += 1
            continue
          }

          survivors.push({ ...d, y: nextY })
        }

        if (caught) setScore((s) => s + caught)
        if (missed) setMisses((m) => m + missed)
        dropsRef.current = survivors
      }

      for (const d of dropsRef.current) {
        ctx.font = '18px Georgia'
        ctx.fillText('☕', d.x - 8, d.y)
      }

      ctx.fillStyle = '#141413'
      ctx.fillRect(catcherXRef.current, COFFEE_HEIGHT - 22, CATCHER_WIDTH, CATCHER_HEIGHT)
      ctx.fillStyle = '#faf9f5'
      ctx.font = '11px system-ui'
      ctx.fillText('MUG', catcherXRef.current + 14, COFFEE_HEIGHT - 13)

      if (!runningRef.current) {
        ctx.fillStyle = 'rgba(20,20,19,0.75)'
        ctx.fillRect(0, 0, COFFEE_WIDTH, COFFEE_HEIGHT)
        ctx.fillStyle = '#faf9f5'
        ctx.font = '16px Georgia'
        ctx.fillText('Game over', COFFEE_WIDTH / 2 - 38, COFFEE_HEIGHT / 2 - 8)
        ctx.font = '12px system-ui'
        ctx.fillText('Press R to restart', COFFEE_WIDTH / 2 - 47, COFFEE_HEIGHT / 2 + 14)
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    frameRef.current = requestAnimationFrame(draw)
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <article className="quirky-card">
      <div className="quirky-head">
        <h3 className="quirky-title">Coffee Catcher</h3>
        <p className="quirky-sub">Catch falling coffee before your focus drops.</p>
      </div>
      <canvas
        ref={canvasRef}
        className="quirky-canvas"
        width={COFFEE_WIDTH}
        height={COFFEE_HEIGHT}
        aria-label="Coffee catcher game"
      />
      <div className="quirky-stats">
        <span>Score: {score}</span>
        <span>Misses: {misses}/5</span>
      </div>
      <div className="quirky-controls" role="group" aria-label="Coffee catcher controls">
        <button className="btn btn-sand" onClick={() => (catcherXRef.current = Math.max(0, catcherXRef.current - 28))}>
          ◀ Left
        </button>
        <button
          className="btn btn-sand"
          onClick={() => (catcherXRef.current = Math.min(COFFEE_WIDTH - CATCHER_WIDTH, catcherXRef.current + 28))}
        >
          Right ▶
        </button>
      </div>
    </article>
  )
}

const STAR_BUTTONS = ['✦', '✧', '★', '✶']

function ConstellationMemoryGame() {
  const [sequence, setSequence] = useState<number[]>([])
  const [playerStep, setPlayerStep] = useState(0)
  const [highlighted, setHighlighted] = useState<number | null>(null)
  const [status, setStatus] = useState<'idle' | 'showing' | 'playing' | 'failed'>('idle')
  const [best, setBest] = useState(0)

  const playRound = (nextSequence: number[]) => {
    setStatus('showing')
    setPlayerStep(0)
    nextSequence.forEach((star, idx) => {
      const start = 450 * idx
      window.setTimeout(() => setHighlighted(star), start + 120)
      window.setTimeout(() => setHighlighted(null), start + 360)
    })
    window.setTimeout(() => setStatus('playing'), nextSequence.length * 450 + 120)
  }

  const start = () => {
    const fresh = [Math.floor(Math.random() * STAR_BUTTONS.length)]
    setSequence(fresh)
    playRound(fresh)
  }

  const onPress = (idx: number) => {
    if (status !== 'playing') return
    if (idx !== sequence[playerStep]) {
      setStatus('failed')
      setBest((b) => Math.max(b, sequence.length - 1))
      return
    }

    const nextStep = playerStep + 1
    if (nextStep === sequence.length) {
      const extended = [...sequence, Math.floor(Math.random() * STAR_BUTTONS.length)]
      setSequence(extended)
      window.setTimeout(() => playRound(extended), 350)
      return
    }

    setPlayerStep(nextStep)
  }

  const caption = useMemo(() => {
    if (status === 'showing') return 'Watch the stars...'
    if (status === 'playing') return `Your turn: step ${playerStep + 1}/${sequence.length}`
    if (status === 'failed') return 'Wrong constellation. Tap start to try again.'
    return 'Memorize and replay the sequence.'
  }, [playerStep, sequence.length, status])

  return (
    <article className="quirky-card">
      <div className="quirky-head">
        <h3 className="quirky-title">Constellation Memory</h3>
        <p className="quirky-sub">Repeat the star rhythm and build a longer sky.</p>
      </div>
      <p className="quirky-caption">{caption}</p>
      <div className="star-grid">
        {STAR_BUTTONS.map((star, idx) => (
          <button
            key={star}
            className={`star-btn${highlighted === idx ? ' is-hot' : ''}`}
            onClick={() => onPress(idx)}
            disabled={status !== 'playing'}
            aria-label={`Star ${idx + 1}`}
          >
            {star}
          </button>
        ))}
      </div>
      <div className="quirky-stats">
        <span>Round: {Math.max(0, sequence.length - (status === 'failed' ? 1 : 0))}</span>
        <span>Best: {best}</span>
      </div>
      <button className="btn btn-brand" onClick={start}>Start Round</button>
    </article>
  )
}

function BugHuntGame() {
  const [timeLeft, setTimeLeft] = useState(20)
  const [score, setScore] = useState(0)
  const [activeCell, setActiveCell] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    if (timeLeft <= 0) {
      setRunning(false)
      return
    }

    const timer = window.setInterval(() => setTimeLeft((t) => t - 1), 1000)
    const mover = window.setInterval(() => setActiveCell(Math.floor(Math.random() * 9)), 650)

    return () => {
      window.clearInterval(timer)
      window.clearInterval(mover)
    }
  }, [running, timeLeft])

  const start = () => {
    setScore(0)
    setTimeLeft(20)
    setActiveCell(Math.floor(Math.random() * 9))
    setRunning(true)
  }

  return (
    <article className="quirky-card">
      <div className="quirky-head">
        <h3 className="quirky-title">Bug Hunt</h3>
        <p className="quirky-sub">Click the bug before it escapes to production.</p>
      </div>
      <div className="bug-grid" role="grid" aria-label="Bug hunt grid">
        {Array.from({ length: 9 }).map((_, idx) => (
          <button
            key={idx}
            className="bug-cell"
            onClick={() => {
              if (running && idx === activeCell) {
                setScore((s) => s + 1)
                setActiveCell(Math.floor(Math.random() * 9))
              }
            }}
          >
            {running && idx === activeCell ? '🐞' : '·'}
          </button>
        ))}
      </div>
      <div className="quirky-stats">
        <span>Score: {score}</span>
        <span>Time: {Math.max(0, timeLeft)}s</span>
      </div>
      <button className="btn btn-brand" onClick={start}>{running ? 'Restart' : 'Start Hunt'}</button>
    </article>
  )
}

const QuirkyGames = () => (
  <div className="quirky-arcade" id="explore-games">
    <div className="quirky-grid">
      <CoffeeCatcherGame />
      <ConstellationMemoryGame />
      <BugHuntGame />
    </div>
  </div>
)

export default QuirkyGames
