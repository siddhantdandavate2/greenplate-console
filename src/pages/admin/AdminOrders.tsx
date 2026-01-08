import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Download,
  Eye,
  Truck,
  RefreshCcw,
  ChevronDown,
  MoreHorizontal,
  Calendar,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AdminLayout } from "@/components/layout/AdminLayout";

const mockOrders = [
  {
    id: "ORD-2024-001",
    customer: "Priya Sharma",
    email: "priya@email.com",
    items: ["Mediterranean Quinoa Bowl", "Green Detox Bowl"],
    total: 648,
    status: "Preparing",
    paymentStatus: "Paid",
    deliveryDate: "Jan 15, 2024",
    slot: "Morning (7-10 AM)",
    createdAt: "Jan 15, 2024 09:30 AM",
  },
  {
    id: "ORD-2024-002",
    customer: "Rahul Mehta",
    email: "rahul@email.com",
    items: ["Grilled Chicken Power Bowl", "Salmon Poke Bowl"],
    total: 998,
    status: "Out for Delivery",
    paymentStatus: "Paid",
    deliveryDate: "Jan 15, 2024",
    slot: "Afternoon (12-3 PM)",
    createdAt: "Jan 15, 2024 08:15 AM",
  },
  {
    id: "ORD-2024-003",
    customer: "Ananya Patel",
    email: "ananya@email.com",
    items: ["Buddha Bowl", "Tropical Acai Bowl", "Asian Tofu Stir-Fry"],
    total: 977,
    status: "Delivered",
    paymentStatus: "Paid",
    deliveryDate: "Jan 14, 2024",
    slot: "Evening (6-9 PM)",
    createdAt: "Jan 14, 2024 10:00 AM",
  },
  {
    id: "ORD-2024-004",
    customer: "Vikram Kumar",
    email: "vikram@email.com",
    items: ["Protein Packed Steak Bowl"],
    total: 599,
    status: "New",
    paymentStatus: "Pending",
    deliveryDate: "Jan 16, 2024",
    slot: "Morning (7-10 AM)",
    createdAt: "Jan 15, 2024 11:45 AM",
  },
  {
    id: "ORD-2024-005",
    customer: "Sneha Reddy",
    email: "sneha@email.com",
    items: ["Mediterranean Quinoa Bowl", "Green Detox Bowl", "Salmon Poke Bowl"],
    total: 1197,
    status: "Cancelled",
    paymentStatus: "Refunded",
    deliveryDate: "Jan 15, 2024",
    slot: "Afternoon (12-3 PM)",
    createdAt: "Jan 14, 2024 04:20 PM",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "New":
      return "bg-info/10 text-info border-info/20";
    case "Preparing":
      return "bg-warning/10 text-warning border-warning/20";
    case "Out for Delivery":
      return "bg-accent/10 text-accent-foreground border-accent/20";
    case "Delivered":
      return "bg-success/10 text-success border-success/20";
    case "Cancelled":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getPaymentStatusColor = (status: string) => {
  switch (status) {
    case "Paid":
      return "bg-success/10 text-success";
    case "Pending":
      return "bg-warning/10 text-warning";
    case "Refunded":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function AdminOrders() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = mockOrders.filter((order) => {
    if (statusFilter !== "all" && order.status.toLowerCase().replace(" ", "-") !== statusFilter) {
      return false;
    }
    if (searchQuery && !order.id.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !order.customer.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Orders</h1>
            <p className="text-muted-foreground">Manage and track all customer orders</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCcw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Total Orders", value: "127", color: "text-foreground" },
            { label: "New", value: "23", color: "text-info" },
            { label: "Preparing", value: "34", color: "text-warning" },
            { label: "Out for Delivery", value: "18", color: "text-accent" },
            { label: "Delivered", value: "52", color: "text-success" },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4 text-center">
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by order ID or customer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="preparing">Preparing</SelectItem>
                  <SelectItem value="out-for-delivery">Out for Delivery</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Delivery</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-[200px]">
                        <p className="text-sm truncate">{order.items.join(", ")}</p>
                        <p className="text-xs text-muted-foreground">{order.items.length} items</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">₹{order.total}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={getPaymentStatusColor(order.paymentStatus)}>
                        {order.paymentStatus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm">{order.deliveryDate}</p>
                        <p className="text-xs text-muted-foreground">{order.slot}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Truck className="w-4 h-4 mr-2" />
                            Update Status
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="w-4 h-4 mr-2" />
                            Download Invoice
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            Cancel Order
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
