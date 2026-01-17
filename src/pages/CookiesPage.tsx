import { motion } from "framer-motion";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

export default function CookiesPage() {
  return (
    <CustomerLayout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-display font-bold text-foreground mb-8">
              Cookie Policy
            </h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-6">
                Last updated: January 1, 2024
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-muted-foreground mb-6">
                Cookies are small text files stored on your device when you visit our website. 
                They help us provide a better browsing experience and understand how you use our site.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                2. Types of Cookies We Use
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                Essential Cookies
              </h3>
              <p className="text-muted-foreground mb-4">
                Required for the website to function properly. They enable core features like 
                user authentication, shopping cart functionality, and secure checkout.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                Analytics Cookies
              </h3>
              <p className="text-muted-foreground mb-4">
                Help us understand how visitors interact with our website by collecting 
                anonymous information about page visits, time spent, and navigation patterns.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                Marketing Cookies
              </h3>
              <p className="text-muted-foreground mb-4">
                Used to track visitors across websites to display relevant advertisements 
                and measure the effectiveness of marketing campaigns.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                Preference Cookies
              </h3>
              <p className="text-muted-foreground mb-4">
                Remember your preferences like language settings, location, and display options 
                to provide a personalized experience.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                3. Managing Cookies
              </h2>
              <p className="text-muted-foreground mb-6">
                You can control cookies through your browser settings. Most browsers allow you 
                to refuse cookies or delete existing cookies. Note that disabling cookies may 
                affect website functionality.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                4. Third-Party Cookies
              </h2>
              <p className="text-muted-foreground mb-6">
                Some cookies are placed by third-party services that appear on our pages. 
                These include analytics tools (Google Analytics), payment processors, and 
                social media platforms.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                5. Contact Us
              </h2>
              <p className="text-muted-foreground mb-6">
                For questions about our cookie policy, please contact privacy@satviksalad.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </CustomerLayout>
  );
}
