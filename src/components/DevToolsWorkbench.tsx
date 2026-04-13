import { useMemo, useState } from 'react'

function JsonTool() {
  const [input, setInput] = useState('{"name":"mywebsite","env":"prod","ports":[5173,4173]}')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      setError('')
    } catch {
      setError('Invalid JSON')
    }
  }

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
      setError('')
    } catch {
      setError('Invalid JSON')
    }
  }

  return (
    <article className="tool-card">
      <h3 className="tool-title">JSON Formatter</h3>
      <p className="tool-sub">Format, minify, and validate payloads quickly.</p>
      <textarea className="tool-area" value={input} onChange={(e) => setInput(e.target.value)} spellCheck={false} />
      <div className="tool-actions">
        <button className="btn btn-sand" onClick={formatJson}>Format</button>
        <button className="btn btn-sand" onClick={minifyJson}>Minify</button>
      </div>
      {error ? <p className="tool-error">{error}</p> : <pre className="tool-output">{output || 'Output appears here'}</pre>}
    </article>
  )
}

function decodeBase64Utf8(value: string) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/')
  const padded = normalized + '==='.slice((normalized.length + 3) % 4)
  const raw = atob(padded)
  const bytes = Uint8Array.from(raw, (c) => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

function JwtTool() {
  const [token, setToken] = useState('')

  const decoded = useMemo(() => {
    if (!token.trim()) return { header: '', payload: '', error: '' }
    try {
      const [header, payload] = token.trim().split('.')
      if (!header || !payload) return { header: '', payload: '', error: 'Token is incomplete.' }
      return {
        header: JSON.stringify(JSON.parse(decodeBase64Utf8(header)), null, 2),
        payload: JSON.stringify(JSON.parse(decodeBase64Utf8(payload)), null, 2),
        error: '',
      }
    } catch {
      return { header: '', payload: '', error: 'Unable to decode token.' }
    }
  }, [token])

  return (
    <article className="tool-card">
      <h3 className="tool-title">JWT Decoder</h3>
      <p className="tool-sub">Inspect header and payload locally in the browser.</p>
      <textarea
        className="tool-area"
        placeholder="Paste JWT token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        spellCheck={false}
      />
      {decoded.error ? (
        <p className="tool-error">{decoded.error}</p>
      ) : (
        <div className="tool-dual">
          <pre className="tool-output">{decoded.header || 'Header'}</pre>
          <pre className="tool-output">{decoded.payload || 'Payload'}</pre>
        </div>
      )}
    </article>
  )
}

function UrlTool() {
  const [urlInput, setUrlInput] = useState('https://example.com/search?q=react&sort=desc&page=2')
  const [error, setError] = useState('')

  const parsed = useMemo(() => {
    try {
      const parsedUrl = new URL(urlInput)
      setError('')
      return {
        origin: parsedUrl.origin,
        path: parsedUrl.pathname,
        hash: parsedUrl.hash,
        params: Array.from(parsedUrl.searchParams.entries()),
      }
    } catch {
      setError('Invalid URL')
      return { origin: '', path: '', hash: '', params: [] as [string, string][] }
    }
  }, [urlInput])

  return (
    <article className="tool-card">
      <h3 className="tool-title">URL Inspector</h3>
      <p className="tool-sub">Break URL parts and query params into readable rows.</p>
      <input className="tool-input" value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />
      {error ? (
        <p className="tool-error">{error}</p>
      ) : (
        <div className="tool-list">
          <div><strong>Origin:</strong> {parsed.origin}</div>
          <div><strong>Path:</strong> {parsed.path}</div>
          <div><strong>Hash:</strong> {parsed.hash || '-'}</div>
          <div><strong>Query params:</strong></div>
          {parsed.params.length === 0 ? <div>- none</div> : parsed.params.map(([k, v]) => <div key={`${k}-${v}`}>{k} = {v}</div>)}
        </div>
      )}
    </article>
  )
}

function Base64Tool() {
  const [plain, setPlain] = useState('hello@mywebsite.dev')
  const [encoded, setEncoded] = useState('')
  const [decoded, setDecoded] = useState('')
  const [error, setError] = useState('')

  const encode = () => {
    try {
      const bytes = new TextEncoder().encode(plain)
      const binary = String.fromCharCode(...bytes)
      setEncoded(btoa(binary))
      setError('')
    } catch {
      setError('Unable to encode')
    }
  }

  const decode = () => {
    try {
      setDecoded(decodeBase64Utf8(encoded))
      setError('')
    } catch {
      setError('Invalid Base64 string')
    }
  }

  return (
    <article className="tool-card">
      <h3 className="tool-title">Base64 Encode/Decode</h3>
      <p className="tool-sub">Quickly convert text for headers and tokens.</p>
      <input className="tool-input" value={plain} onChange={(e) => setPlain(e.target.value)} placeholder="Plain text" />
      <div className="tool-actions">
        <button className="btn btn-sand" onClick={encode}>Encode</button>
        <button className="btn btn-sand" onClick={decode}>Decode</button>
      </div>
      {error && <p className="tool-error">{error}</p>}
      <pre className="tool-output">{encoded || 'Encoded result'}</pre>
      <pre className="tool-output">{decoded || 'Decoded result'}</pre>
    </article>
  )
}

async function digest(text: string, algo: AlgorithmIdentifier) {
  const data = new TextEncoder().encode(text)
  const hash = await crypto.subtle.digest(algo, data)
  return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, '0')).join('')
}

