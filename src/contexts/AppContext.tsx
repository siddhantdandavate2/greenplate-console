import React, { createContext, useContext, useState, ReactNode } from "react";

// Types
export type UserRole = "super_admin" | "operations" | "marketing" | "support" | "customer";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  isAdmin: boolean;
  role: UserRole;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  calories: number;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: CartItem[];
  total: number;
  status: "New" | "Preparing" | "Out for Delivery" | "Delivered" | "Cancelled";
  date: string;
  address: string;
  paymentMethod: string;
}

export interface Subscription {
  id: string;
  customerId: string;
  customerName: string;
  plan: string;
  price: number;
  status: "Active" | "Paused" | "Cancelled";
  startDate: string;
  nextDelivery: string;
  deliveryDays: string[];
}

interface AppContextType {
  // Auth
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Orders (for demo - syncs to admin)
  orders: Order[];
  addOrder: (order: Omit<Order, "id" | "date">) => void;
  updateOrderStatus: (orderId: string, status: Order["status"]) => void;
  
  // Subscriptions
  subscriptions: Subscription[];
  addSubscription: (sub: Omit<Subscription, "id">) => void;
  updateSubscriptionStatus: (subId: string, status: Subscription["status"]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Demo users - Admin credentials: admin@satviksalad.com / admin123
const DEMO_USERS: User[] = [
  {
    id: "admin-1",
    name: "Admin User",
    email: "admin@satviksalad.com",
    phone: "+91 98765 43210",
    isAdmin: true,
    role: "super_admin",
  },
  {
    id: "user-1",
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91 98765 43211",
    avatar: "https://i.pravatar.cc/100?img=1",
    isAdmin: false,
    role: "customer",
  },
];

// Initial demo orders
const INITIAL_ORDERS: Order[] = [
  {
    id: "ORD-2024-001",
    customerId: "user-1",
    customerName: "Priya Sharma",
    customerEmail: "priya@example.com",
    items: [
      { id: "1", name: "Mediterranean Quinoa Bowl", price: 349, quantity: 2, image: "", calories: 420 },
    ],
    total: 698,
    status: "Delivered",
    date: "Jan 15, 2024",
    address: "Flat 302, Sunshine Apartments, Mumbai",
    paymentMethod: "UPI",
  },
  {
    id: "ORD-2024-002",
    customerId: "user-1",
    customerName: "Priya Sharma",
    customerEmail: "priya@example.com",
    items: [
      { id: "2", name: "Grilled Chicken Power Bowl", price: 449, quantity: 1, image: "", calories: 520 },
    ],
    total: 449,
    status: "Preparing",
    date: "Jan 18, 2024",
    address: "Flat 302, Sunshine Apartments, Mumbai",
    paymentMethod: "Card",
  },
];

const INITIAL_SUBSCRIPTIONS: Subscription[] = [
  {
    id: "SUB-2024-001",
    customerId: "user-1",
    customerName: "Priya Sharma",
    plan: "Monthly Plan",
    price: 8999,
    status: "Active",
    startDate: "Jan 1, 2024",
    nextDelivery: "Jan 20, 2024",
    deliveryDays: ["Monday", "Wednesday", "Friday"],
  },
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>(INITIAL_SUBSCRIPTIONS);

  const login = (email: string, password: string): boolean => {
    // Demo login - accept any password for demo users
    // Admin: admin@satviksalad.com / admin123
    // User: priya@example.com / password123 (or any password)
    const foundUser = DEMO_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (foundUser) {
      if (foundUser.isAdmin && password !== "admin123") {
        return false;
      }
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, password: string): boolean => {
    // Check if user already exists
    if (DEMO_USERS.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return false;
    }
    // Create new user
    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      phone: "",
      isAdmin: false,
      role: "customer",
    };
    DEMO_USERS.push(newUser);
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) {
        return prev.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(c => c.id !== itemId));
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(prev => prev.map(c => c.id === itemId ? { ...c, quantity } : c));
    }
  };

  const clearCart = () => setCart([]);

  const addOrder = (order: Omit<Order, "id" | "date">) => {
    const newOrder: Order = {
      ...order,
      id: `ORD-${Date.now()}`,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };
    setOrders(prev => [newOrder, ...prev]);
  };

  const updateOrderStatus = (orderId: string, status: Order["status"]) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
  };

  const addSubscription = (sub: Omit<Subscription, "id">) => {
    const newSub: Subscription = {
      ...sub,
      id: `SUB-${Date.now()}`,
    };
    setSubscriptions(prev => [newSub, ...prev]);
  };

  const updateSubscriptionStatus = (subId: string, status: Subscription["status"]) => {
    setSubscriptions(prev => prev.map(s => s.id === subId ? { ...s, status } : s));
  };

  return (
    <AppContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      register,
      logout,
      cart,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      orders,
      addOrder,
      updateOrderStatus,
      subscriptions,
      addSubscription,
      updateSubscriptionStatus,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
