import React from 'react';
import { EDUCATION, EXPERIENCE } from '../data';
import { Download } from 'lucide-react';

const CV: React.FC = () => {
  return (
    <div className="space-y-16 max-w-4xl mx-auto">
      
      <div className="flex justify-between items-end border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-serif text-slate-900">Curriculum Vitae</h1>
          <p className="text-slate-500 mt-2 font-light">Academic and professional background.</p>
        </div>
        <a 
          href="#" 
          className="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors"
        >
          <Download size={16} /> Download PDF
        </a>
      </div>

      {/* Education */}
      <section>
        <h2 className="text-lg font-bold uppercase tracking-wider text-slate-400 mb-8 border-l-4 border-slate-200 pl-3">Education</h2>
        <div className="space-y-8 pl-4">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              <span className="text-sm text-slate-400 font-mono pt-1">{edu.year}</span>
              <div className="sm:col-span-3">
                <h3 className="text-lg font-medium text-slate-900">{edu.degree}</h3>
                <div className="text-slate-700">{edu.institution}</div>
                {edu.thesis && <div className="text-sm text-slate-500 mt-1 italic">{edu.thesis}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-lg font-bold uppercase tracking-wider text-slate-400 mb-8 border-l-4 border-slate-200 pl-3">Experience</h2>
        <div className="space-y-8 pl-4">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              <span className="text-sm text-slate-400 font-mono pt-1">{exp.period}</span>
              <div className="sm:col-span-3">
                <h3 className="text-lg font-medium text-slate-900">{exp.role}</h3>
                <div className="text-slate-700 mb-2">{exp.institution}</div>
                {exp.description && (
                  <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills (Hardcoded for aesthetics) */}
      <section>
        <h2 className="text-lg font-bold uppercase tracking-wider text-slate-400 mb-8 border-l-4 border-slate-200 pl-3">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pl-4">
            <div className="sm:col-span-1 text-sm text-slate-400 font-mono">Languages</div>
            <div className="sm:col-span-3 text-slate-700">Python, C++, TypeScript, Java, LaTeX</div>
            
            <div className="sm:col-span-1 text-sm text-slate-400 font-mono mt-4">Frameworks</div>
            <div className="sm:col-span-3 text-slate-700 mt-4">PyTorch, TensorFlow, React, Next.js</div>
            
            <div className="sm:col-span-1 text-sm text-slate-400 font-mono mt-4">Tools</div>
            <div className="sm:col-span-3 text-slate-700 mt-4">Git, Docker, AWS, GCP, Linux</div>
        </div>
      </section>
      
      <div className="sm:hidden pt-8">
         <a 
          href="#" 
          className="flex w-full justify-center items-center gap-2 bg-slate-100 text-slate-900 border border-slate-200 px-4 py-3 rounded-md text-sm font-medium hover:bg-slate-200 transition-colors"
        >
          <Download size={16} /> Download PDF
        </a>
      </div>

    </div>
  );
};

export default CV;