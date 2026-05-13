import React, { useState } from 'react';
import { PUBLICATIONS, PERSONAL_INFO } from '../data';
import { FileText, Code, Quote, Copy, Check } from 'lucide-react';

const Publications: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [expandedBibtex, setExpandedBibtex] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Extract unique categories, ensuring 'All' is first
  const categories = ['All', ...Array.from(new Set(PUBLICATIONS.map(p => p.category).filter(Boolean)))];

  // Filter and sort by year descending
  const filteredPubs = PUBLICATIONS
    .filter(pub => filter === 'All' || pub.category === filter)
    .sort((a, b) => b.year - a.year);

  const toggleBibtex = (id: string) => {
    setExpandedBibtex(expandedBibtex === id ? null : id);
  };

  const copyBibtex = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-12 max-w-4xl">
      <div className="border-b border-slate-200 pb-4 mb-8">
        <h1 className="text-3xl font-serif text-slate-900">Publications</h1>
        <div className="flex flex-wrap gap-2 mt-6">
          {categories.map(cat => (
            <button
              key={cat as string}
              onClick={() => setFilter(cat as string)}
              className={`text-sm px-3 py-1 rounded-full transition-all ${
                filter === cat 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat as string}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {filteredPubs.map((pub) => (
          <article key={pub.id} className="group relative pl-0 sm:pl-4 transition-all -ml-4 p-4 rounded-lg hover:bg-slate-50/50">
            {/* Title */}
            <h2 className="text-lg font-medium text-slate-900 mb-2 leading-snug">
              {pub.title}
            </h2>
            
            {/* Authors */}
            <p className="text-slate-600 mb-2">
              {pub.authors.map((author, index) => (
                <span key={index}>
                  {author === PERSONAL_INFO.name ? (
                    <span className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-2">{author}</span>
                  ) : (
                    author
                  )}
                  {index < pub.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>

            {/* Venue & Year */}
            <div className="flex items-center text-sm mb-3">
              <span className="font-serif italic text-slate-800 bg-slate-100 px-2 py-0.5 rounded mr-2">
                {pub.venue}
              </span>
              <span className="text-slate-400 font-mono">{pub.year}</span>
            </div>

            {/* Abstract */}
            {pub.abstract && (
                <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-3xl">
                    {pub.abstract}
                </p>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4 items-center">
              {pub.pdfLink && (
                <a 
                  href={pub.pdfLink} 
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-blue-600 transition-colors"
                >
                  <FileText size={14} className="mr-1.5" /> PDF
                </a>
              )}
              {pub.codeLink && (
                <a 
                  href={pub.codeLink} 
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <Code size={14} className="mr-1.5" /> Code
                </a>
              )}
              {pub.bibtex && (
                <button 
                  onClick={() => toggleBibtex(pub.id)}
                  className={`inline-flex items-center text-xs font-bold uppercase tracking-wider transition-colors ${
                    expandedBibtex === pub.id ? 'text-slate-900' : 'text-slate-400 hover:text-slate-900'
                  }`}
                >
                  <Quote size={14} className="mr-1.5" /> Cite
                </button>
              )}
            </div>

            {/* BibTeX Expandable Area */}
            {expandedBibtex === pub.id && pub.bibtex && (
              <div className="mt-4 relative animate-fade-in">
                <pre className="bg-slate-800 text-slate-200 p-4 rounded text-xs overflow-x-auto font-mono leading-relaxed border border-slate-700 shadow-inner">
                  {pub.bibtex}
                </pre>
                <button 
                  onClick={() => copyBibtex(pub.bibtex!, pub.id)}
                  className="absolute top-2 right-2 p-2 bg-slate-700/50 hover:bg-slate-600 text-white rounded transition-colors"
                  aria-label="Copy BibTeX"
                >
                  {copiedId === pub.id ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            )}
          </article>
        ))}
        
        {filteredPubs.length === 0 && (
          <p className="text-slate-500 italic">No publications found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Publications;