function HashTool() {
  const [text, setText] = useState('hash me')
  const [algo, setAlgo] = useState<'SHA-256' | 'SHA-1' | 'SHA-384' | 'SHA-512'>('SHA-256')
  const [result, setResult] = useState('')

  const runHash = async () => {
    setResult(await digest(text, algo))
  }

  return (
    <article className="tool-card">
      <h3 className="tool-title">Hash Generator</h3>
      <p className="tool-sub">Generate deterministic checksums for quick verification.</p>
      <input className="tool-input" value={text} onChange={(e) => setText(e.target.value)} />
      <div className="tool-actions">
        <select className="tool-select" value={algo} onChange={(e) => setAlgo(e.target.value as typeof algo)}>
          <option>SHA-256</option>
          <option>SHA-1</option>
          <option>SHA-384</option>
          <option>SHA-512</option>
        </select>
        <button className="btn btn-sand" onClick={runHash}>Generate</button>
      </div>
      <pre className="tool-output">{result || 'Hash output'}</pre>
    </article>
  )
}

function EpochTool() {
  const [epoch, setEpoch] = useState(`${Math.floor(Date.now() / 1000)}`)
  const [iso, setIso] = useState(new Date().toISOString())

  const epochToIso = () => {
    const value = Number(epoch)
    if (!Number.isFinite(value)) return
    const ms = value > 9999999999 ? value : value * 1000
    setIso(new Date(ms).toISOString())
  }

  const isoToEpoch = () => {
    const ms = Date.parse(iso)
    if (Number.isNaN(ms)) return
    setEpoch(`${Math.floor(ms / 1000)}`)
  }

  return (
    <article className="tool-card">
      <h3 className="tool-title">Epoch Converter</h3>
      <p className="tool-sub">Switch between Unix time and ISO timestamp instantly.</p>
      <input className="tool-input" value={epoch} onChange={(e) => setEpoch(e.target.value)} placeholder="Unix epoch (s/ms)" />
      <input className="tool-input" value={iso} onChange={(e) => setIso(e.target.value)} placeholder="ISO datetime" />
      <div className="tool-actions">
        <button className="btn btn-sand" onClick={epochToIso}>Epoch → ISO</button>
        <button className="btn btn-sand" onClick={isoToEpoch}>ISO → Epoch</button>
      </div>
    </article>
  )
}

const DevToolsWorkbench = () => (
  <div className="tools-grid">
    <JsonTool />
    <JwtTool />
    <UrlTool />
    <Base64Tool />
    <HashTool />
    <EpochTool />
  </div>
)

export default DevToolsWorkbench
