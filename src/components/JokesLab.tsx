import { useMemo, useState } from 'react'

const COMMIT_TYPES = ['fix', 'feat', 'chore', 'refactor', 'docs', 'perf', 'test', 'build', 'revert', 'style']
const SCOPES = [
  'ui',
  'api',
  'auth',
  'db',
  'deploy',
  'ci',
  'types',
  'cache',
  'theme',
  'search',
  'routing',
  'state',
  'hooks',
  'infra',
  'metrics',
  'forms',
]
const VERBS = [
  'convince',
  'stabilize',
  'untangle',
  'silence',
  'appease',
  'rename',
  'de-risk',
  'tune',
  'reverse-engineer',
  'de-escalate',
  'reconcile',
  'normalize',
  'de-fragilize',
  'sanitize',
  'streamline',
  'de-flake',
  'pacify',
  'rescue',
  're-map',
]
const OBJECTS = [
  'CSS alignment drama',
  'a panicking endpoint',
  '404 mood swings',
  'a suspicious race condition',
  'legacy naming decisions',
  'dark-mode contrast politics',
  'cache trust issues',
  'a passive-aggressive spinner',
  'the query that fears indexes',
  'notification spam entropy',
  'a stubborn merge conflict',
  'cross-browser personality differences',
  'a memory leak with ambition',
  'an overachieving linter',
  'an underachieving cache key',
  'the dropdown that chose rebellion',
  'a race condition in a hurry',
  'the component that rerenders for cardio',
  'a pagination existential crisis',
]
const ENDINGS = [
  'before standup notices',
  'without waking production',
  'while pretending this was planned',
  'and keep monitoring calm',
  'with fewer emotional side effects',
  'to restore team confidence',
  'in a way future-me can explain',
  'before the next retro',
  'without creating seven follow-up tickets',
  'while preserving backward compatibility',
  'without angering CI',
  'before observability starts gossiping',
  'with graceful degradation and minimal drama',
]
const TAGS = [
  '#worksOnMyMachine',
  '#shipItCarefully',
  '#zeroRegrets',
  '#probablyFine',
  '#postMortemAvoided',
  '#blamelessButTired',
  '#hotfixEnergy',
  '#typedAndTerrified',
  '#noRollbackToday',
]

const SYSTEMS = [
  'cache',
  'CDN',
  'feature flag',
  'queue',
  'proxy',
  'browser tab',
  'ORM',
  'build server',
  'webhook',
  'cron job',
  'auth middleware',
  'load balancer',
  'service worker',
  'message broker',
  'rate limiter',
]
const CONDITIONS = [
  'under load',
  'after lunch',
  'on Tuesdays',
  'during deploy',
  'near sprint end',
  'after one retry',
  'when nobody is screen-sharing',
  'right before demo',
  'on the third refresh',
  'during perfectly normal traffic',
  'when logs look confident',
  'during peak optimism',
]
const CONSEQUENCES = [
  'started improvising',
  'entered performance art mode',
  'refused to participate',
  'found a creative interpretation of specs',
  'chose chaos over consistency',
  'declared independence',
  'responded with interpretive latency',
  'ignored basic social contracts',
  'rewrote expectations',
  'joined the bug side',
]
const RECOVERY = [
  'I added logs and negotiated peace.',
  'I rolled back and promised better variable names.',
  'I restarted it and pretended it was strategy.',
  'I wrote tests and the bug lost confidence.',
  'I fed it a hotfix and a sincere apology.',
  'I split the change set and trust was slowly restored.',
  'I removed one line and stability returned immediately.',
  'I added retries and a strongly worded TODO.',
  'I patched it, monitored it, and made tea.',
  'I turned on tracing and discovered the true villain.',
]

