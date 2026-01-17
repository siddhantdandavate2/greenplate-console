import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General",
    faqs: [
      {
        question: "What is Sathvik Salad?",
        answer: "Sathvik Salad is a premium Satvik, 100% vegetarian healthy food delivery service that provides fresh, nutritious, and delicious meals right to your doorstep. We offer both one-time orders and subscription plans.",
      },
      {
        question: "Where do you deliver?",
        answer: "We currently deliver across Mumbai, Pune, and Bangalore. We're expanding to more cities soon. Enter your pincode on our website to check delivery availability.",
      },
      {
        question: "What are your operating hours?",
        answer: "Our kitchen operates from 5 AM to 10 PM daily. Deliveries are made in three slots: Morning (7-10 AM), Afternoon (12-3 PM), and Evening (6-9 PM).",
      },
    ],
  },
  {
    title: "Orders",
    faqs: [
      {
        question: "How do I place an order?",
        answer: "Browse our menu, add items to your cart, choose your delivery slot, and complete payment. You'll receive a confirmation email with order details.",
      },
      {
        question: "Can I customize my order?",
        answer: "Yes! You can customize most meals by adding or removing ingredients. Look for the 'Customize' button on menu items.",
      },
      {
        question: "What is the minimum order value?",
        answer: "There's no minimum order value. However, orders below ₹500 have a delivery fee of ₹49. Orders above ₹500 qualify for free delivery.",
      },
    ],
  },
  {
    title: "Subscriptions",
    faqs: [
      {
        question: "What subscription plans do you offer?",
        answer: "We offer Weekly (₹2,499/week) and Monthly (₹8,999/month) plans. Monthly plans save you 25% compared to one-time orders.",
      },
      {
        question: "Can I pause or cancel my subscription?",
        answer: "Yes, you can pause or cancel anytime from your account. There are no cancellation fees. Paused subscriptions can be resumed whenever you're ready.",
      },
      {
        question: "Can I change my meal preferences?",
        answer: "Absolutely! You can modify your meal preferences, delivery days, and time slots from your subscription settings at any time.",
      },
    ],
  },
  {
    title: "Payments",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept UPI, Credit/Debit Cards, Net Banking, and digital wallets like Paytm and Amazon Pay.",
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes, all payments are processed through secure, PCI-DSS compliant payment gateways with 256-bit SSL encryption.",
      },
      {
        question: "How do refunds work?",
        answer: "Refunds are processed within 5-7 business days to your original payment method. For subscriptions, unused days are credited as wallet balance.",
      },
    ],
  },
  {
    title: "Delivery",
    faqs: [
      {
        question: "How is the food delivered?",
        answer: "Our meals are packed in eco-friendly, insulated containers that keep food fresh. Delivery partners are trained to handle food safely.",
      },
      {
        question: "What if I'm not home during delivery?",
        answer: "You can specify delivery instructions (e.g., leave at door, with security). You can also reschedule delivery up to 2 hours before the slot.",
      },
      {
        question: "Can I track my delivery?",
        answer: "Yes! Once your order is out for delivery, you'll receive a tracking link via SMS and email with real-time location updates.",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <CustomerLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Sathvik Salad
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="mb-8"
            >
              <h2 className="text-xl font-display font-bold text-foreground mb-4">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`${category.title}-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>
    </CustomerLayout>
  );
}
