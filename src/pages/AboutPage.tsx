import { motion } from "framer-motion";
import { Leaf, Heart, Users, Award, Target, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

const values = [
  {
    icon: Heart,
    title: "Health First",
    description: "Every meal is designed with your health and wellness in mind.",
  },
  {
    icon: Leaf,
    title: "100% Organic",
    description: "We source only organic, locally-grown ingredients.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Supporting local farmers and sustainable practices.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Strict quality control at every step of preparation.",
  },
];

const team = [
  {
    name: "Chef Arjun Patel",
    role: "Head Chef",
    image: "https://i.pravatar.cc/200?img=11",
  },
  {
    name: "Dr. Meera Singh",
    role: "Nutritionist",
    image: "https://i.pravatar.cc/200?img=5",
  },
  {
    name: "Rahul Verma",
    role: "Operations Head",
    image: "https://i.pravatar.cc/200?img=12",
  },
  {
    name: "Priya Sharma",
    role: "Customer Success",
    image: "https://i.pravatar.cc/200?img=1",
  },
];

export default function AboutPage() {
  return (
    <CustomerLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              About Sathvik Salad
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to make Satvik, healthy eating easy, delicious, and accessible 
              to everyone. Fresh vegetarian ingredients, expert chefs, and a passion for wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                alt="Our kitchen"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sathvik Salad was born in 2020 from a simple idea: Satvik, healthy food should 
                  never be boring or inconvenient. Our founders, passionate about nutrition 
                  and culinary arts, set out to create 100% vegetarian meals that are both nourishing and 
                  delicious.
                </p>
                <p>
                  What started as a small kitchen operation has grown into a team of 50+ 
                  dedicated professionals, serving thousands of health-conscious customers 
                  across the city.
                </p>
                <p>
                  Every bowl we create is a labor of love, combining fresh organic vegetarian ingredients 
                  with culinary expertise to deliver Satvik meals that fuel your body and delight 
                  your taste buds.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind your healthy meals
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "50,000+", label: "Happy Customers" },
              { value: "1M+", label: "Meals Delivered" },
              { value: "100%", label: "Organic Ingredients" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </CustomerLayout>
  );
}
