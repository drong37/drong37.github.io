import React from 'react';
import { PROJECTS } from '../data';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="border-b border-slate-200 pb-4 mb-8">
        <h1 className="text-3xl font-serif text-slate-900">Projects</h1>
        <p className="text-slate-500 mt-2 font-light">
          Open source libraries, tools, and experiments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group block border border-slate-200 p-6 rounded-lg hover:border-slate-300 hover:shadow-sm transition-all bg-white"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                {project.title}
              </h3>
              <div className="flex space-x-3 text-slate-400">
                {project.github && (
                  <a href={project.github} className="hover:text-slate-900 transition-colors" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="hover:text-slate-900 transition-colors" aria-label="External Link">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-slate-600 mb-6 text-sm leading-relaxed h-20 overflow-hidden">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;