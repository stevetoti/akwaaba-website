import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Akwaaba AI — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-deep-blue mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: February 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-deep-blue">1. Introduction</h2>
            <p>
              Akwaaba AI (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a product of Pacific Wave Digital. We are committed to protecting the privacy of our users (&ldquo;you&rdquo; or &ldquo;your&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at akwaabaai.com and app.akwaabaai.com (the &ldquo;Service&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-deep-blue mt-4">2.1 Personal Information</h3>
            <p>When you register for an account or use our Service, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and email address</li>
              <li>Phone number</li>
              <li>Business name and address</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-deep-blue mt-4">2.2 Usage Data</h3>
            <p>We automatically collect certain information when you use the Service:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Device information (browser type, operating system)</li>
              <li>IP address and approximate location</li>
              <li>Pages visited and features used</li>
              <li>Date and time of access</li>
              <li>Referring website or application</li>
            </ul>

            <h3 className="text-xl font-semibold text-deep-blue mt-4">2.3 Customer Communication Data</h3>
            <p>
              When you use our messaging features, we process messages sent and received through our platform. This data is stored securely and is used solely to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide, maintain, and improve the Service</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative messages, updates, and security alerts</li>
              <li>Respond to your enquiries and provide customer support</li>
              <li>Monitor and analyse usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues and fraud</li>
              <li>Personalise your experience and deliver targeted content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">4. Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your data with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Service Providers:</strong> Third-party companies that help us operate the Service (hosting, payment processing, analytics)</li>
              <li><strong>Business Partners:</strong> WhatsApp, SMS gateway providers, and other messaging platforms necessary to deliver the Service</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">5. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal information, including encryption in transit and at rest, access controls, and regular security assessments. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed to provide the Service. We may retain certain information for legitimate business purposes or as required by law. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Delete your personal data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:privacy@akwaabaai.com" className="text-vibrant-orange hover:underline">
                privacy@akwaabaai.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">8. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. For more details, see our{" "}
              <a href="/cookie-policy" className="text-vibrant-orange hover:underline">Cookie Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">9. Children&apos;s Privacy</h2>
            <p>
              The Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a new &ldquo;Last updated&rdquo; date. Your continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none space-y-1">
              <li>📧 Email: <a href="mailto:privacy@akwaabaai.com" className="text-vibrant-orange hover:underline">privacy@akwaabaai.com</a></li>
              <li>📧 General: <a href="mailto:support@akwaabaai.com" className="text-vibrant-orange hover:underline">support@akwaabaai.com</a></li>
              <li>📍 Address: Accra, Ghana</li>
              <li>🏢 Company: Pacific Wave Digital</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
