import { motion } from "framer-motion";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

export default function PrivacyPage() {
  return (
    <CustomerLayout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-display font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-6">
                Last updated: January 1, 2024
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Name, email address, phone number, and delivery address</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Order history and preferences</li>
                <li>Communications with our support team</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Process and deliver your orders</li>
                <li>Communicate about orders, promotions, and updates</li>
                <li>Improve our services and personalize your experience</li>
                <li>Ensure security and prevent fraud</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                3. Information Sharing
              </h2>
              <p className="text-muted-foreground mb-6">
                We do not sell your personal information. We share data only with:
                delivery partners (to fulfill orders), payment processors (to process transactions),
                and service providers who help operate our business.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                4. Data Security
              </h2>
              <p className="text-muted-foreground mb-6">
                We implement industry-standard security measures including SSL encryption,
                secure servers, and regular security audits to protect your information.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                5. Your Rights
              </h2>
              <p className="text-muted-foreground mb-6">
                You have the right to access, correct, or delete your personal data.
                Contact us at privacy@satviksalad.com to exercise these rights.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                6. Contact Us
              </h2>
              <p className="text-muted-foreground mb-6">
                For privacy-related inquiries, please contact us at:
                privacy@satviksalad.com or call +91 98765 43210.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </CustomerLayout>
  );
}
