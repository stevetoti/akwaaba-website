import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Akwaaba AI features: AI chatbots, WhatsApp messaging, SMS campaigns, team inbox, analytics, automation workflows, CRM, and more.",
};

const features = [
  {
    id: "ai-chatbots",
    icon: "🤖",
    title: "AI-Powered Chatbots",
    subtitle: "GPT-Powered Customer Service",
    description:
      "Deploy intelligent chatbots that understand your business context, answer customer queries 24/7, and seamlessly hand off to human agents when needed.",
    details: [
      "Train on your business data — FAQs, product catalogs, policies",
      "Supports English, Twi, and other Ghanaian languages",
      "Smart escalation to human agents",
      "Learns and improves from every conversation",
      "Customizable personality and tone",
      "No coding required to set up",
    ],
  },
  {
    id: "multi-channel",
    icon: "📱",
    title: "Multi-Channel Messaging",
    subtitle: "WhatsApp, SMS, Web Chat, and More",
    description:
      "Meet your customers where they are. Manage WhatsApp, SMS, Facebook Messenger, Instagram DMs, and web chat all from a single unified inbox.",
    details: [
      "WhatsApp Business API integration",
      "Bulk SMS with local Ghana numbers",
      "Embeddable web chat widget",
      "Facebook Messenger integration",
      "Instagram DM automation",
      "Consistent experience across all channels",
    ],
  },
  {
    id: "team-inbox",
    icon: "📥",
    title: "Team Inbox",
    subtitle: "Shared Inbox for Your Entire Team",
    description:
      "A collaborative inbox where your support, sales, and operations teams can manage all customer conversations in one place.",
    details: [
      "Assign conversations to team members",
      "Internal notes and mentions",
      "Canned responses for common queries",
      "Priority and status tagging",
      "Performance tracking per agent",
      "Role-based access controls",
    ],
  },
  {
    id: "analytics",
    icon: "📊",
    title: "Analytics Dashboard",
    subtitle: "Data-Driven Insights",
    description:
      "Understand your customer communication with detailed analytics. Track message delivery, response times, customer satisfaction, and ROI on campaigns.",
    details: [
      "Real-time message delivery tracking",
      "Response time analytics",
      "Customer satisfaction scores",
      "Campaign performance reports",
      "Agent productivity metrics",
      "Export reports to CSV/PDF",
    ],
  },
  {
    id: "automation",
    icon: "⚡",
    title: "Automation Workflows",
    subtitle: "Automate Repetitive Tasks",
    description:
      "Build powerful automation workflows without code. Trigger messages based on events, schedule follow-ups, and create multi-step customer journeys.",
    details: [
      "Visual workflow builder",
      "Event-based triggers",
      "Time-based scheduling",
      "Conditional logic and branching",
      "Multi-step customer journeys",
      "Integration with external tools via API",
    ],
  },
  {
    id: "crm",
    icon: "👥",
    title: "Customer CRM",
    subtitle: "Know Every Customer",
    description:
      "A built-in CRM that automatically captures and organizes customer data from every conversation across every channel.",
    details: [
      "Automatic contact creation",
      "Custom fields and tags",
      "Conversation history per contact",
      "Segmentation and filtering",
      "Import/export contacts",
      "Integration with external CRMs",
    ],
  },
  {
    id: "broadcast",
    icon: "📢",
    title: "Broadcast Messaging",
    subtitle: "Reach Thousands Instantly",
    description:
      "Send targeted WhatsApp and SMS campaigns to your customer base. Personalize messages, schedule delivery, and track results.",
    details: [
      "WhatsApp broadcast templates",
      "Bulk SMS campaigns",
      "Audience segmentation",
      "Personalization variables",
      "Scheduled send times",
      "Delivery and read receipts",
    ],
  },
  {
    id: "api",
    icon: "🔌",
    title: "API Access",
    subtitle: "Build Custom Integrations",
    description:
      "Full REST API access for developers who want to integrate Akwaaba AI into their existing systems, apps, or workflows.",
    details: [
      "RESTful API with full documentation",
      "Webhook support for real-time events",
      "SDKs for popular languages",
      "Rate limiting and authentication",
      "Sandbox environment for testing",
      "Dedicated developer support",
    ],
  },
  {
    id: "ghana-specific",
    icon: "🇬🇭",
    title: "Ghana-Specific Features",
    subtitle: "Built for the Ghanaian Market",
    description:
      "Features specifically designed for doing business in Ghana, including mobile money integration, local language support, and Ghana number management.",
    details: [
      "Mobile Money payment integration (MTN, Vodafone, AirtelTigo)",
      "Local language AI support (Twi, Ga, Ewe)",
      "Ghana phone number formatting",
      "Local SMS gateway integration",
      "GHS currency support",
      "Ghana business compliance tools",
    ],
  },
];

export default function FeaturesPage() {
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
              Powerful Features
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Everything You Need to{" "}
              <span className="text-vibrant-orange">Communicate Smarter</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
              AI chatbots, multi-channel messaging, automation, analytics, and more — all in one platform built for Ghanaian businesses.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {features.map((feat, i) => (
            <AnimatedSection key={feat.id} delay={100}>
              <div
                id={feat.id}
                className={`flex flex-col lg:flex-row items-start gap-12 ${
                  i > 0 ? "mt-24 pt-24 border-t border-gray-100" : ""
                } ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className="text-5xl mb-4">{feat.icon}</div>
                  <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">
                    {feat.subtitle}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mt-2 mb-4">
                    {feat.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {feat.description}
                  </p>
                  <a href="https://app.akwaabaai.com/signup" className="btn-primary">
                    Try It Free
                  </a>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h3 className="font-bold text-deep-blue mb-4">Key Capabilities</h3>
                    <ul className="space-y-3">
                      {feat.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <svg className="w-5 h-5 mt-0.5 text-vibrant-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-vibrant-orange to-vibrant-orange-600">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to experience these features?
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              Start with our free plan — no credit card required. Upgrade anytime as your business grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.akwaabaai.com/signup"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-vibrant-orange font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-base"
              >
                Get Started Free
              </a>
              <Link href="/pricing" className="btn-outline text-base">
                View Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
