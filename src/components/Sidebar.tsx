import { Link } from 'react-router-dom';
import { TrendingUp, Mail, ArrowRight, Star, Zap } from 'lucide-react';
import { posts, getPopularPosts } from '../data/posts';

export default function Sidebar() {
  const popularPosts = getPopularPosts();

  return (
    <aside className="space-y-8">
      {/* Newsletter Widget */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-5 h-5" />
          <h3 className="font-semibold">Free AI Tools Guide</h3>
        </div>
        <p className="text-sm text-blue-100 mb-4 leading-relaxed">
          Get our exclusive guide: "10 AI Tools to Make Your First $1,000 Online" delivered to your inbox.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks for subscribing! Check your email for the free guide.');
          }}
          className="space-y-2"
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            className="w-full px-3 py-2.5 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button
            type="submit"
            className="w-full px-3 py-2.5 text-sm font-semibold bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-1"
          >
            Get Free Guide <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        <p className="text-xs text-blue-200 mt-3">No spam. Unsubscribe anytime.</p>
      </div>

      {/* Ad Placeholder - Sidebar Top */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Advertisement</p>
        <div className="bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg h-[250px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-gray-500 font-medium">Ad Space</p>
            <p className="text-xs text-gray-400 mt-1">300x250</p>
          </div>
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-orange-500" />
          <h3 className="font-semibold text-gray-900">Trending Now</h3>
        </div>
        <div className="space-y-4">
          {popularPosts.map((post, idx) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="flex gap-3 group"
            >
              <span className="text-2xl font-bold text-gray-200 group-hover:text-blue-200 transition-colors shrink-0 w-6">
                {idx + 1}
              </span>
              <div>
                <h4 className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-400 mt-1">{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Affiliate Tools */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-yellow-500" />
          <h3 className="font-semibold text-gray-900">Recommended Tools</h3>
        </div>
        <div className="space-y-3">
          {[
            { name: 'ChatGPT Plus', desc: 'Unlock GPT-5 for advanced AI tasks', url: 'https://chat.openai.com' },
            { name: 'Canva Pro', desc: 'Professional design made easy', url: 'https://canva.com' },
            { name: 'Hostinger', desc: 'Fast hosting from ₹79/month', url: 'https://hostinger.com' },
            { name: 'Notion', desc: 'Organize your entire business', url: 'https://notion.so' },
          ].map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                <Star className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </p>
                <p className="text-xs text-gray-500">{tool.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Ad Placeholder - Sidebar Bottom */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Advertisement</p>
        <div className="bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg h-[250px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-gray-500 font-medium">Ad Space</p>
            <p className="text-xs text-gray-400 mt-1">300x250</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {posts.flatMap(p => p.tags).filter((v, i, a) => a.indexOf(v) === i).slice(0, 12).map((tag) => (
            <Link
              key={tag}
              to={`/blog?search=${encodeURIComponent(tag)}`}
              className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
