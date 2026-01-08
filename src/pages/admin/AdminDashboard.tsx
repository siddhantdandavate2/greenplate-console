import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  Users,
  CreditCard,
  RefreshCcw,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Bell,
  Calendar,
  Pause,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AdminLayout } from "@/components/layout/AdminLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const kpiCards = [
  {
    title: "Today's Orders",
    value: "127",
    change: "+12%",
    trend: "up",
    icon: ShoppingBag,
    color: "text-primary",
  },
  {
    title: "Active Subscriptions",
    value: "2,847",
    change: "+8%",
    trend: "up",
    icon: RefreshCcw,
    color: "text-success",
  },
  {
    title: "Revenue (Today)",
    value: "₹1.24L",
    change: "+15%",
    trend: "up",
    icon: CreditCard,
    color: "text-accent",
  },
  {
    title: "Avg Order Value",
    value: "₹487",
    change: "-2%",
    trend: "down",
    icon: TrendingUp,
    color: "text-info",
  },
  {
    title: "Failed Payments",
    value: "12",
    change: "+3",
    trend: "down",
    icon: AlertCircle,
    color: "text-destructive",
  },
];

const revenueData = [
  { name: "Mon", revenue: 42000 },
  { name: "Tue", revenue: 38000 },
  { name: "Wed", revenue: 55000 },
  { name: "Thu", revenue: 49000 },
  { name: "Fri", revenue: 62000 },
  { name: "Sat", revenue: 78000 },
  { name: "Sun", revenue: 71000 },
];

const ordersByCategory = [
  { name: "Signature", orders: 245 },
  { name: "Protein", orders: 312 },
  { name: "Detox", orders: 156 },
  { name: "Custom", orders: 89 },
];

const orderTypeData = [
  { name: "One-Time", value: 35, color: "hsl(var(--primary))" },
  { name: "Weekly Sub", value: 25, color: "hsl(var(--accent))" },
  { name: "Monthly Sub", value: 40, color: "hsl(var(--success))" },
];

const recentOrders = [
  { id: "ORD-2024-127", customer: "Priya S.", items: 3, total: 897, status: "Preparing" },
  { id: "ORD-2024-126", customer: "Rahul M.", items: 2, total: 598, status: "Out for Delivery" },
  { id: "ORD-2024-125", customer: "Ananya P.", items: 4, total: 1196, status: "Delivered" },
  { id: "ORD-2024-124", customer: "Vikram K.", items: 1, total: 349, status: "New" },
  { id: "ORD-2024-123", customer: "Sneha R.", items: 5, total: 1545, status: "Preparing" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "New":
      return "bg-info/10 text-info";
    case "Preparing":
      return "bg-warning/10 text-warning";
    case "Out for Delivery":
      return "bg-accent/10 text-accent-foreground";
    case "Delivered":
      return "bg-success/10 text-success";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Jan 15, 2024
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Quick Action
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {kpiCards.map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-muted ${kpi.color}`}>
                      <kpi.icon className="w-4 h-4" />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-xs font-medium ${
                        kpi.trend === "up" ? "text-success" : "text-destructive"
                      }`}
                    >
                      {kpi.trend === "up" ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {kpi.change}
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{kpi.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Revenue This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`₹${value.toLocaleString()}`, "Revenue"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Order Type Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Order Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={orderTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {orderTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => [`${value}%`, "Share"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                {orderTypeData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2 text-sm">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders by Category & Recent Orders */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Orders by Category */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Orders by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ordersByCategory} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={80} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="orders" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Recent Orders</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-foreground">{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {order.customer} • {order.items} items
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{order.total}</p>
                      <Badge variant="secondary" className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                <Plus className="w-5 h-5 text-primary" />
                <span>Add Menu Item</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                <Bell className="w-5 h-5 text-accent" />
                <span>Create Announcement</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                <Pause className="w-5 h-5 text-warning" />
                <span>Pause Delivery Slot</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                <Users className="w-5 h-5 text-info" />
                <span>Send Notification</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
