import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  User,
  MapPin,
  CreditCard,
  ShoppingBag,
  RefreshCcw,
  Settings,
  LogOut,
  Edit2,
  Plus,
  Calendar,
  Pause,
  Play,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CustomerLayout } from "@/components/layout/CustomerLayout";

const mockUser = {
  name: "Priya Sharma",
  email: "priya.sharma@email.com",
  phone: "+91 98765 43210",
  avatar: "https://i.pravatar.cc/100?img=1",
  memberSince: "January 2024",
};

const mockAddresses = [
  {
    id: "1",
    label: "Home",
    address: "Flat 302, Sunshine Apartments, Andheri West",
    city: "Mumbai",
    pincode: "400053",
    isDefault: true,
  },
  {
    id: "2",
    label: "Office",
    address: "WeWork, BKC Tower 3, Floor 8",
    city: "Mumbai",
    pincode: "400051",
    isDefault: false,
  },
];

const mockOrders = [
  {
    id: "ORD-2024-001",
    date: "Jan 15, 2024",
    items: ["Mediterranean Quinoa Bowl", "Green Detox Bowl"],
    total: 648,
    status: "Delivered",
  },
  {
    id: "ORD-2024-002",
    date: "Jan 12, 2024",
    items: ["Grilled Chicken Power Bowl", "Salmon Poke Bowl"],
    total: 998,
    status: "Delivered",
  },
  {
    id: "ORD-2024-003",
    date: "Jan 10, 2024",
    items: ["Buddha Bowl", "Asian Tofu Stir-Fry"],
    total: 628,
    status: "Delivered",
  },
];

const mockSubscription = {
  id: "SUB-2024-001",
  plan: "Monthly Plan",
  mealPlan: "Balanced",
  price: 8999,
  startDate: "Jan 1, 2024",
  nextDelivery: "Jan 18, 2024",
  status: "Active",
  deliveryDays: ["Monday", "Wednesday", "Friday"],
  mealsPerDay: 3,
};

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <CustomerLayout cartItemCount={0}>
      <div className="bg-muted/30 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                    <h2 className="font-semibold text-foreground">{mockUser.name}</h2>
                    <p className="text-sm text-muted-foreground">{mockUser.email}</p>
                    <Badge variant="secondary" className="mt-2">
                      Member since {mockUser.memberSince}
                    </Badge>
                  </div>

                  <nav className="space-y-1">
                    {[
                      { id: "profile", label: "Profile", icon: User },
                      { id: "addresses", label: "Addresses", icon: MapPin },
                      { id: "orders", label: "Order History", icon: ShoppingBag },
                      { id: "subscriptions", label: "Subscriptions", icon: RefreshCcw },
                      { id: "payments", label: "Payment Methods", icon: CreditCard },
                      { id: "settings", label: "Settings", icon: Settings },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                          activeTab === item.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </button>
                    ))}
                    <Separator className="my-4" />
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-destructive hover:bg-destructive/10 transition-colors">
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Tab */}
                {activeTab === "profile" && (
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Profile Information</CardTitle>
                      <Button variant="outline" size="sm">
                        <Edit2 className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm text-muted-foreground">Full Name</label>
                          <p className="font-medium">{mockUser.name}</p>
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground">Email</label>
                          <p className="font-medium">{mockUser.email}</p>
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground">Phone</label>
                          <p className="font-medium">{mockUser.phone}</p>
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground">Member Since</label>
                          <p className="font-medium">{mockUser.memberSince}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Addresses Tab */}
                {activeTab === "addresses" && (
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Saved Addresses</CardTitle>
                      <Button size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Address
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {mockAddresses.map((address) => (
                        <div
                          key={address.id}
                          className={`p-4 rounded-lg border ${
                            address.isDefault ? "border-primary bg-primary/5" : "border-border"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium">{address.label}</span>
                                {address.isDefault && (
                                  <Badge variant="secondary">Default</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {address.address}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {address.city} - {address.pincode}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="icon">
                                <Edit2 className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="text-destructive">
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Orders Tab */}
                {activeTab === "orders" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {mockOrders.map((order) => (
                        <div
                          key={order.id}
                          className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <span className="font-medium">{order.id}</span>
                              <span className="text-sm text-muted-foreground ml-4">
                                {order.date}
                              </span>
                            </div>
                            <Badge variant="secondary" className="bg-success/10 text-success">
                              {order.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {order.items.join(", ")}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">₹{order.total}</span>
                            <Button variant="outline" size="sm">
                              Reorder
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Subscriptions Tab */}
                {activeTab === "subscriptions" && (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Active Subscription</CardTitle>
                        <Badge className="bg-success text-success-foreground">
                          {mockSubscription.status}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label className="text-sm text-muted-foreground">Plan</label>
                            <p className="font-medium">{mockSubscription.plan}</p>
                          </div>
                          <div>
                            <label className="text-sm text-muted-foreground">Meal Plan</label>
                            <p className="font-medium">{mockSubscription.mealPlan}</p>
                          </div>
                          <div>
                            <label className="text-sm text-muted-foreground">Price</label>
                            <p className="font-medium">₹{mockSubscription.price}/month</p>
                          </div>
                          <div>
                            <label className="text-sm text-muted-foreground">Next Delivery</label>
                            <p className="font-medium">{mockSubscription.nextDelivery}</p>
                          </div>
                          <div>
                            <label className="text-sm text-muted-foreground">Delivery Days</label>
                            <p className="font-medium">{mockSubscription.deliveryDays.join(", ")}</p>
                          </div>
                          <div>
                            <label className="text-sm text-muted-foreground">Meals Per Day</label>
                            <p className="font-medium">{mockSubscription.mealsPerDay} meals</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <Button variant="outline">
                            <Edit2 className="w-4 h-4 mr-2" />
                            Modify Plan
                          </Button>
                          <Button variant="outline">
                            <Calendar className="w-4 h-4 mr-2" />
                            Change Delivery Days
                          </Button>
                          <Button variant="outline" className="text-warning">
                            <Pause className="w-4 h-4 mr-2" />
                            Pause Subscription
                          </Button>
                          <Button variant="outline" className="text-destructive">
                            <X className="w-4 h-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Payments Tab */}
                {activeTab === "payments" && (
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Payment Methods</CardTitle>
                      <Button size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Card
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 rounded-lg border border-primary bg-primary/5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">
                              VISA
                            </div>
                            <div>
                              <p className="font-medium">•••• •••• •••• 4242</p>
                              <p className="text-sm text-muted-foreground">Expires 12/25</p>
                            </div>
                          </div>
                          <Badge variant="secondary">Default</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Settings Tab */}
                {activeTab === "settings" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-muted-foreground">
                            Receive order updates and promotions
                          </p>
                        </div>
                        <Button variant="outline">Manage</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                        <div>
                          <p className="font-medium">Change Password</p>
                          <p className="text-sm text-muted-foreground">
                            Update your account password
                          </p>
                        </div>
                        <Button variant="outline">Update</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                        <div>
                          <p className="font-medium text-destructive">Delete Account</p>
                          <p className="text-sm text-muted-foreground">
                            Permanently delete your account and data
                          </p>
                        </div>
                        <Button variant="destructive">Delete</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
}
