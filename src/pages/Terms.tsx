import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="py-16 px-6">
        <div className="container max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">
              Last updated: January 18, 2026
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using UniEasy, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p>
                UniEasy is a platform designed to help university students discover food spots, accommodation options, study zones, and other essential services around their campus. We provide information and reviews to help you make informed decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
              <p>
                To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate and complete information during registration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Conduct</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Post false or misleading information</li>
                <li>Harass or abuse other users</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the platform for any commercial purposes without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Content</h2>
              <p>
                Users may submit reviews, ratings, and other content. By submitting content, you grant UniEasy a non-exclusive, royalty-free license to use, display, and distribute that content on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclaimer</h2>
              <p>
                UniEasy provides information "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of any listings or reviews. Always verify information independently before making decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>
                UniEasy shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability shall not exceed the amount you paid us, if any.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact</h2>
              <p>
                For questions about these Terms, contact us at support@unieasy.com
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
