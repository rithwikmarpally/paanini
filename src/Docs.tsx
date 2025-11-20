import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { docsData } from './data/docs';
import './Docs.css';

interface DocsProps {
  onBack: () => void;
}

export default function Docs({ onBack }: DocsProps) {
  const [activeDocId, setActiveDocId] = useState(docsData[0].id);

  const activeDoc = docsData.find(d => d.id === activeDocId) || docsData[0];

  return (
    <div className="docs-container">
      <aside className="docs-sidebar">
        <div className="docs-sidebar-header">
          <button onClick={onBack} className="back-btn">← Back to Home</button>
          <h3>Documentation</h3>
        </div>
        <nav className="docs-nav">
          {docsData.map(doc => (
            <button
              key={doc.id}
              className={`docs-nav-item ${activeDocId === doc.id ? 'active' : ''}`}
              onClick={() => setActiveDocId(doc.id)}
            >
              {doc.title}
            </button>
          ))}
        </nav>
      </aside>
      <main className="docs-content">
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {activeDoc.content}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}
