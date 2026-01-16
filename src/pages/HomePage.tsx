import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Clock, Truck, Award, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

// Import floating food images
import floatingSandwich from "@/assets/floating-sandwich.png";
import floatingBowl from "@/assets/floating-bowl.png";
import satvikLogo from "@/assets/satvik-salad-logo.png";

// Import menu images for collections
import sproutsBhelSalad from "@/assets/menu/sprouts-bhel-salad.jpg";
import pastaSuperBowl from "@/assets/menu/pasta-super-bowl.jpg";
import proteinBombSalad from "@/assets/menu/protein-bomb-salad.jpg";
import mexicanSupremeBowl from "@/assets/menu/mexican-supreme-bowl.jpg";

const features = [
  {
    icon: Leaf,
    title: "100% Vegetarian",
    description: "Pure Satvik meals with organic, locally sourced produce.",
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
    title: "Lunch Salads",
    description: "Fresh, energizing salads for your midday meal",
    image: sproutsBhelSalad,
    count: 6,
  },
  {
    title: "Dinner Bowls",
    description: "Satisfying, light dinners for healthy evenings",
    image: pastaSuperBowl,
    count: 6,
  },
  {
    title: "Protein Rich",
    description: "High-protein vegetarian meals for fitness enthusiasts",
    image: proteinBombSalad,
    count: 4,
  },
  {
    title: "International Flavors",
    description: "Mexican, Italian & more - all vegetarian",
    image: mexicanSupremeBowl,
    count: 4,
  },
];

const subscriptionPlans = [
  {
    name: "Weekly Plan",
    price: "₹1,200",
    period: "/week",
    meals: "6 meals × 7 days",
    calories: "335-360 kcal/meal",
    popular: false,
  },
  {
    name: "Monthly Plan",
    price: "₹4,500",
    period: "/month",
    meals: "6 meals × 30 days",
    calories: "335-360 kcal/meal",
    popular: true,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Fitness Enthusiast",
    content: "Lost 8kg in 3 months! The Satvik meals are delicious and I never feel like I'm on a diet.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Rahul Mehta",
    role: "Tech Professional",
    content: "Perfect for my busy schedule. Fresh, healthy vegetarian meals delivered right to my office.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Ananya Patel",
    role: "Working Mom",
    content: "My whole family loves it! Finally, pure vegetarian healthy eating made easy and affordable.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

export default function HomePage() {
  return (
    <CustomerLayout>
      {/* Hero Section with Floating Food */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-muted py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        {/* Floating Sandwich - Left */}
        <motion.img
          src={floatingSandwich}
          alt=""
          className="absolute left-0 top-1/3 w-32 md:w-48 lg:w-64 opacity-90 -translate-x-1/4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        
        {/* Floating Bowl - Right */}
        <motion.img
          src={floatingBowl}
          alt=""
          className="absolute right-0 top-1/4 w-32 md:w-48 lg:w-64 opacity-90 translate-x-1/4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                100% Vegetarian Satvik Meals
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Craving to eat wholesome?{" "}
                <span className="text-primary">We've got you covered!</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Fresh, nutritious Satvik bowls crafted by expert chefs and delivered daily to your doorstep. 
                From Earth to Soul.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <div className="mt-8 flex items-center gap-6 justify-center">
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
          </div>
        </div>
      </section>

      {/* Subscription Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["LUNCH WEEKLY", "LUNCH MONTHLY", "DINNER WEEKLY", "DINNER MONTHLY"].map((plan, index) => (
              <Link key={plan} to="/subscriptions">
                <Card className="bg-accent/80 hover:bg-accent transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-accent-foreground">{plan.split(" ")[0]}</h3>
                    <p className="text-sm text-accent-foreground/80">{plan.split(" ")[1]} SUBSCRIPTION</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
              Why Choose Sathvik Salad?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just delivering food. We're delivering a healthier, Satvik lifestyle.
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
                Curated Satvik meal plans for every health goal
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

      {/* Mumbai Coming Soon Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&h=600&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <img 
              src={satvikLogo} 
              alt="Sathvik Salad" 
              className="w-24 h-24 mx-auto mb-6 bg-white rounded-full p-2"
            />
            <div className="border-2 border-dashed border-white/50 inline-block px-12 py-8 rounded-lg">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
                SUBSCRIPTIONS SOON
              </h2>
              <p className="text-2xl md:text-4xl font-bold text-white">
                TO START IN <span className="text-accent">MUMBAI</span>
              </p>
            </div>
          </motion.div>
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
                      className="w-full"
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
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-primary-foreground/90 mb-4">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-primary-foreground/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to Start Your Satvik Journey?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of health-conscious customers who trust Sathvik Salad for their daily nutrition.
            </p>
            <Button asChild size="lg" className="text-base px-12">
              <Link to="/subscriptions">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </CustomerLayout>
  );
}
