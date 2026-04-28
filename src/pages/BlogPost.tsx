import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, Tag, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { posts, getPostBySlug, getRelatedPosts } from '../data/posts';
import Sidebar from '../components/Sidebar';
import TableOfContents from '../components/TableOfContents';
import ShareButtons from '../components/ShareButtons';
import AdPlaceholder from '../components/AdPlaceholder';
import SchemaMarkup from '../components/SchemaMarkup';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h1>
          <p className="text-gray-600 mb-4">The article you are looking for does not exist.</p>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
            Browse All Articles
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.relatedSlugs);

  return (
    <>
      <SchemaMarkup post={post} />
      <div className="min-h-screen pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10">
            {/* Main Content */}
            <article className="min-w-0">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-gray-700">{post.title}</span>
              </nav>

              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 font-medium rounded-full">
                  {post.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">EarnWithAI Editorial</p>
                  <p className="text-xs text-gray-500">AI & Online Income Experts</p>
                </div>
                <div className="ml-auto">
                  <ShareButtons title={post.title} url={`/blog/${post.slug}`} />
                </div>
              </div>

              {/* Table of Contents */}
              <TableOfContents content={post.content} />

              {/* Ad - After TOC */}
              <AdPlaceholder size="banner" />

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {post.content.map((block, idx) => {
                  switch (block.type) {
                    case 'h2':
                      return (
                        <h2
                          key={idx}
                          id={slugify(block.text || '')}
                          className="text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-5 scroll-mt-24"
                        >
                          {block.text}
                        </h2>
                      );
                    case 'h3':
                      return (
                        <h3
                          key={idx}
                          id={slugify(block.text || '')}
                          className="text-xl sm:text-2xl font-bold text-gray-800 mt-8 mb-4 scroll-mt-24"
                        >
                          {block.text}
                        </h3>
                      );
                    case 'p':
                      return (
                        <p key={idx} className="text-gray-700 leading-relaxed mb-5 text-base sm:text-lg">
                          {block.text}
                        </p>
                      );
                    case 'ul':
                      return (
                        <ul key={idx} className="space-y-2 mb-6 ml-5">
                          {block.items?.map((item, i) => (
                            <li key={i} className="text-gray-700 leading-relaxed text-base sm:text-lg flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    case 'ol':
                      return (
                        <ol key={idx} className="space-y-2 mb-6 ml-5 list-decimal">
                          {block.items?.map((item, i) => (
                            <li key={i} className="text-gray-700 leading-relaxed text-base sm:text-lg pl-2">
                              {item}
                            </li>
                          ))}
                        </ol>
                      );
                    case 'blockquote':
                      return (
                        <blockquote
                          key={idx}
                          className="border-l-4 border-blue-500 bg-blue-50 pl-6 pr-4 py-4 my-6 rounded-r-lg"
                        >
                          <p className="text-gray-800 italic text-base sm:text-lg leading-relaxed">
                            "{block.text}"
                          </p>
                        </blockquote>
                      );
                    case 'cta':
                      return (
                        <div key={idx} className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 my-8">
                          <p className="text-gray-800 mb-3 text-base sm:text-lg">{block.ctaText}</p>
                          <Link
                            to={block.ctaLink || '/'}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                          >
                            {block.ctaLabel} <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
              </div>

              {/* Ad - Mid Content */}
              <AdPlaceholder size="rectangle" />

              {/* FAQ Section */}
              {post.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {post.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-shadow"
                      >
                        <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                          <span className="text-blue-600 shrink-0">Q:</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-5">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-gray-100">
                <Tag className="w-4 h-4 text-gray-400" />
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?search=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              {/* Ad - End of Article */}
              <AdPlaceholder size="leaderboard" />

              {/* Share */}
              <div className="flex items-center justify-between mt-8 py-6 border-t border-gray-100">
                <ShareButtons title={post.title} url={`/blog/${post.slug}`} />
                <Link
                  to="/blog"
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">You Might Also Like</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        to={`/blog/${related.slug}`}
                        className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow group"
                      >
                        <img
                          src={related.image}
                          alt={related.imageAlt}
                          className="w-20 h-20 object-cover rounded-lg shrink-0"
                          loading="lazy"
                        />
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                            {related.title}
                          </h4>
                          <span className="text-xs text-gray-500 mt-1">{related.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 60);
}
