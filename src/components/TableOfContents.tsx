import { useState, useEffect } from 'react';
import { List, ChevronUp } from 'lucide-react';
import type { PostContent } from '../data/posts';

interface TableOfContentsProps {
  content: PostContent[];
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const headings = content.filter(
    (item) => item.type === 'h2' || item.type === 'h3'
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    headings.forEach((heading) => {
      const id = slugify(heading.text || '');
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (text: string) => {
    const id = slugify(text);
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Table of Contents</h3>
        </div>
        <ChevronUp
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? '' : 'rotate-180'}`}
        />
      </button>

      {isOpen && (
        <nav className="mt-4 space-y-1 max-h-80 overflow-y-auto">
          {headings.map((heading, idx) => {
            const id = slugify(heading.text || '');
            const isActive = activeId === id;
            const isH3 = heading.type === 'h3';

            return (
              <button
                key={idx}
                onClick={() => scrollToHeading(heading.text || '')}
                className={`block w-full text-left text-sm py-1.5 px-2 rounded-lg transition-colors ${
                  isH3 ? 'pl-6' : ''
                } ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {heading.text}
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 60);
}
