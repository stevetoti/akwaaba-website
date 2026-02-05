"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    currency: "GHS",
    description: "Get started with basic features",
    features: {
      "SMS Credits": "3 (signup bonus)",
      "URL Shortener Links": "1",
      "QR Codes": "1",
      "Landing Pages": "1",
      "Invoices": "1",
      "Templates": "1",
      "Contacts": "5",
      "Two-Way Inbox": "✅",
      "Custom Sender ID": "✅",
      "API Access": "✅",
      "Campaigns": "❌",
      "Custom Domain": "❌",
      "Team Members": "1",
    },
    cta: "Get Started",
    ctaLink: "https://app.akwaabaai.com/signup",
    popular: false,
  },
  {
    name: "Starter",
    monthlyPrice: 25,
    yearlyPrice: 21,
    currency: "GHS",
    description: "Perfect for small businesses",
    features: {
      "SMS Credits": "Pay-as-you-go",
      "URL Shortener Links": "50/month",
      "QR Codes": "20/month",
      "Landing Pages": "3",
      "Invoices": "20/month",
      "Templates": "20",
      "Contacts": "500",
      "Two-Way Inbox": "✅",
      "Custom Sender ID": "✅",
      "API Access": "✅",
      "Campaigns": "10/month",
      "Custom Domain": "✅",
      "Team Members": "1",
    },
    cta: "Subscribe",
    ctaLink: "https://app.akwaabaai.com/signup",
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 50,
    yearlyPrice: 42,
    currency: "GHS",
    description: "For growing businesses",
    features: {
      "SMS Credits": "25 free/month",
      "URL Shortener Links": "500/month",
      "QR Codes": "100/month",
      "Landing Pages": "10",
      "Invoices": "100/month",
      "Templates": "100",
      "Contacts": "2,500",
      "Two-Way Inbox": "✅",
      "Custom Sender ID": "✅",
      "API Access": "✅",
      "Campaigns": "50/month",
      "Custom Domain": "✅",
      "Team Members": "3",
    },
    cta: "Subscribe",
    ctaLink: "https://app.akwaabaai.com/signup",
    popular: true,
  },
  {
    name: "Business",
    monthlyPrice: 120,
    yearlyPrice: 102,
    currency: "GHS",
    description: "Full featured for professionals",
    features: {
      "SMS Credits": "100 free/month",
      "URL Shortener Links": "Unlimited",
      "QR Codes": "Unlimited",
      "Landing Pages": "25",
      "Invoices": "Unlimited",
      "Templates": "Unlimited",
      "Contacts": "10,000",
      "Two-Way Inbox": "✅",
      "Custom Sender ID": "✅",
      "API Access": "✅",
      "Campaigns": "Unlimited",
      "Custom Domain": "✅",
      "Team Members": "10",
    },
    cta: "Subscribe",
    ctaLink: "https://app.akwaabaai.com/signup",
    popular: false,
  },
  {
    name: "Enterprise",
    monthlyPrice: 500,
    yearlyPrice: 425,
    currency: "GHS",
    description: "Maximum value for large organizations",
    features: {
      "SMS Credits": "Custom pricing",
      "URL Shortener Links": "Unlimited",
      "QR Codes": "Unlimited",
      "Landing Pages": "Unlimited",
      "Invoices": "Unlimited",
      "Templates": "Unlimited",
      "Contacts": "Custom limits",
      "Two-Way Inbox": "✅",
      "Custom Sender ID": "✅",
      "API Access": "✅",
      "Campaigns": "Unlimited",
      "Custom Domain": "✅",
      "Team Members": "Unlimited",
    },
    cta: "Contact Sales",
    ctaLink: "/contact",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I start for free?",
    answer:
      "Yes! Our Free plan gives you access to basic features including 3 SMS credits, a URL shortener link, QR code, landing page, and two-way inbox. No credit card required.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Mobile Money (MTN MoMo, Vodafone Cash, AirtelTigo Money), Visa, Mastercard, and bank transfers for Enterprise plans.",
  },
  {
    question: "Can I upgrade or downgrade at any time?",
    answer:
      "Absolutely! You can change your plan at any time. Upgrades take effect immediately and downgrades apply at the start of your next billing cycle.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No long-term contracts. All plans are month-to-month (or annual if you choose). Cancel anytime with no penalties.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer:
      "We will notify you when you approach your limits. You can upgrade your plan or purchase additional credits. We never cut off your service without warning.",
  },
  {
    question: "Do you offer discounts for NGOs or educational institutions?",
    answer:
      "Yes! We offer special pricing for registered NGOs, educational institutions, and government agencies in Ghana. Contact our sales team for details.",
  },
];

