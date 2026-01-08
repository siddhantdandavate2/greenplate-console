import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Filter, Search, Flame, Leaf, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { id: "all", label: "All" },
  { id: "signature", label: "Signature" },
  { id: "protein", label: "Protein Rich" },
  { id: "detox", label: "Detox" },
  { id: "build-your-own", label: "Build Your Own" },
];

const menuItems = [
  {
    id: "1",
    name: "Mediterranean Quinoa Bowl",
    description: "Fluffy quinoa with roasted veggies, feta, and herb dressing",
    price: 349,
    calories: 420,
    protein: 18,
    category: "signature",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    tags: ["Vegetarian", "High Fiber"],
    popular: true,
  },
  {
    id: "2",
    name: "Grilled Chicken Power Bowl",
    description: "Tender grilled chicken with brown rice, avocado, and chimichurri",
    price: 449,
    calories: 520,
    protein: 42,
    category: "protein",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    tags: ["High Protein", "Low Carb"],
    popular: true,
  },
  {
    id: "3",
    name: "Green Detox Bowl",
    description: "Kale, spinach, cucumber, green apple, and chia seeds",
    price: 299,
    calories: 280,
    protein: 12,
    category: "detox",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
    tags: ["Vegan", "Detox"],
    popular: false,
  },
  {
    id: "4",
    name: "Salmon Poke Bowl",
    description: "Fresh salmon, sushi rice, edamame, and wasabi mayo",
    price: 549,
    calories: 480,
    protein: 35,
    category: "protein",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
    tags: ["Omega-3", "High Protein"],
    popular: true,
  },
  {
    id: "5",
    name: "Buddha Bowl",
    description: "Roasted chickpeas, sweet potato, tahini, and mixed greens",
    price: 329,
    calories: 380,
    protein: 16,
    category: "signature",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400&h=300&fit=crop",
    tags: ["Vegan", "High Fiber"],
    popular: false,
  },
  {
    id: "6",
    name: "Asian Tofu Stir-Fry",
    description: "Crispy tofu with mixed vegetables in ginger-soy sauce",
    price: 299,
    calories: 320,
    protein: 22,
    category: "detox",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop",
    tags: ["Vegan", "Low Calorie"],
    popular: false,
  },
  {
    id: "7",
    name: "Protein Packed Steak Bowl",
    description: "Lean steak strips, quinoa, roasted peppers, and Greek yogurt",
    price: 599,
    calories: 580,
    protein: 48,
    category: "protein",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    tags: ["High Protein", "Iron Rich"],
    popular: true,
  },
  {
    id: "8",
    name: "Tropical Acai Bowl",
    description: "Acai, mango, banana, granola, and coconut flakes",
    price: 349,
    calories: 340,
    protein: 8,
    category: "signature",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
    tags: ["Antioxidants", "Energizing"],
    popular: false,
  },
];

interface CartItem {
  id: string;
  quantity: number;
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const filteredItems = menuItems
    .filter((item) => {
      if (activeCategory !== "all" && item.category !== activeCategory) return false;
      if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "popular") return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "calories") return a.calories - b.calories;
      return 0;
    });

  const getCartQuantity = (itemId: string) => {
    const item = cart.find((c) => c.id === itemId);
    return item?.quantity || 0;
  };

  const addToCart = (itemId: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === itemId);
      if (existing) {
        return prev.map((c) => (c.id === itemId ? { ...c, quantity: c.quantity + 1 } : c));
      }
      return [...prev, { id: itemId, quantity: 1 }];
    });
    toast({
      title: "Added to cart",
      description: "Item has been added to your cart",
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map((c) => (c.id === itemId ? { ...c, quantity: c.quantity - 1 } : c));
      }
      return prev.filter((c) => c.id !== itemId);
    });
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CustomerLayout cartItemCount={totalCartItems}>
      <div className="bg-muted/30 min-h-screen">
        {/* Header */}
        <section className="bg-background border-b border-border py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl font-display font-bold text-foreground mb-4">
                Our Menu
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Chef-crafted bowls made with fresh, organic ingredients. 
                Perfect nutrition for your healthy lifestyle.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="calories">Lowest Calories</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2 rounded-full border border-border data-[state=active]:border-primary"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Menu Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {item.popular && (
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardContent className="flex-1 flex flex-col p-4">
                    <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        {item.calories} kcal
                      </span>
                      <span className="flex items-center gap-1">
                        <Dumbbell className="w-3 h-3" />
                        {item.protein}g protein
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground">₹{item.price}</span>
                      {getCartQuantity(item.id) > 0 ? (
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">
                            {getCartQuantity(item.id)}
                          </span>
                          <Button
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => addToCart(item.id)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button size="sm" onClick={() => addToCart(item.id)}>
                          <Plus className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Leaf className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No items found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </CustomerLayout>
  );
}
