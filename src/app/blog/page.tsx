import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tutorials, and updates from the Akwaaba AI team on business communication, AI, and growing your business in Ghana.",
};

const comingSoonPosts = [
  {
    title: "How AI Chatbots Are Transforming Customer Service in Ghana",
    category: "AI & Technology",
    excerpt: "Discover how Ghanaian businesses are using AI-powered chatbots to provide 24/7 customer support and reduce response times by up to 80%.",
    date: "Coming Soon",
  },
  {
    title: "The Complete Guide to WhatsApp Business in Ghana",
    category: "Guides",
    excerpt: "Everything you need to know about setting up, managing, and scaling your business communication on WhatsApp in the Ghanaian market.",
    date: "Coming Soon",
  },
  {
    title: "5 SMS Campaign Strategies That Work for Ghanaian Businesses",
    category: "Marketing",
    excerpt: "Proven SMS marketing strategies tailored for the Ghanaian market, including timing, personalisation, and Mobile Money integration.",
    date: "Coming Soon",
  },
  {
    title: "Building Multi-Channel Communication: A Step-by-Step Guide",
    category: "Tutorials",
    excerpt: "Learn how to set up and manage customer communication across WhatsApp, SMS, web chat, and social media from a single platform.",
    date: "Coming Soon",
  },
  {
    title: "Data Protection for Ghanaian Businesses: What You Need to Know",
    category: "Compliance",
    excerpt: "A practical guide to Ghana's Data Protection Act and how to ensure your customer communication is compliant.",
    date: "Coming Soon",
  },
  {
    title: "Case Study: How a Kumasi Retailer Grew Sales 40% with Akwaaba AI",
    category: "Case Studies",
    excerpt: "See how a mid-size retail business in Kumasi used AI chatbots and WhatsApp campaigns to dramatically increase customer engagement.",
    date: "Coming Soon",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-deep-blue-700 to-deep-blue-900" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-vibrant-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <span className="inline-block bg-white/10 text-white font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Insights &{" "}
              <span className="text-vibrant-orange">Updates</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
              Tips, tutorials, and insights on business communication, AI technology, and growing your business in Ghana.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-vibrant-orange/10 text-vibrant-orange font-semibold text-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-vibrant-orange rounded-full animate-pulse" />
              Coming Soon
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              We Are Working on Something Great
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our blog is launching soon with articles, guides, case studies, and more. Here is a preview of what is coming.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonPosts.map((post, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow">
                  <span className="inline-block bg-deep-blue/5 text-deep-blue text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-deep-blue mb-3 flex-1">{post.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-vibrant-orange font-semibold">
                    <span className="w-2 h-2 bg-vibrant-orange rounded-full animate-pulse" />
                    {post.date}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Newsletter signup */}
          <AnimatedSection className="mt-16">
            <div className="bg-deep-blue rounded-2xl p-8 sm:p-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Get notified when we launch</h3>
              <p className="text-white/70 max-w-lg mx-auto mb-6">
                Be the first to read our articles. Sign up for updates and we will let you know when the blog goes live.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-vibrant-orange focus:border-transparent"
                />
                <button className="btn-primary !shadow-none whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-deep-blue mb-4">
              Cannot wait? Try Akwaaba AI now.
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              While we prepare our blog, you can explore the platform and start communicating smarter today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.akwaabaai.com/signup" className="btn-primary">
                Get Started Free
              </a>
              <Link href="/features" className="btn-outline-dark">
                Explore Features
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