const featureKeys = Object.keys(plans[0].features);

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              Simple Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Plans That{" "}
              <span className="text-vibrant-orange">Grow With You</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
              Start free, scale when you are ready. Transparent pricing with no hidden fees.
            </p>

            <div className="mt-10 inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className={`text-sm font-medium ${!annual ? "text-white" : "text-white/50"}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-14 h-7 rounded-full transition-colors ${annual ? "bg-vibrant-orange" : "bg-white/30"}`}
              >
                <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${annual ? "left-8" : "left-1"}`} />
              </button>
              <span className={`text-sm font-medium ${annual ? "text-white" : "text-white/50"}`}>
                Annual <span className="text-vibrant-orange font-bold">(Save 15%)</span>
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative -mt-8 z-10 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {plans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div
                className={`relative rounded-2xl p-6 h-full flex flex-col ${
                  plan.popular
                    ? "bg-deep-blue text-white shadow-2xl ring-2 ring-vibrant-orange lg:scale-105"
                    : "bg-white shadow-xl border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vibrant-orange text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-lg font-bold ${plan.popular ? "text-white" : "text-deep-blue"}`}>
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  {plan.monthlyPrice === 0 ? (
                    <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-deep-blue"}`}>
                      Free
                    </span>
                  ) : (
                    <>
                      <span className={`text-sm ${plan.popular ? "text-white/60" : "text-gray-500"}`}>
                        {plan.currency}
                      </span>
                      <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-deep-blue"}`}>
                        {annual ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className={`text-sm ${plan.popular ? "text-white/60" : "text-gray-500"}`}>/mo</span>
                    </>
                  )}
                </div>
                <p className={`mt-2 text-sm ${plan.popular ? "text-white/70" : "text-gray-500"}`}>
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-2 flex-1">
                  {Object.entries(plan.features).map(([key, value]) => (
                    <li key={key} className="flex items-start gap-2">
                      {value === "❌" ? (
                        <svg className="w-4 h-4 mt-0.5 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-vibrant-orange" : "text-green-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      <span className={`text-xs ${plan.popular ? "text-white/80" : value === "❌" ? "text-gray-400" : "text-gray-600"}`}>
                        <strong>{key}:</strong> {value === "❌" ? "Not included" : value === "✅" ? "Included" : value}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.ctaLink.startsWith("http") ? (
                  <a
                    href={plan.ctaLink}
                    className={`mt-6 inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-center text-sm ${
                      plan.popular
                        ? "bg-vibrant-orange text-white hover:bg-vibrant-orange-600 shadow-lg"
                        : "bg-deep-blue text-white hover:bg-deep-blue-700 shadow-md"
                    }`}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Link
                    href={plan.ctaLink}
                    className={`mt-6 inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-center text-sm ${
                      plan.popular
                        ? "bg-vibrant-orange text-white hover:bg-vibrant-orange-600 shadow-lg"
                        : "bg-deep-blue text-white hover:bg-deep-blue-700 shadow-md"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* All plans include */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue">
              All Plans Include
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💬", title: "SMS & WhatsApp", desc: "Send and receive messages across channels" },
              { icon: "🔍", title: "Number Lookup", desc: "Validate and verify phone numbers" },
              { icon: "📜", title: "Message History", desc: "Full conversation history and logs" },
              { icon: "📊", title: "Analytics", desc: "Track delivery, engagement, and performance" },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-deep-blue mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue">
              Compare Plans
            </h2>
            <p className="mt-4 text-gray-600">
              See exactly what is included in each plan
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left px-4 py-4 text-sm font-semibold text-gray-500">Feature</th>
                      {plans.map((plan) => (
                        <th key={plan.name} className={`px-4 py-4 text-center text-sm font-bold ${plan.popular ? "text-vibrant-orange" : "text-deep-blue"}`}>
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {featureKeys.map((key, i) => (
                      <tr key={key} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-gray-50/50" : ""}`}>
                        <td className="px-4 py-3 text-sm text-gray-700 font-medium">{key}</td>
                        {plans.map((plan) => (
                          <td key={plan.name} className="px-4 py-3 text-center text-xs text-gray-600">
                            {plan.features[key as keyof typeof plan.features]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-vibrant-orange/10 text-vibrant-orange font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-deep-blue pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-vibrant-orange to-vibrant-orange-600">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              Our team is here to help you find the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-vibrant-orange font-bold rounded-xl shadow-xl hover:bg-gray-100 transition-all text-lg"
              >
                Contact Sales
              </Link>
              <a href="https://app.akwaabaai.com/signup" className="btn-outline text-lg">
                Start Free
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
