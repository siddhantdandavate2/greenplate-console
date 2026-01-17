import { motion } from "framer-motion";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

export default function TermsPage() {
  return (
    <CustomerLayout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-display font-bold text-foreground mb-8">
              Terms of Service
            </h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-6">
                Last updated: January 1, 2024
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground mb-6">
                By accessing or using Sathvik Salad services, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree 
                with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                2. Orders and Payments
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>All orders are subject to availability and confirmation</li>
                <li>Prices are inclusive of applicable taxes unless stated otherwise</li>
                <li>Payment must be completed at the time of ordering</li>
                <li>We reserve the right to refuse or cancel any order</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                3. Delivery
              </h2>
              <p className="text-muted-foreground mb-6">
                We strive to deliver within the selected time slot. However, delivery times 
                are estimates and may vary due to traffic, weather, or other factors. We are 
                not liable for delays beyond our control.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                4. Subscriptions
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Subscriptions auto-renew unless cancelled before the billing date</li>
                <li>You may pause or cancel your subscription at any time</li>
                <li>Refunds for cancelled subscriptions are prorated based on unused days</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                5. User Accounts
              </h2>
              <p className="text-muted-foreground mb-6">
                You are responsible for maintaining the confidentiality of your account 
                credentials. You agree to accept responsibility for all activities that 
                occur under your account.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground mb-6">
                Sathvik Salad shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising from your use of our services.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                7. Contact
              </h2>
              <p className="text-muted-foreground mb-6">
                For questions about these Terms, please contact us at legal@satviksalad.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </CustomerLayout>
  );
}
