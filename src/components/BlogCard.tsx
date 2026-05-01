import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../data/posts';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
                {post.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-tight">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all">
              Read Article <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-800 rounded-full">
            {post.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-2 text-blue-600 font-medium text-xs group-hover:gap-3 transition-all">
          Read More <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
