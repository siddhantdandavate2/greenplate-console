import { motion } from "framer-motion";
import { ExternalLink, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

const pressReleases = [
  {
    date: "Jan 10, 2024",
    title: "Sathvik Salad Raises ₹50 Crore in Series B Funding",
    description: "Funding to be used for pan-India expansion and technology enhancement.",
  },
  {
    date: "Dec 5, 2023",
    title: "Sathvik Salad Launches Corporate Wellness Program",
    description: "New B2B offering targets corporate offices with Satvik meal subscriptions.",
  },
  {
    date: "Oct 15, 2023",
    title: "Sathvik Salad Crosses 1 Million Meals Delivered Milestone",
    description: "Celebrates customer trust with special offers and new menu items.",
  },
  {
    date: "Aug 20, 2023",
    title: "Partnership Announcement: Local Organic Farms",
    description: "Strategic partnership with 50+ organic farms for farm-to-table freshness.",
  },
];

const mediaFeatures = [
  { name: "Economic Times", logo: "ET" },
  { name: "Mint", logo: "M" },
  { name: "YourStory", logo: "YS" },
  { name: "Inc42", logo: "I42" },
  { name: "Business Standard", logo: "BS" },
  { name: "Forbes India", logo: "F" },
];

export default function PressPage() {
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
              Press & Media
            </h1>
            <p className="text-lg text-muted-foreground">
              Latest news, press releases, and media resources about Sathvik Salad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-display font-bold text-foreground text-center mb-8">
            Featured In
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {mediaFeatures.map((media) => (
              <div
                key={media.name}
                className="w-24 h-16 bg-background rounded-lg flex items-center justify-center shadow-sm"
              >
                <span className="text-xl font-bold text-muted-foreground">{media.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Press Releases
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {pressReleases.map((press, index) => (
              <motion.div
                key={press.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{press.date}</p>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{press.title}</h3>
                    <p className="text-muted-foreground mb-4">{press.description}</p>
                    <Button variant="ghost" size="sm" className="gap-2">
                      Read More <ExternalLink className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Media Kit
            </h2>
            <p className="text-muted-foreground mb-6">
              Download our brand assets, logos, and company information for press use.
            </p>
            <Button size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Media Kit
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Media Inquiries
            </h2>
            <p className="text-muted-foreground mb-6">
              For press inquiries, interview requests, or media partnerships, 
              please contact our communications team.
            </p>
            <Button variant="outline" size="lg">
              <Mail className="w-4 h-4 mr-2" />
              press@satviksalad.com
            </Button>
          </div>
        </div>
      </section>
    </CustomerLayout>
  );
}
