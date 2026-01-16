import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Search, Flame, Leaf, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomerLayout } from "@/components/layout/CustomerLayout";
import { useToast } from "@/hooks/use-toast";
import { useApp } from "@/contexts/AppContext";

// Import menu images
import sproutsBhelSalad from "@/assets/menu/sprouts-bhel-salad.jpg";
import pastaSuperBowl from "@/assets/menu/pasta-super-bowl.jpg";
import chatpataChangaSalad from "@/assets/menu/chatpata-chana-salad.jpg";
import mexicanSupremeBowl from "@/assets/menu/mexican-supreme-bowl.jpg";
import magicSaladBowl from "@/assets/menu/magic-salad-bowl.jpg";
import proteinBombSalad from "@/assets/menu/protein-bomb-salad.jpg";
import wholeWheatGrilledSandwich from "@/assets/menu/whole-wheat-grilled-sandwich.jpg";
import magicSandwichWithDip from "@/assets/menu/magic-sandwich-with-dip.jpg";
import kidneyBeansSalad from "@/assets/menu/kidney-beans-salad.jpg";
import watermelonFetaSalad from "@/assets/menu/watermelon-feta-salad.jpg";

const categories = [
  { id: "all", label: "All" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "proteins", label: "Proteins" },
  { id: "high-carb", label: "High Carb" },
  { id: "healthy", label: "Healthy" },
];

// Updated menu with vegetarian items from Sathvik Salad menu
const menuItems = [
  // Lunch Menu Items
  {
    id: "1",
    name: "Sprouts Bhel Salad",
    description: "Crunchy sprouts mixed with tangy chutneys, onions, and fresh coriander",
    price: 180,
    calories: 360,
    protein: 18,
    category: "lunch",
    image: sproutsBhelSalad,
    tags: ["Vegetarian", "High Fiber", "Proteins"],
    popular: true,
    day: "Monday",
  },
  {
    id: "2",
    name: "Pasta Super Bowl",
    description: "Colorful penne pasta with fresh vegetables, herbs, and creamy sauce",
    price: 200,
    calories: 340,
    protein: 14,
    category: "lunch",
    image: pastaSuperBowl,
    tags: ["Vegetarian", "High Carb"],
    popular: true,
    day: "Tuesday",
  },
  {
    id: "3",
    name: "Chatpata Chana Salad",
    description: "Spiced chickpeas with onions, tomatoes, green chilies, and lemon dressing",
    price: 180,
    calories: 335,
    protein: 16,
    category: "lunch",
    image: chatpataChangaSalad,
    tags: ["Vegetarian", "Proteins", "High Fiber"],
    popular: true,
    day: "Wednesday",
  },
  {
    id: "4",
    name: "Mexican Supreme Bowl",
    description: "Rice, black beans, corn, avocado, and fresh salsa with colorful veggies",
    price: 200,
    calories: 340,
    protein: 15,
    category: "lunch",
    image: mexicanSupremeBowl,
    tags: ["Vegetarian", "High Carb", "Healthy"],
    popular: false,
    day: "Thursday",
  },
  {
    id: "5",
    name: "Magic Salad Bowl",
    description: "Mixed greens with colorful vegetables, nuts, seeds, and creamy dressing",
    price: 180,
    calories: 360,
    protein: 12,
    category: "lunch",
    image: magicSaladBowl,
    tags: ["Vegetarian", "Healthy", "Fresh Fruits"],
    popular: false,
    day: "Friday",
  },
  {
    id: "6",
    name: "Protein Bomb Salad",
    description: "Paneer cubes with chickpeas, sprouts, quinoa, and leafy greens",
    price: 200,
    calories: 335,
    protein: 28,
    category: "lunch",
    image: proteinBombSalad,
    tags: ["Vegetarian", "High Protein", "Proteins"],
    popular: true,
    day: "Saturday",
  },
  // Dinner Menu Items
  {
    id: "7",
    name: "Whole Wheat Veg Grilled Sandwich",
    description: "Golden toasted whole wheat bread with fresh vegetables and cheese",
    price: 180,
    calories: 360,
    protein: 14,
    category: "dinner",
    image: wholeWheatGrilledSandwich,
    tags: ["Vegetarian", "Grain", "Healthy"],
    popular: true,
    day: "Monday",
  },
  {
    id: "8",
    name: "Magic Sandwich with Dip",
    description: "Grilled sandwich with vegetable filling, served with creamy dip",
    price: 200,
    calories: 340,
    protein: 12,
    category: "dinner",
    image: magicSandwichWithDip,
    tags: ["Vegetarian", "High Callory"],
    popular: false,
    day: "Tuesday",
  },
  {
    id: "9",
    name: "Kidney Beans Salad",
    description: "Red kidney beans with onions, tomatoes, cucumber, and lemon dressing",
    price: 180,
    calories: 360,
    protein: 18,
    category: "dinner",
    image: kidneyBeansSalad,
    tags: ["Vegetarian", "Proteins", "High Fiber"],
    popular: false,
    day: "Friday",
  },
  {
    id: "10",
    name: "Watermelon Feta Salad",
    description: "Fresh watermelon cubes with crumbled feta cheese, mint, and mixed greens",
    price: 200,
    calories: 335,
    protein: 10,
    category: "dinner",
    image: watermelonFetaSalad,
    tags: ["Vegetarian", "Fresh Fruits", "Healthy"],
    popular: true,
    day: "Saturday",
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const { toast } = useToast();
  const { cart, addToCart, updateCartQuantity, removeFromCart } = useApp();

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

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      calories: item.calories,
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    });
  };

  const handleRemoveFromCart = (itemId: string) => {
    const cartItem = cart.find((c) => c.id === itemId);
    if (cartItem && cartItem.quantity > 1) {
      updateCartQuantity(itemId, cartItem.quantity - 1);
    } else {
      removeFromCart(itemId);
    }
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CustomerLayout>
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
                100% Vegetarian, Satvik meals made with fresh, organic ingredients. 
                From Earth to Soul - नourishing your body and mind.
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
                    {item.day && (
                      <Badge variant="secondary" className="absolute top-3 right-3">
                        {item.day}
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
                            onClick={() => handleRemoveFromCart(item.id)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">
                            {getCartQuantity(item.id)}
                          </span>
                          <Button
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleAddToCart(item)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button size="sm" onClick={() => handleAddToCart(item)}>
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

          {/* Note */}
          <p className="text-center text-sm text-muted-foreground mt-8 italic">
            Note: All meals are 100% vegetarian and Satvik. Images shown are for representation.
          </p>
        </div>
      </div>
    </CustomerLayout>
  );
}
