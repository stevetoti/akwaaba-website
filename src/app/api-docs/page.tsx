import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "API Documentation",
  description:
    "Akwaaba AI API — integrate multi-channel messaging, AI chatbots, and customer communication into your applications.",
};

const endpoints = [
  {
    method: "POST",
    path: "/api/v1/messages/send",
    description: "Send a message via WhatsApp, SMS, or other channels",
  },
  {
    method: "GET",
    path: "/api/v1/messages",
    description: "List messages with filters and pagination",
  },
  {
    method: "POST",
    path: "/api/v1/contacts",
    description: "Create or update a contact in your CRM",
  },
  {
    method: "GET",
    path: "/api/v1/contacts",
    description: "List and search contacts",
  },
  {
    method: "POST",
    path: "/api/v1/campaigns",
    description: "Create and launch broadcast campaigns",
  },
  {
    method: "POST",
    path: "/api/v1/chatbot/deploy",
    description: "Deploy or update an AI chatbot configuration",
  },
  {
    method: "GET",
    path: "/api/v1/analytics",
    description: "Retrieve analytics and performance metrics",
  },
  {
    method: "POST",
    path: "/api/v1/webhooks",
    description: "Register webhooks for real-time event notifications",
  },
];

const features = [
  {
    icon: "🔐",
    title: "Secure Authentication",
    description: "API key and OAuth 2.0 authentication with role-based access controls.",
  },
  {
    icon: "📡",
    title: "Webhooks",
    description: "Receive real-time notifications for message delivery, reads, and chatbot events.",
  },
  {
    icon: "📄",
    title: "Full Documentation",
    description: "Comprehensive API reference with code examples in Python, Node.js, PHP, and cURL.",
  },
  {
    icon: "🧪",
    title: "Sandbox Environment",
    description: "Test your integrations safely in our sandbox before going to production.",
  },
];

export default function ApiDocsPage() {
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
              Developer API
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
              Build With{" "}
              <span className="text-vibrant-orange">Akwaaba AI API</span>
            </h1>
            <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
              Integrate multi-channel messaging, AI chatbots, and customer communication directly into your applications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.akwaabaai.com/signup" className="btn-primary">
                Get API Key
              </a>
              <Link href="/contact" className="btn-outline">
                Talk to Developer Support
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Code Example */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <span className="text-vibrant-orange font-semibold text-sm uppercase tracking-wider">
                Quick Start
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mt-2 mb-4">
                Send your first message in minutes
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our REST API is simple and intuitive. Get your API key from the dashboard and start sending messages right away.
              </p>
              <div className="space-y-4">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="text-2xl flex-shrink-0">{f.icon}</div>
                    <div>
                      <h3 className="font-bold text-deep-blue">{f.title}</h3>
                      <p className="text-gray-600 text-sm">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-deep-blue-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-deep-blue-800">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-white/50 text-xs">Send a WhatsApp Message</span>
                </div>
                <pre className="p-6 text-sm text-green-300 overflow-x-auto">
                  <code>{`curl -X POST https://api.akwaabaai.com/v1/messages/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "channel": "whatsapp",
    "to": "+233XXXXXXXXX",
    "message": "Hello! Your order #1234 is ready.",
    "template": "order_ready"
  }'`}</code>
                </pre>
              </div>

              <div className="bg-deep-blue-900 rounded-2xl overflow-hidden shadow-2xl mt-6">
                <div className="flex items-center gap-2 px-4 py-3 bg-deep-blue-800">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-white/50 text-xs">Response</span>
                </div>
                <pre className="p-6 text-sm text-blue-300 overflow-x-auto">
                  <code>{`{
  "success": true,
  "message_id": "msg_abc123def456",
  "status": "sent",
  "channel": "whatsapp",
  "timestamp": "2026-02-05T10:30:00Z"
}`}</code>
                </pre>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Available Endpoints */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-blue mb-4">
              Available Endpoints
            </h2>
            <p className="text-gray-600 text-lg">
              A RESTful API with comprehensive endpoints for all platform features.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Method</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Endpoint</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {endpoints.map((ep, i) => (
                      <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                            ep.method === "GET"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}>
                            {ep.method}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-mono text-sm text-deep-blue">{ep.path}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{ep.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-deep-blue">
        <div className="container-max text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to integrate?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              Get your API key in seconds and start building. Full documentation, code examples, and sandbox environment included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.akwaabaai.com/signup" className="btn-primary text-base">
                Get Your API Key
              </a>
              <Link href="/contact" className="btn-outline text-base">
                Developer Support
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
