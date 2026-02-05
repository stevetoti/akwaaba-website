import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Akwaaba AI — the rules and guidelines for using our platform.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-deep-blue mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: February 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-deep-blue">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Akwaaba AI platform (&ldquo;Service&rdquo;), operated by Pacific Wave Digital (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">2. Description of Service</h2>
            <p>
              Akwaaba AI is an AI-powered business communication platform that provides messaging, chatbot, CRM, analytics, and campaign management tools. The Service is accessible through our website at akwaabaai.com and our application at app.akwaabaai.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">3. Account Registration</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You must be at least 18 years old to use the Service.</li>
              <li>You are responsible for all activities that occur under your account.</li>
              <li>You must notify us immediately of any unauthorised use of your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">4. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send spam, unsolicited messages, or violate anti-spam laws</li>
              <li>Distribute malware, viruses, or harmful content</li>
              <li>Harass, threaten, or abuse other users or their customers</li>
              <li>Violate any applicable laws or regulations, including Ghana&apos;s Data Protection Act</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Attempt to reverse engineer, decompile, or hack the Service</li>
              <li>Use the Service for any illegal or fraudulent activities</li>
              <li>Send messages without proper consent from recipients</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">5. Messaging Compliance</h2>
            <p>When using our messaging features, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Obtain proper consent from recipients before sending messages</li>
              <li>Provide opt-out mechanisms in all marketing messages</li>
              <li>Comply with WhatsApp Business Policy and other platform terms</li>
              <li>Comply with Ghana&apos;s National Communications Authority (NCA) regulations</li>
              <li>Not send messages that contain false, misleading, or deceptive content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">6. Payment and Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Paid plans are billed monthly or annually as selected</li>
              <li>Payments are processed securely through our payment providers</li>
              <li>We accept Mobile Money (MTN MoMo, Vodafone Cash, AirtelTigo Money), Visa, and Mastercard</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>We reserve the right to change pricing with 30 days written notice</li>
              <li>Failure to pay may result in suspension or termination of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">7. Intellectual Property</h2>
            <p>
              The Service, including its design, features, content, and code, is the property of Pacific Wave Digital and is protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without our written consent.
            </p>
            <p className="mt-2">
              You retain ownership of all content you upload or create through the Service. By using the Service, you grant us a licence to use, process, and store your content as necessary to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">8. Data Protection</h2>
            <p>
              We process personal data in accordance with our <a href="/privacy" className="text-vibrant-orange hover:underline">Privacy Policy</a> and applicable data protection laws, including Ghana&apos;s Data Protection Act 2012 (Act 843). You are responsible for ensuring your use of the Service complies with applicable data protection requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">9. Service Availability</h2>
            <p>
              We strive to maintain 99.9% uptime but do not guarantee uninterrupted access to the Service. We may perform scheduled maintenance with advance notice. We are not liable for any downtime, data loss, or service interruptions caused by factors beyond our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Pacific Wave Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of the Service.
            </p>
            <p className="mt-2">
              Our total liability for any claim arising from the Service shall not exceed the total fees paid by you in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">11. Termination</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may cancel your account at any time through the platform settings</li>
              <li>We may suspend or terminate your account for violation of these Terms</li>
              <li>Upon termination, your right to use the Service ceases immediately</li>
              <li>We will provide you with a reasonable opportunity to export your data before deletion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">12. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Republic of Ghana. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Ghana.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the Service. Your continued use of the Service after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-deep-blue">14. Contact Us</h2>
            <p>For questions about these Terms of Service, contact us at:</p>
            <ul className="list-none space-y-1">
              <li>📧 Email: <a href="mailto:legal@akwaabaai.com" className="text-vibrant-orange hover:underline">legal@akwaabaai.com</a></li>
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
