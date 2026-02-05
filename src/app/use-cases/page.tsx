import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "See how Akwaaba AI transforms communication for Retail, Banking, Healthcare, Education, Hospitality, and Government sectors in Ghana.",
};

const useCases = [
  {
    id: "retail",
    icon: "🛒",
    title: "Retail & E-Commerce",
    tagline: "Sell more, support faster",
    image: "/images/retail-market.jpg",
    description:
      "From corner shops to online stores, Akwaaba AI helps retailers manage orders, answer product questions, and send promotional campaigns via WhatsApp and SMS.",
    benefits: [
      "Automated order confirmation and tracking via WhatsApp",
      "AI chatbot for product enquiries and recommendations",
      "Broadcast campaigns for sales and promotions",
      "Mobile Money payment reminders and receipts",
      "Customer loyalty program messaging",
      "Inventory alerts and restock notifications",
    ],
    stat: "60%",
    statLabel: "faster customer response times",
  },
  {
    id: "banking",
    icon: "🏦",
    title: "Banking & Finance",
    tagline: "Secure, compliant communication",
    image: "/images/banking.jpg",
    description:
      "Banks, microfinance institutions, and fintech companies use Akwaaba AI for secure customer communication, transaction alerts, and loan management.",
    benefits: [
      "Transaction alerts via SMS and WhatsApp",
      "AI-powered FAQ bot for account queries",
      "Loan application status updates",
      "KYC document collection via chat",
      "Branch appointment scheduling",
      "Fraud alert notifications",
    ],
    stat: "40%",
    statLabel: "reduction in call center volume",
  },
  {
    id: "healthcare",
    icon: "🏥",
    title: "Healthcare",
    tagline: "Better patient communication",
    image: "/images/healthcare.jpg",
    description:
      "Hospitals, clinics, and pharmacies use Akwaaba AI to send appointment reminders, share test results, and provide 24/7 health information via AI chatbots.",
    benefits: [
      "Appointment booking and reminders",
      "Prescription refill notifications",
      "AI health information chatbot",
      "Lab result delivery via secure messaging",
      "Patient feedback collection",
      "Emergency broadcast alerts",
    ],
    stat: "50%",
    statLabel: "fewer missed appointments",
  },
  {
    id: "education",
    icon: "🎓",
    title: "Education",
    tagline: "Connect with students and parents",
    image: "/images/education.jpg",
    description:
      "Schools, universities, and training centres use Akwaaba AI to communicate with students and parents about admissions, fees, exam results, and events.",
    benefits: [
      "Admission status updates and notifications",
      "Fee payment reminders via Mobile Money",
      "Exam schedule and result announcements",
      "Parent-teacher communication channel",
      "Event and activity broadcasts",
      "AI chatbot for student enquiries",
    ],
    stat: "70%",
    statLabel: "improvement in parent engagement",
  },
  {
    id: "hospitality",
    icon: "🏨",
    title: "Hospitality & Tourism",
    tagline: "Exceptional guest experiences",
    image: "/images/hospitality.jpg",
    description:
      "Hotels, restaurants, and tour operators use Akwaaba AI to manage bookings, send confirmations, collect reviews, and provide instant guest support.",
    benefits: [
      "Booking confirmations and check-in reminders",
      "AI concierge chatbot for guest queries",
      "Restaurant reservation management",
      "Tour itinerary sharing via WhatsApp",
      "Post-stay review collection",
      "Promotional offers for repeat guests",
    ],
    stat: "35%",
    statLabel: "increase in repeat bookings",
  },
  {
    id: "government",
    icon: "🏛️",
    title: "Government & Public Sector",
    tagline: "Citizen engagement at scale",
    image: "/images/government.jpg",
    description:
      "Government agencies and public institutions use Akwaaba AI for citizen communication, service announcements, emergency alerts, and feedback collection.",
    benefits: [
      "Public service announcements via SMS broadcast",
      "Emergency and disaster alert system",
      "Citizen feedback and complaint collection",
      "Permit and licence application updates",
      "Tax payment reminders",
      "AI chatbot for government service enquiries",
    ],
    stat: "80%",
    statLabel: "of citizens prefer digital communication",
  },
];

export default function UseCasesPage() {
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
              Industry Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Built for{" "}
              <span className="text-vibrant-orange">Every Industry</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
              See how businesses across Ghana are using Akwaaba AI to transform their customer communication.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {useCases.map((uc, i) => (
            <AnimatedSection key={uc.id} delay={100}>
              <div
                id={uc.id}
                className={`flex flex-col lg:flex-row items-start gap-12 ${
                  i > 0 ? "mt-20 pt-20 border-t border-gray-100" : ""
                } ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className="text-5xl mb-4">{uc.icon}</div>
                  <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">
                    {uc.tagline}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mt-2 mb-4">
                    {uc.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {uc.description}
                  </p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-extrabold text-vibrant-orange">{uc.stat}</span>
                    <span className="text-gray-600">{uc.statLabel}</span>
                  </div>
                  <a href="https://app.akwaabaai.com/signup" className="btn-primary">
                    Get Started
                  </a>
                </div>
                <div className="flex-1 w-full space-y-6">
                  {/* Industry Image */}
                  <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={uc.image}
                      alt={uc.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-4xl">{uc.icon}</div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h3 className="font-bold text-deep-blue mb-4">How Akwaaba AI Helps</h3>
                    <ul className="space-y-3">
                      {uc.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <svg className="w-5 h-5 mt-0.5 text-vibrant-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{b}</span>
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
              Your industry not listed?
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              Akwaaba AI works for any business that needs to communicate with customers. Talk to our team about your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-vibrant-orange font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-base"
              >
                Contact Sales
              </Link>
              <a href="https://app.akwaabaai.com/signup" className="btn-outline text-base">
                Start Free Trial
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
