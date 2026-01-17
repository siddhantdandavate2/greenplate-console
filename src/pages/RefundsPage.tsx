import { motion } from "framer-motion";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

export default function RefundsPage() {
  return (
    <CustomerLayout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-display font-bold text-foreground mb-8">
              Refund Policy
            </h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-6">
                Last updated: January 1, 2024
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                1. Order Cancellation
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Orders can be cancelled for a full refund up to 2 hours before the delivery slot</li>
                <li>Cancellations within 2 hours of delivery may not be eligible for refund</li>
                <li>To cancel, go to Order History in your account and click "Cancel Order"</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                2. Quality Issues
              </h2>
              <p className="text-muted-foreground mb-6">
                If you receive food that is damaged, spoiled, or significantly different from 
                what was ordered, please contact us within 24 hours with photos. We will 
                provide a full refund or replacement.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                3. Missing Items
              </h2>
              <p className="text-muted-foreground mb-6">
                If any items are missing from your order, report it within 24 hours. 
                We will refund the cost of missing items or arrange for redelivery.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                4. Subscription Refunds
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Monthly subscriptions: Prorated refund for unused days</li>
                <li>Weekly subscriptions: Prorated refund for unused days</li>
                <li>Processing takes 5-7 business days</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                5. Refund Methods
              </h2>
              <p className="text-muted-foreground mb-6">
                Refunds are processed to the original payment method. Credit/debit card 
                refunds may take 5-7 business days to reflect. UPI refunds are typically 
                instant.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                6. Non-Refundable Items
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Orders delivered successfully and consumed</li>
                <li>Delivery fees (unless order is cancelled)</li>
                <li>Promotional credits or discounts</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                7. Contact Us
              </h2>
              <p className="text-muted-foreground mb-6">
                For refund requests or questions, contact support@satviksalad.com or 
                call +91 98765 43210. Our support team is available Mon-Sat, 9 AM - 9 PM.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </CustomerLayout>
  );
}
