import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Akwaaba AI team. We are here to help you find the right communication solution for your business.",
};

const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    value: "support@akwaabaai.com",
    link: "mailto:support@akwaabaai.com",
  },
  {
    icon: "📞",
    title: "Phone",
    value: "+233 30 XXX XXXX",
    link: "tel:+23330XXXXXXX",
  },
  {
    icon: "📍",
    title: "Office",
    value: "Accra, Ghana",
    link: "#",
  },
  {
    icon: "🕐",
    title: "Hours",
    value: "Mon–Fri, 8am–6pm GMT",
    link: "#",
  },
];

export default function ContactPage() {
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
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              We Would Love to{" "}
              <span className="text-vibrant-orange">Hear From You</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
              Have a question, need a demo, or want to discuss a partnership? Our team is ready to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-deep-blue mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="flex items-start gap-4 group"
                    >
                      <div className="text-2xl flex-shrink-0">{info.icon}</div>
                      <div>
                        <div className="font-semibold text-deep-blue group-hover:text-vibrant-orange transition-colors">
                          {info.title}
                        </div>
                        <div className="text-gray-600">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Accra office image */}
                <div className="mt-8 relative h-48 w-full rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/accra-city.jpg"
                    alt="Accra, Ghana cityscape"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent flex items-end p-4">
                    <p className="text-white font-semibold text-sm">📍 Based in Accra, Ghana</p>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-deep-blue/5 rounded-2xl">
                  <h3 className="font-bold text-deep-blue mb-2">Enterprise Sales</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Need a custom solution for your organization? Our enterprise team can create a tailored package.
                  </p>
                  <a href="mailto:sales@akwaabaai.com" className="text-vibrant-orange font-semibold text-sm hover:underline">
                    sales@akwaabaai.com
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={200}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-deep-blue mb-6">Send us a message</h2>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vibrant-orange focus:border-transparent"
                          placeholder="Kwame"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vibrant-orange focus:border-transparent"
                          placeholder="Asante"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vibrant-orange focus:border-transparent"
                          placeholder="kwame@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vibrant-orange focus:border-transparent"
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vibrant-orange focus:border-transparent"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vibrant-orange focus:border-transparent bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Enquiry</option>
                        <option value="sales">Sales / Enterprise</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="demo">Request a Demo</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-vibrant-orange focus:border-transparent resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Send Message
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
