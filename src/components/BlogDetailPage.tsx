import React, { useEffect } from 'react';
import { BlogPost } from '../types';
import { BLOG_DATA } from '../data';
import { Calendar, User, ChevronLeft, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';

interface BlogDetailPageProps {
  id: string;
  onBack: () => void;
  onSelectBlog: (id: string) => void;
}

export default function BlogDetailPage({ id, onBack, onSelectBlog }: BlogDetailPageProps) {
  const post = BLOG_DATA.find(b => b.id === id);

  useEffect(() => {
    // Scroll window back to top when reading a new post
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#313131] pt-24 text-center">
        <h2 className="text-2xl font-display font-bold text-white mb-4">Artículo no encontrado</h2>
        <button onClick={onBack} className="text-[#F5C518] hover:underline font-sans">Volver al Home</button>
      </div>
    );
  }

  // Get related posts (excluding current)
  const relatedPosts = BLOG_DATA.filter(b => b.id !== post.id);

  return (
    <main className="min-h-screen bg-[#313131] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-[#F5C518] hover:text-white text-xs font-sans font-bold tracking-wider uppercase mb-8 bg-white/5 border border-white/10 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10 transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Volver al Blog / Home</span>
        </button>

        {/* Article Header */}
        <header className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-[#F5C518]/10 text-[#F5C518] px-3.5 py-1 rounded-full mb-4 border border-[#F5C518]/20">
            <BookOpen className="h-3 w-3" />
            <span className="text-[10px] font-sans tracking-wider uppercase font-bold">EDUCACIÓN EN PREVENCIÓN</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-sans text-gray-400 border-y border-white/10 py-4 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-[#F5C518]" />
              <span>Publicado: {post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-[#F5C518]" />
              <span>Redactado por: {post.author}</span>
            </div>
          </div>

          {/* Primary CTA for external Boletín */}
          {post.externalLink && (
            <div className="bg-gradient-to-r from-[#D4AF37]/20 via-[#F5C518]/10 to-transparent border border-[#D4AF37]/30 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-display font-bold text-lg mb-1">
                  Boletín Interactivo
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Accedé a la versión digital completa e interactiva de este boletín informativo.
                </p>
              </div>
              <a
                href={post.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5C518] hover:bg-[#D4AF37] text-black font-sans font-extrabold text-sm px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-[#F5C518]/20 shrink-0"
              >
                <span>Abrir boletín</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}
        </header>

        {/* Cover Image */}
        {post.image && (
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-black border border-white/5 shadow-2xl mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Article Body Content */}
        <article className="prose prose-invert prose-yellow max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-6">
          {post.content.split('\n\n').map((paragraph, index) => {
            // Render Headings nicely if they start with '#'
            if (paragraph.startsWith('###')) {
              return (
                <h3 key={index} className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight pt-4 mb-2">
                  {paragraph.replace('###', '').trim()}
                </h3>
              );
            }
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight pt-6 mb-3">
                  {paragraph.replace('##', '').trim()}
                </h2>
              );
            }

            // Render Bullet lists
            if (paragraph.startsWith('*')) {
              const bullets = paragraph.split('\n');
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 mb-4">
                  {bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx}>
                      {bullet.replace('*', '').trim()}
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={index} className="whitespace-pre-line leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Secondary CTA Button at bottom of article */}
        {post.externalLink && (
          <div className="mt-10 text-center">
            <a
              href={post.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F5C518] hover:bg-[#D4AF37] text-black font-sans font-extrabold text-sm px-8 py-4 rounded-xl transition-all shadow-xl hover:scale-105"
            >
              <span>Abrir boletín completo</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        )}

        {/* Related Articles section */}
        <div className="border-t border-white/10 pt-16 mt-16">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-8">
            Otros artículos relacionados
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rPost) => (
              <div
                key={rPost.id}
                onClick={() => {
                  if (rPost.externalLink) {
                    window.open(rPost.externalLink, '_blank', 'noopener,noreferrer');
                  } else {
                    onSelectBlog(rPost.id);
                  }
                }}
                className="group bg-[#1E1E1E]/80 border border-white/5 rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 shadow-lg cursor-pointer transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden bg-black">
                  {rPost.image ? (
                    <img
                      src={rPost.image}
                      alt={rPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <span className="text-gray-500 font-display text-xs uppercase tracking-widest">{rPost.title.substring(0, 20)}...</span>
                    </div>
                  )}
                  {rPost.externalLink && (
                    <div className="absolute top-3 right-3 bg-[#D4AF37] text-black px-2 py-0.5 rounded-full text-[9px] font-sans font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <span>BOLETÍN</span>
                      <ExternalLink className="h-2.5 w-2.5" />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <span className="text-gray-400 font-sans text-[10px] block mb-2">{rPost.date}</span>
                  <h4 className="text-white font-display font-bold text-base mb-3 group-hover:text-[#F5C518] transition-colors line-clamp-2">
                    {rPost.title}
                  </h4>
                  <div className="flex items-center text-[#F5C518] text-xs font-bold group/btn">
                    {rPost.externalLink ? (
                      <span className="flex items-center gap-1">
                        <span>Abrir boletín</span>
                        <ExternalLink className="h-3.5 w-3.5 ml-1" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <span>Seguir leyendo</span>
                        <ArrowRight className="h-3.5 w-3.5 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
