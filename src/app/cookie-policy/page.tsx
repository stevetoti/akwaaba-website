import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Akwaaba AI — how we use cookies and tracking technologies.",
};

export default function CookiePolicyPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-deep-blue mb-2">Cookie Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: February 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-deep-blue">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They help us provide you with a better experience by remembering your preferences, analysing usage patterns, and enabling certain features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">2. How We Use Cookies</h2>
            <p>Akwaaba AI uses the following types of cookies:</p>

            <h3 className="text-xl font-semibold text-deep-blue mt-4">Essential Cookies</h3>
            <p>Required for the Service to function properly. These cannot be disabled.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Authentication and session management</li>
              <li>Security and fraud prevention</li>
              <li>Load balancing</li>
            </ul>

            <h3 className="text-xl font-semibold text-deep-blue mt-4">Analytics Cookies</h3>
            <p>Help us understand how visitors interact with our website.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Page views and navigation patterns</li>
              <li>Feature usage statistics</li>
              <li>Performance monitoring</li>
            </ul>

            <h3 className="text-xl font-semibold text-deep-blue mt-4">Preference Cookies</h3>
            <p>Remember your settings and preferences.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Language preferences</li>
              <li>Display settings</li>
              <li>Region selection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">3. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">4. Third-Party Cookies</h2>
            <p>
              We may use third-party services that set their own cookies, such as analytics providers. These third parties have their own privacy policies governing the use of cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">5. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, contact us at{" "}
              <a href="mailto:privacy@akwaabaai.com" className="text-vibrant-orange hover:underline">privacy@akwaabaai.com</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
