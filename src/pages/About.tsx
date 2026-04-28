import { Link } from 'react-router-dom';
import { Target, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            About <span className="text-blue-600">EarnWithAI</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are on a mission to help beginners and side hustlers leverage AI and digital strategies to build real, sustainable online income.
          </p>
        </div>

        {/* Story */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 mb-10 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              EarnWithAI started in 2024 when we noticed a massive gap: thousands of people were discovering AI tools like ChatGPT, but almost no one was teaching them how to actually <strong>make money</strong> with these tools. The internet was flooded with generic "make money online" advice, but lacked actionable, step-by-step guides specifically for the AI era.
            </p>
            <p>
              We decided to change that. Our team of digital marketers, AI enthusiasts, and former freelancers came together to create the most comprehensive resource for anyone looking to earn online using artificial intelligence. What started as a simple blog has grown into a community of over 50,000 readers across 120+ countries.
            </p>
            <p>
              Our content is tested in the real world before we publish it. Every strategy, tool recommendation, and income method has been personally tried and validated. We do not just write about making money — we actually do it, and we show you exactly how.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {[
            {
              icon: Target,
              title: 'Actionable Content',
              desc: 'Every article includes step-by-step instructions you can implement today. No fluff, no theory — just results.',
            },
            {
              icon: Users,
              title: 'Beginner-Focused',
              desc: 'We explain everything assuming zero prior knowledge. If you can use a smartphone, you can follow our guides.',
            },
            {
              icon: TrendingUp,
              title: 'Data-Driven',
              desc: 'Our recommendations are based on real market data, search trends, and proven results — not guesswork.',
            },
            {
              icon: Award,
              title: 'Ethical Monetization',
              desc: 'We only recommend tools and strategies we genuinely believe in. Transparency with our readers comes first.',
            },
          ].map((value) => (
            <div key={value.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* What We Cover */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-10 text-white mb-10">
          <h2 className="text-2xl font-bold mb-6">What We Cover</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'AI Tools for Income Generation',
              'Freelancing & Remote Work',
              'Affiliate Marketing Strategies',
              'Passive Income Ideas',
              'Social Media Growth',
              'Digital Product Creation',
              'Side Hustles for Students',
              'Online Business Building',
            ].map((topic) => (
              <div key={topic} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full" />
                <span className="text-blue-100">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Browse our most popular guides and start building your online income today. No experience required.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            Explore All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
