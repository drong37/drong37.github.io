import React from 'react';
import { PERSONAL_INFO, NEWS } from '../data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-serif font-medium text-slate-900 leading-tight">
            Hi, I'm {PERSONAL_INFO.name}.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-light">
            {PERSONAL_INFO.bio}
          </p>
          <div className="pt-4 flex items-center space-x-6 text-sm font-medium">
             <Link to="/publications" className="group flex items-center text-slate-900 border-b border-slate-300 pb-0.5 hover:border-slate-900 transition-colors">
                View Publications <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
             </Link>
             <Link to="/cv" className="group flex items-center text-slate-500 hover:text-slate-900 transition-colors">
                More about me
             </Link>
          </div>
        </div>
        
        {/* Profile Image (Placeholder) */}
        <div className="md:col-span-1 flex justify-center md:justify-end">
          <div className="relative w-48 h-48 md:w-56 md:h-56 bg-slate-100 rounded-full overflow-hidden border border-slate-100 shadow-inner">
             <img 
               src="/profile.jpg" 
               alt={PERSONAL_INFO.name}
               onError={(e) => { e.currentTarget.src = "https://picsum.photos/300/300"; e.currentTarget.style.filter = "blur(4px)"; }}
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section>
        <div className="flex items-baseline justify-between mb-8 border-b border-slate-200 pb-4">
          <h2 className="text-xl font-serif text-slate-900">Recent News</h2>
        </div>
        <div className="space-y-6">
          {NEWS.map((item) => (
            <div key={item.id} className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-8 group">
              <span className="text-sm text-slate-400 font-mono sm:text-right">{item.date}</span>
              <p className="sm:col-span-3 text-slate-700 group-hover:text-slate-900 transition-colors">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Snippet */}
      <section className="bg-slate-50 p-8 rounded-lg border border-slate-100">
         <h2 className="text-lg font-serif mb-2 text-slate-900">Get in touch</h2>
         <p className="text-slate-600 mb-4 font-light">
           I am always open to discussing new research collaborations and opportunities.
         </p>
         <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 transition-all">
           {PERSONAL_INFO.email}
         </a>
      </section>
    </div>
  );
};

export default Home;