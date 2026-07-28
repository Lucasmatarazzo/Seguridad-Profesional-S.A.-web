import React from 'react';
import { BLOG_DATA } from '../data';
import { BlogPost } from '../types';
import { Calendar, User, ArrowRight, BookOpen, ExternalLink } from 'lucide-react';

interface BlogProps {
  onSelectBlog: (id: string) => void;
}

export default function Blog({ onSelectBlog }: BlogProps) {
  const handlePostClick = (e: React.MouseEvent, post: BlogPost) => {
    e.preventDefault();
    if (post.externalLink) {
      window.open(post.externalLink, '_blank', 'noopener,noreferrer');
    } else {
      alert(`El boletín "${post.title}" estará disponible muy pronto.`);
    }
  };

  return (
    <section id="blog" className="py-24 bg-[#313131] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F5C518] text-xs font-sans font-bold tracking-widest uppercase mb-2 block">
            BOLETÍN INFORMATIVO SPSA
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F5F5] tracking-tight mb-4">
            SPNews
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Mantenete informado con nuestro boletín mensual sobre reglamentación legal, innovación tecnológica y prevención operativa en Argentina.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_DATA.map((post: BlogPost) => (
            <a
              key={post.id}
              href={post.externalLink || '#'}
              target={post.externalLink ? "_blank" : "_self"}
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!post.externalLink) {
                  e.preventDefault();
                  alert(`El boletín "${post.title}" estará disponible muy pronto.`);
                }
              }}
              className="group bg-[#1E1E1E]/80 border border-white/5 rounded-2xl overflow-hidden hover:border-[#D4AF37]/40 shadow-xl hover:shadow-black/60 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer no-underline"
            >
              {/* Cover Image */}
              <div className="relative h-56 overflow-hidden bg-[#313131]">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <span className="text-gray-500 font-display text-sm uppercase tracking-widest">{post.title.substring(0, 20)}...</span>
                  </div>
                )}
                {/* Float tag */}
                <div className="absolute top-4 left-4 bg-[#1E1E1E]/80 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-[10px] font-sans font-bold text-[#F5C518] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="h-3 w-3" /> SPNEWS
                </div>
                {post.externalLink && (
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-black px-2.5 py-1 rounded-full text-[10px] font-sans font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <span>BOLETÍN</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-gray-400 mb-4 border-b border-white/5 pb-4">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <User className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>{post.author.split(' ')[0]}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-white tracking-tight mb-3 group-hover:text-[#F5C518] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Action arrow / button */}
                <div className="flex items-center text-[#F5C518] font-bold text-xs sm:text-sm group/btn mt-auto">
                  {post.externalLink ? (
                    <span className="flex items-center gap-1.5 text-[#F5C518]">
                      <span>Abrir boletín</span>
                      <ExternalLink className="h-4 w-4 ml-1 transform group-hover/btn:scale-110 transition-transform" />
                    </span>
                  ) : (
                    <span className="flex items-center text-gray-400">
                      <span>Próximamente</span>
                      <ArrowRight className="h-4 w-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