const YESTERDAY = [
  'fought a bug with documentation',
  'refactored a function that had trust issues',
  'reduced API response time and my blood pressure',
  'deleted code and gained inner peace',
  'fixed one warning and awakened three',
  'debugged a race condition by becoming one with the timeline',
  'replaced magic numbers with honest constants',
  'migrated configs without waking security',
  'cleaned up error handling and improved bedtime',
  'repaired pagination and team morale',
]
const TODAY = [
  'ship the safe version',
  'close the loop on flaky tests',
  'make logs readable by humans',
  'align UI without negotiating with pixels',
  'pay down chaos in small commits',
  'verify edge cases before they verify me',
  'write fewer assumptions and more assertions',
  'protect production from my own creativity',
  'reduce blast radius of today-me',
  'untangle one legacy knot at a time',
]
const BLOCKERS = [
  'coffee to code ratio',
  'CI queue and destiny',
  'mysterious staging behavior',
  'meeting gravity',
  'someone else force-pushing vibes',
  'timezone math',
  'a flaky integration with strong opinions',
  'linter warnings breeding overnight',
  'browser cache archaeology',
  'unclear acceptance criteria in ancient tickets',
]
const ROOT_CAUSES = [
  'timing',
  'state',
  'assumptions',
  'legacy magic',
  'human optimism',
  'naming decisions from 2021',
  'a hidden null path',
  'retry logic recursion',
  'timezone drift',
  'configuration entropy',
]
const MOODS = [
  'cautiously optimistic',
  'debugging-positive',
  'one coffee behind',
  'shipping-minded',
  'emotionally asynchronous',
  'log-driven and determined',
  'steady but suspicious',
  'calm with rollback readiness',
]

function randomFrom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

function maybe(value: string, probability = 0.5) {
  return Math.random() < probability ? value : ''
}

function generateCommitJoke() {
  const type = randomFrom(COMMIT_TYPES)
  const scope = randomFrom(SCOPES)
  const line = `${type}(${scope}): ${randomFrom(VERBS)} ${randomFrom(OBJECTS)} ${randomFrom(ENDINGS)}`
  const tag = maybe(` ${randomFrom(TAGS)}`, 0.65)
  return `${line}${tag}`
}

function generateExcuse() {
  const first = `The ${randomFrom(SYSTEMS)} ${randomFrom(CONDITIONS)} and ${randomFrom(CONSEQUENCES)}.`
  const second = randomFrom(RECOVERY)
  const third = maybe(` Root cause: ${randomFrom(ROOT_CAUSES)}.`, 0.55)
  return `${first} ${second}${third}`
}

function generateStandup() {
  const yesterday = randomFrom(YESTERDAY)
  const today = randomFrom(TODAY)
  const blocker = randomFrom(BLOCKERS)
  const tone = maybe(` Mood: ${randomFrom(MOODS)}.`, 0.7)
  return `Yesterday: ${yesterday}. Today: ${today}. Blockers: ${blocker}.${tone ? ` ${tone}` : ''}`
}

async function copy(text: string) {
  if (!text) return
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }
  const area = document.createElement('textarea')
  area.value = text
  document.body.appendChild(area)
  area.select()
  document.execCommand('copy')
  area.remove()
}

function JokeCard({
  title,
  subtitle,
  initialValue,
  onGenerate,
}: {
  title: string
  subtitle: string
  initialValue: string
  onGenerate: () => string
}) {
  const [value, setValue] = useState(initialValue)
  const [copied, setCopied] = useState(false)

  return (
    <article className="joke-card">
      <h3 className="joke-title">{title}</h3>
      <p className="joke-sub">{subtitle}</p>
      <div className="joke-output">{value}</div>
      <div className="joke-actions">
        <button className="btn btn-sand" onClick={() => setValue(onGenerate())}>
          New One
        </button>
        <button
          className="btn btn-sand"
          onClick={async () => {
            await copy(value)
            setCopied(true)
            window.setTimeout(() => setCopied(false), 1200)
          }}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </article>
  )
}

const JokesLab = () => {
  const firstCommit = useMemo(() => generateCommitJoke(), [])

  return (
    <div className="jokes-grid">
      <JokeCard
        title="Commit Message Generator"
        subtitle="For commits that are accurate enough and funny enough."
        initialValue={firstCommit}
        onGenerate={generateCommitJoke}
      />
      <JokeCard
        title="Bug Excuse Spinner"
        subtitle="Use only for team entertainment, never for incident reports."
        initialValue={generateExcuse()}
        onGenerate={generateExcuse}
      />
      <JokeCard
        title="Standup One-Liner"
        subtitle="Morning updates with a little bit of controlled chaos."
        initialValue={generateStandup()}
        onGenerate={generateStandup}
      />
    </div>
  )
}

export default JokesLab
