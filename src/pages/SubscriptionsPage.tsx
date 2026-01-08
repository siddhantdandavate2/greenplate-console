import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Leaf, Calendar, Utensils, Truck, Pause, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

const plans = [
  {
    id: "weekly",
    name: "Weekly Plan",
    price: 2499,
    originalPrice: 2999,
    period: "week",
    description: "Perfect for trying out our service",
    features: [
      "5 meals per day",
      "7 days of delivery",
      "Free delivery",
      "Pause anytime",
      "Modify menu weekly",
      "24/7 support",
    ],
    popular: false,
  },
  {
    id: "monthly",
    name: "Monthly Plan",
    price: 8999,
    originalPrice: 11999,
    period: "month",
    description: "Best value for committed health journeys",
    features: [
      "5 meals per day",
      "30 days of delivery",
      "Free delivery",
      "Pause anytime",
      "Modify menu weekly",
      "Priority support",
      "Exclusive recipes",
      "Nutrition consultation",
    ],
    popular: true,
    savings: "Save ₹3,000",
  },
];

const mealPlans = [
  {
    id: "weight-loss",
    name: "Weight Loss",
    calories: "1200-1500",
    description: "Low-calorie, high-fiber meals for sustainable weight loss",
    icon: "🥗",
  },
  {
    id: "balanced",
    name: "Balanced",
    calories: "1800-2000",
    description: "Perfectly balanced nutrition for maintaining health",
    icon: "🍲",
  },
  {
    id: "muscle-gain",
    name: "Muscle Gain",
    calories: "2500-3000",
    description: "High-protein meals for building lean muscle",
    icon: "💪",
  },
  {
    id: "keto",
    name: "Keto",
    calories: "1600-1800",
    description: "Low-carb, high-fat meals for ketogenic lifestyle",
    icon: "🥑",
  },
];

const howItWorks = [
  {
    icon: Utensils,
    title: "Choose Your Plan",
    description: "Select a weekly or monthly subscription that fits your lifestyle",
  },
  {
    icon: Calendar,
    title: "Customize Your Meals",
    description: "Pick your favorite bowls or let our chefs surprise you",
  },
  {
    icon: Truck,
    title: "Get Fresh Delivery",
    description: "Receive freshly prepared meals at your preferred time slots",
  },
  {
    icon: Pause,
    title: "Flexible Control",
    description: "Pause, modify, or cancel your subscription anytime",
  },
];

export default function SubscriptionsPage() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [selectedMealPlan, setSelectedMealPlan] = useState("balanced");

  return (
    <CustomerLayout cartItemCount={0}>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Badge className="mb-4 bg-accent text-accent-foreground">
                Save up to 25% with subscriptions
              </Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Subscribe to Health
              </h1>
              <p className="text-lg text-muted-foreground">
                Fresh, nutritious meals delivered daily. Flexible plans that adapt to your lifestyle.
                No commitments, cancel anytime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold text-center text-foreground mb-12">
              How It Works
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meal Plans */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Choose Your Meal Plan
              </h2>
              <p className="text-muted-foreground">
                Select a meal plan that aligns with your health goals
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {mealPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`cursor-pointer transition-all ${
                      selectedMealPlan === plan.id
                        ? "border-2 border-primary shadow-lg"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedMealPlan(plan.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <span className="text-4xl mb-4 block">{plan.icon}</span>
                      <h3 className="font-semibold text-foreground mb-1">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{plan.calories} kcal/day</p>
                      <p className="text-xs text-muted-foreground">{plan.description}</p>
                      {selectedMealPlan === plan.id && (
                        <div className="mt-4">
                          <Badge className="bg-primary text-primary-foreground">Selected</Badge>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription Plans */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Select Your Subscription
              </h2>
              <p className="text-muted-foreground">
                Choose how often you want your healthy meals delivered
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {plans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`relative overflow-hidden cursor-pointer transition-all h-full ${
                      selectedPlan === plan.id
                        ? "border-2 border-primary shadow-xl"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    {plan.savings && (
                      <div className="absolute top-0 left-0 bg-success text-success-foreground px-4 py-1 text-sm font-semibold">
                        {plan.savings}
                      </div>
                    )}
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground mb-6">{plan.description}</p>
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-4xl font-bold text-foreground">₹{plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                        {plan.originalPrice && (
                          <span className="text-muted-foreground line-through text-sm">
                            ₹{plan.originalPrice}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm">
                            <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-success" />
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full"
                        variant={selectedPlan === plan.id ? "default" : "outline"}
                      >
                        {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button asChild size="lg" className="px-12">
                <Link to="/checkout">
                  Continue to Checkout
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                No commitment. Cancel or pause anytime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              Have Questions?
            </h2>
            <p className="text-primary-foreground/70 mb-6">
              Our team is here to help you find the perfect plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" asChild>
                <Link to="/faqs">View FAQs</Link>
              </Button>
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </CustomerLayout>
  );
}
