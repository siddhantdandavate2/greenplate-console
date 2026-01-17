import { motion } from "framer-motion";
import { Search, ChevronDown, MessageCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  { id: "orders", label: "Orders & Delivery" },
  { id: "subscriptions", label: "Subscriptions" },
  { id: "payments", label: "Payments & Refunds" },
  { id: "account", label: "Account & Profile" },
];

const faqs = [
  {
    category: "orders",
    question: "How do I track my order?",
    answer: "You can track your order in real-time through your account dashboard. Go to 'Order History' and click on the specific order to see live tracking updates.",
  },
  {
    category: "orders",
    question: "What are your delivery hours?",
    answer: "We deliver between 7:00 AM - 10:00 AM (Morning slot), 12:00 PM - 3:00 PM (Afternoon slot), and 6:00 PM - 9:00 PM (Evening slot). You can choose your preferred slot during checkout.",
  },
  {
    category: "orders",
    question: "Can I change my delivery address?",
    answer: "Yes, you can change your delivery address up to 2 hours before the scheduled delivery time. Go to your order details and click 'Edit Address'.",
  },
  {
    category: "subscriptions",
    question: "How do I pause my subscription?",
    answer: "You can pause your subscription anytime from your account settings. Go to 'My Subscriptions' and click 'Pause'. Your subscription will remain paused until you resume it.",
  },
  {
    category: "subscriptions",
    question: "Can I change my subscription plan?",
    answer: "Yes, you can upgrade or downgrade your subscription plan at any time. Changes will be effective from your next billing cycle.",
  },
  {
    category: "subscriptions",
    question: "What happens if I cancel my subscription?",
    answer: "If you cancel, you'll continue to receive deliveries until the end of your current billing period. After that, deliveries will stop. You can reactivate anytime.",
  },
  {
    category: "payments",
    question: "What payment methods do you accept?",
    answer: "We accept UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards (Visa, Mastercard, RuPay), Net Banking, and digital wallets.",
  },
  {
    category: "payments",
    question: "How do I request a refund?",
    answer: "If you're not satisfied with your order, you can request a refund within 24 hours of delivery. Go to 'Order History', select the order, and click 'Request Refund'.",
  },
  {
    category: "payments",
    question: "When will I receive my refund?",
    answer: "Refunds are processed within 5-7 business days. The amount will be credited to your original payment method.",
  },
  {
    category: "account",
    question: "How do I update my profile information?",
    answer: "Go to your Account page and click 'Edit' next to your profile information. You can update your name, phone number, email, and profile photo.",
  },
  {
    category: "account",
    question: "How do I reset my password?",
    answer: "Click 'Forgot Password' on the login page, enter your email, and we'll send you a password reset link.",
  },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("orders");

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Help Center
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions or get in touch with our support team
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full text-left px-6 py-3 border-l-2 transition-colors ${
                          activeCategory === cat.id
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-transparent hover:bg-muted"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* FAQs */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  {filteredFaqs.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      No results found. Try a different search term.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Still need help?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Available 9AM - 9PM</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground">support@satviksalad.com</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </CustomerLayout>
  );
}
