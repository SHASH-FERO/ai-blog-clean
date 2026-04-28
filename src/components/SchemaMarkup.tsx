import type { BlogPost } from '../data/posts';

interface SchemaMarkupProps {
  post: BlogPost;
}

export default function SchemaMarkup({ post }: SchemaMarkupProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'EarnWithAI',
      url: 'https://earnwithai.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'EarnWithAI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://earnwithai.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://earnwithai.com/blog/${post.slug}`,
    },
  };

  const faqSchema = post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const schemas: unknown[] = [articleSchema];
  if (faqSchema) schemas.push(faqSchema);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas) }}
    />
  );
}
