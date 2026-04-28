import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, BookOpen, Users, Target, Clock } from 'lucide-react';
import { posts, categories } from '../data/posts';
import BlogCard from '../components/BlogCard';

export default function Home() {
  const featuredPost = posts[0];
  const trendingPosts = posts.slice(1, 4);
  const latestPosts = posts.slice(4, 7);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Updated for 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Master AI Tools &<br />
              <span className="text-blue-600">Start Earning Online</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover proven strategies to make money with AI, build passive income streams, and grow your digital presence. Join thousands of readers turning knowledge into income.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Start Earning Today <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blog/best-ai-tools-to-make-money-2026"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Read Top Guide
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 mt-10 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                50K+ Readers
              </span>
              <span className="flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                8 In-Depth Guides
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Weekly Updates
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/blog?category=${cat.slug}`}
                className="px-5 py-2.5 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium rounded-xl border border-gray-100 hover:border-blue-200 transition-all"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
          </div>
          <BlogCard post={featuredPost} featured />
        </div>
      </section>

      {/* Trending Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
            </div>
            <Link
              to="/blog"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {trendingPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Start Your Online Income Journey?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Get our free guide "10 AI Tools to Make Your First $1,000" and join 50,000+ readers building real online income.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing! Check your email for the free guide.');
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
              >
                Get Free Guide
              </button>
            </form>
            <p className="text-xs text-blue-200 mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            </div>
            <Link
              to="/blog"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Articles Published', value: '50+' },
              { label: 'Monthly Readers', value: '50K+' },
              { label: 'Countries Reached', value: '120+' },
              { label: 'Success Stories', value: '1,000+' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
