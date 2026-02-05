import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { value: "5+", label: "Channels" },
  { value: "24/7", label: "AI Support" },
  { value: "10K+", label: "Messages/day" },
  { value: "99.9%", label: "Uptime" },
];

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Chatbots",
    description:
      "Deploy GPT-powered chatbots that understand your business and serve customers in English, Twi, and other local languages.",
  },
  {
    icon: "📱",
    title: "Multi-Channel Messaging",
    description:
      "Reach customers on WhatsApp, SMS, Web Chat, Facebook Messenger, and Instagram — all from one dashboard.",
  },
  {
    icon: "📥",
    title: "Team Inbox",
    description:
      "A shared inbox where your entire team can manage customer conversations, assign tickets, and collaborate.",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description:
      "Track message delivery, response times, customer satisfaction, and campaign performance in real time.",
  },
  {
    icon: "⚡",
    title: "Automation Workflows",
    description:
      "Create automated workflows for welcome messages, follow-ups, appointment reminders, and more.",
  },
  {
    icon: "📢",
    title: "Broadcast Messaging",
    description:
      "Send targeted campaigns to thousands of customers via WhatsApp and SMS with personalization.",
  },
];

const steps = [
  {
    step: "01",
    icon: "📝",
    title: "Sign Up Free",
    description:
      "Create your account in under a minute. No credit card required. Start with our generous free plan.",
  },
  {
    step: "02",
    icon: "⚙️",
    title: "Set Up Your Channels",
    description:
      "Connect your WhatsApp Business number, SMS gateway, and web chat. We guide you through every step.",
  },
  {
    step: "03",
    icon: "🚀",
    title: "Go Live",
    description:
      "Launch your AI chatbot, start campaigns, and watch your customer engagement soar.",
  },
];

const testimonials = [
  {
    quote:
      "Akwaaba AI transformed how we handle customer enquiries. Our response time dropped from hours to seconds.",
    name: "Kwame A.",
    role: "CEO, Accra Retail Co.",
  },
  {
    quote:
      "The WhatsApp integration is seamless. Our customers love being able to reach us instantly.",
    name: "Ama D.",
    role: "Operations Manager, GoldStar Finance",
  },
  {
    quote:
      "We automated 80% of our support queries. The AI chatbot handles everything from order tracking to FAQs.",
    name: "Kofi M.",
    role: "Founder, TechHub Ghana",
  },
];

const industries = [
  { icon: "🛒", name: "Retail" },
  { icon: "🏦", name: "Banking" },
  { icon: "🏥", name: "Healthcare" },
  { icon: "🎓", name: "Education" },
  { icon: "🏨", name: "Hospitality" },
  { icon: "🏛️", name: "Government" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-deep-blue via-deep-blue-700 to-deep-blue-800 pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-vibrant-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-vibrant-orange/5 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Built for Ghana
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Akwaaba!{" "}
                <span className="text-vibrant-orange">Smart Communication</span>{" "}
                for Your Business
              </h1>

              <p className="text-lg sm:text-xl text-blue-100 max-w-xl mb-8 leading-relaxed">
                AI-powered chatbots, WhatsApp messaging, SMS campaigns, and a unified team inbox — everything Ghanaian businesses need to communicate better.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://app.akwaabaai.com/signup" className="btn-primary text-base py-3.5 px-8">
                  Get Started Free
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <Link href="/features" className="btn-outline text-base">
                  See All Features
                </Link>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-blue-200 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Feature cards */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {features.slice(0, 4).map((feat) => (
                  <div
                    key={feat.title}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="text-3xl mb-3">{feat.icon}</div>
                    <h3 className="text-white font-semibold text-sm mb-1">{feat.title}</h3>
                    <p className="text-blue-200 text-xs leading-relaxed">{feat.description.substring(0, 80)}...</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="section-padding bg-gray-50">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-vibrant-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Everything You Need to Communicate Better
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From AI chatbots to broadcast campaigns, Akwaaba AI gives you the tools to engage every customer on every channel.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <AnimatedSection key={feat.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-4xl p-3 rounded-xl bg-vibrant-orange/10 inline-block mb-4">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-deep-blue mb-3">{feat.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/features" className="btn-primary">
              Explore All Features
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-vibrant-orange font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Get started in 3 easy steps
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 150}>
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 text-3xl bg-deep-blue/5 rounded-2xl mb-5">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-vibrant-orange uppercase tracking-wider mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-deep-blue mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-vibrant-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Industries
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Trusted Across Every Sector
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From retail shops to government agencies, Akwaaba AI serves businesses of all sizes across Ghana.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href="/use-cases"
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{ind.icon}</div>
                <h3 className="text-sm font-bold text-deep-blue">{ind.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-deep-blue">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-vibrant-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Loved by Ghanaian Businesses
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full flex flex-col">
                  <div className="flex gap-1 text-vibrant-orange mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-blue-100 mb-6 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-blue-300">{t.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <AnimatedSection>
            <span className="inline-block text-vibrant-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Plans for Every Business Size
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
              Start free and scale as you grow. From solo entrepreneurs to enterprise organizations, we have a plan that fits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="btn-primary text-base">
                View All Plans
              </Link>
              <a href="https://app.akwaabaai.com/signup" className="btn-outline-dark text-base">
                Start Free
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-vibrant-orange to-vibrant-orange-600">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to welcome smarter communication?
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              Join hundreds of Ghanaian businesses already using Akwaaba AI to connect with their customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.akwaabaai.com/signup"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-vibrant-orange font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-base"
              >
                Get Started Free
              </a>
              <Link href="/contact" className="btn-outline text-base">
                Talk to Sales
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
