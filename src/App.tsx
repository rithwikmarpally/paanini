import { useState } from 'react'
import './App.css'
import Docs from './Docs'

function App() {
  const [view, setView] = useState<'home' | 'docs'>('home');

  if (view === 'docs') {
    return <Docs onBack={() => setView('home')} />;
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo-text" onClick={() => setView('home')} style={{cursor: 'pointer'}}>पाणिनि (Paanini)</div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#install">Install</a>
          <a href="#examples">Examples</a>
          <button onClick={() => setView('docs')} className="nav-link-btn">Docs</button>
          <a href="https://github.com/rithu453/paanini" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Sanskrit Programming Language</h1>
          <p>
            Combines the beauty of Devanagari script with Python-like syntax. 
            Write code using Sanskrit keywords and execute it seamlessly!
          </p>
          <div className="cta-buttons">
            <button onClick={() => setView('docs')} className="primary-btn" style={{padding: '0.6em 1.2em', cursor: 'pointer'}}>Get Started</button>
            <a href="https://github.com/rithu453/paanini" target="_blank" rel="noreferrer" className="secondary-btn" style={{textDecoration: 'none', padding: '0.6em 1.2em', display: 'inline-block'}}>View on GitHub</a>
            <a href="https://crates.io/crates/paanini-lang" target="_blank" rel="noreferrer" className="secondary-btn" style={{textDecoration: 'none', padding: '0.6em 1.2em', display: 'inline-block'}}>View on Crates.io</a>
          </div>
        </section>

        <section id="install" className="section">
          <h2 className="section-title">Installation</h2>
          <div className="install-command">
            <code>npm install -g paanini-lang</code>
          </div>
          <p style={{textAlign: 'center', marginTop: '1rem', color: '#94a3b8'}}>
            Or via Cargo: <code>cargo install paanini-lang</code>
          </p>
        </section>

        <section id="features" className="section">
          <h2 className="section-title">Why Paanini?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>🎯 Sanskrit Keywords</h3>
              <p>Use Devanagari script for programming constructs. Code in a language that feels natural to Sanskrit speakers.</p>
            </div>
            <div className="feature-card">
              <h3>🔄 Python-like Syntax</h3>
              <p>Familiar indentation-based structure makes it easy to learn and read, even for beginners.</p>
            </div>
            <div className="feature-card">
              <h3>🌐 Web IDE</h3>
              <p>Built-in browser-based development environment with a virtual keyboard and real-time transliteration.</p>
            </div>
            <div className="feature-card">
              <h3>🚀 Transpilation</h3>
              <p>Convert your Sanskrit code to efficient Rust binaries for high performance.</p>
            </div>
          </div>
        </section>

        <section id="examples" className="section">
          <h2 className="section-title">Code Examples</h2>
          
          <div className="code-block-container">
            <div className="code-header">
              <span>hello.paanini</span>
              <span>Hello World</span>
            </div>
            <pre><code>{`!! नमस्ते विश्व - Hello World
दर्श("नमस्ते विश्व")

!! चर और गणना - Variables and Math
x = 5
y = 10
योग = x + y
दर्श("योग:", योग)

!! शर्त - Conditionals
यदि x < y:
    दर्श("x छोटा है")
अन्यथा:
    दर्श("x बड़ा है")`}</code></pre>
          </div>

          <div className="code-block-container">
            <div className="code-header">
              <span>calculator.paanini</span>
              <span>Functions & Loops</span>
            </div>
            <pre><code>{`!! गणक - Calculator
कार्य add(a, b):
    return a + b

x = 15
y = 25
दर्श("योग:", add(x, y))

!! फिबोनाची श्रृंखला
कार्य fibonacci(n):
    यदि n <= 1:
        return n
    अन्यथा:
        return fibonacci(n-1) + fibonacci(n-2)

परिभ्रमण i in परिधि(10):
    दर्श(fibonacci(i))`}</code></pre>
          </div>
        </section>

        <section id="docs" className="section">
          <h2 className="section-title">Language Reference</h2>
          <div className="feature-card table-container">
            <table>
              <thead>
                <tr>
                  <th>Sanskrit</th>
                  <th>English Equivalent</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>दर्श()</code></td>
                  <td><code>print()</code></td>
                  <td>Print/Display output</td>
                </tr>
                <tr>
                  <td><code>यदि</code></td>
                  <td><code>if</code></td>
                  <td>If condition</td>
                </tr>
                <tr>
                  <td><code>अन्यथा</code></td>
                  <td><code>else</code></td>
                  <td>Else condition</td>
                </tr>
                <tr>
                  <td><code>यावत्</code></td>
                  <td><code>while</code></td>
                  <td>While loop</td>
                </tr>
                <tr>
                  <td><code>परिभ्रमण</code></td>
                  <td><code>for</code></td>
                  <td>For loop</td>
                </tr>
                <tr>
                  <td><code>परिधि()</code></td>
                  <td><code>range()</code></td>
                  <td>Range function</td>
                </tr>
                <tr>
                  <td><code>कार्य</code></td>
                  <td><code>def/function</code></td>
                  <td>Function definition</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Paanini Developers. Licensed under MIT.</p>
      </footer>
    </div>
  )
}

export default App
