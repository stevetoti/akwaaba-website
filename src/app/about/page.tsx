import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Akwaaba AI is built by Pacific Wave Digital — bringing AI-powered business communication to Ghana and West Africa.",
};

const values = [
  {
    icon: "🇬🇭",
    title: "Ghana First",
    description:
      "We build technology specifically for the Ghanaian market — supporting local languages, Mobile Money, and local business practices.",
  },
  {
    icon: "🤖",
    title: "AI for Everyone",
    description:
      "We believe every business, regardless of size, should have access to AI-powered tools that were once only available to large corporations.",
  },
  {
    icon: "🤝",
    title: "Customer Success",
    description:
      "Your success is our success. We provide dedicated onboarding, local support, and continuous improvements based on your feedback.",
  },
  {
    icon: "🔒",
    title: "Trust & Security",
    description:
      "We take data privacy seriously. Your customer data is encrypted, securely stored, and never shared with third parties.",
  },
];

const milestones = [
  { year: "2024", event: "Pacific Wave Digital founded in the Pacific Islands" },
  { year: "2025", event: "VanuConnect launched for the Vanuatu market" },
  { year: "2025", event: "Akwaaba AI development begins for Ghana" },
  { year: "2026", event: "Akwaaba AI launches with full multi-channel support" },
];

export default function AboutPage() {
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
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Welcome to{" "}
              <span className="text-vibrant-orange">Akwaaba AI</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
              Bringing world-class AI communication tools to Ghanaian businesses, built by Pacific Wave Digital.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mt-2 mb-6">
                Empowering Ghanaian businesses with intelligent communication
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                &ldquo;Akwaaba&rdquo; means &ldquo;Welcome&rdquo; in Twi — and that is exactly what we do. We welcome businesses into the future of customer communication with AI-powered tools that are affordable, easy to use, and built specifically for the Ghanaian market.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We understand that businesses in Ghana face unique challenges: customers prefer WhatsApp over email, Mobile Money is the primary payment method, and local language support is essential. Akwaaba AI is designed from the ground up to address these realities.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our goal is simple: help every Ghanaian business — from a market trader in Kumasi to a bank in Accra — communicate with their customers more effectively, efficiently, and intelligently.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-br from-deep-blue to-deep-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-extrabold text-vibrant-orange">5+</div>
                    <div className="text-white/70 mt-1">Communication Channels</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-vibrant-orange">24/7</div>
                    <div className="text-white/70 mt-1">AI Availability</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-vibrant-orange">3+</div>
                    <div className="text-white/70 mt-1">Local Languages</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-vibrant-orange">99.9%</div>
                    <div className="text-white/70 mt-1">Platform Uptime</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider mb-3 inline-block">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              What We Stand For
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-xl font-bold text-deep-blue mb-3">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pacific Wave Digital */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-deep-blue mb-6 text-xl">Our Journey</h3>
                <div className="space-y-6">
                  {milestones.map((m, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-vibrant-orange/10 rounded-xl flex items-center justify-center">
                          <span className="text-vibrant-orange font-bold text-sm">{m.year}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700">{m.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">
                Built by Pacific Wave Digital
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mt-2 mb-6">
                A Global Team With Local Heart
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Pacific Wave Digital is a technology company that builds communication platforms for emerging markets. Starting in the Pacific Islands with VanuConnect, we expanded to West Africa with Akwaaba AI.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We believe that great technology should be accessible to everyone, not just businesses in Silicon Valley. Our team combines global tech expertise with deep local market knowledge to build products that truly serve their communities.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Akwaaba AI is our commitment to Ghana — a product built with love, respect, and a deep understanding of what Ghanaian businesses need to thrive in the digital age.
              </p>
              <a
                href="https://pacificwavedigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vibrant-orange font-semibold hover:underline inline-flex items-center gap-1"
              >
                Visit Pacific Wave Digital
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-vibrant-orange to-vibrant-orange-600">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join the Akwaaba AI Family
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              Whether you are a startup or an enterprise, we would love to help you communicate better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.akwaabaai.com/signup"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-vibrant-orange font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-base"
              >
                Get Started Free
              </a>
              <Link href="/contact" className="btn-outline text-base">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
