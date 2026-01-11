import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Clock, Truck, Award, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "100% organic and locally sourced produce, delivered within 24 hours of preparation.",
  },
  {
    icon: Award,
    title: "Balanced Nutrition",
    description: "Dietitian-approved meals with perfect macro balance for your health goals.",
  },
  {
    icon: Clock,
    title: "Flexible Subscriptions",
    description: "Pause, modify, or cancel anytime. No contracts, no commitments.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Choose your delivery slots. We guarantee punctuality, every single time.",
  },
];

const collections = [
  {
    title: "Weight Loss Bowls",
    description: "Low-calorie, high-fiber meals for sustainable weight management",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    count: 12,
  },
  {
    title: "High Protein Bowls",
    description: "Fuel your workouts with protein-packed power meals",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    count: 15,
  },
  {
    title: "Detox Meals",
    description: "Cleanse and rejuvenate with our antioxidant-rich selections",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
    count: 8,
  },
  {
    title: "Corporate Plans",
    description: "Healthy office meals for productive teams",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
    count: 20,
  },
];

const subscriptionPlans = [
  {
    name: "Weekly Plan",
    price: "₹2,499",
    period: "/week",
    meals: "5 meals per day × 7 days",
    calories: "1800-2200 kcal/day",
    popular: false,
  },
  {
    name: "Monthly Plan",
    price: "₹8,999",
    period: "/month",
    meals: "5 meals per day × 30 days",
    calories: "1800-2200 kcal/day",
    popular: true,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Fitness Enthusiast",
    content: "Lost 8kg in 3 months! The meals are delicious and I never feel like I'm on a diet.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Rahul Mehta",
    role: "Tech Professional",
    content: "Perfect for my busy schedule. Fresh, healthy meals delivered right to my office.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Ananya Patel",
    role: "Working Mom",
    content: "My whole family loves it! Finally, healthy eating made easy and affordable.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

export default function HomePage() {
  return (
    <CustomerLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-muted py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                Premium Healthy Meals
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Taste Meets Wellness in{" "}
                <span className="text-primary">Every Bowl</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Fresh, nutritious bowls crafted by expert chefs and delivered daily to your doorstep. 
                Fuel your body with food that loves you back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="text-base px-8">
                  <Link to="/subscriptions">
                    Start Subscription
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <Link to="/menu">View Menu</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/40?img=${i + 10}`}
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-background"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">10,000+ happy customers</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop"
                  alt="Healthy bowl"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <p className="font-semibold">100% Organic</p>
                      <p className="text-sm text-muted-foreground">Farm fresh ingredients</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-card p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">4.9</p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose Healthy Greens?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just delivering food. We're delivering a healthier lifestyle.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Featured Collections
              </h2>
              <p className="text-muted-foreground">
                Curated meal plans for every health goal
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex">
              <Link to="/menu">
                View All <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to="/menu" className="group block">
                  <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-semibold text-lg">{collection.title}</h3>
                        <p className="text-white/80 text-sm">{collection.count} items</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Simple, Flexible Plans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a plan that works for you. Cancel or pause anytime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`relative overflow-hidden h-full ${
                    plan.popular
                      ? "border-2 border-primary shadow-lg"
                      : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {plan.meals}
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {plan.calories}
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        Free delivery
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        Cancel anytime
                      </li>
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${plan.popular ? "" : "variant-outline"}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <Link to="/subscriptions">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Loved by Thousands
            </h2>
            <p className="text-primary-foreground/70">
              See what our happy customers have to say
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-primary-foreground/10 border-primary-foreground/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-primary-foreground/90 mb-6">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Start Eating Better Today
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join 10,000+ customers who transformed their health with Lovable Greens
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/subscriptions">
                Subscribe Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </CustomerLayout>
  );
}
