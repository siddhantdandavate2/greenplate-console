import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Calendar,
  Edit2,
  Trash2,
  Eye,
  MoreHorizontal,
  Megaphone,
  Tag,
  Bell,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { AdminLayout } from "@/components/layout/AdminLayout";

const mockAnnouncements = [
  {
    id: "1",
    text: "🎉 Flat 20% OFF on your first subscription!",
    linkText: "Subscribe Now",
    link: "/subscriptions",
    startDate: "Jan 1, 2024",
    endDate: "Jan 31, 2024",
    priority: 1,
    enabled: true,
  },
  {
    id: "2",
    text: "🥤 FREE Detox Juice on orders above ₹999",
    linkText: "Order Now",
    link: "/menu",
    startDate: "Jan 10, 2024",
    endDate: "Jan 20, 2024",
    priority: 2,
    enabled: true,
  },
  {
    id: "3",
    text: "⚡ New Year Special: Extra meal FREE on weekly plans!",
    linkText: "Claim Offer",
    link: "/subscriptions",
    startDate: "Jan 1, 2024",
    endDate: "Jan 15, 2024",
    priority: 3,
    enabled: false,
  },
];

const mockCoupons = [
  {
    id: "1",
    code: "FIRST20",
    type: "Percentage",
    value: 20,
    minOrder: 500,
    maxDiscount: 200,
    usageLimit: 1000,
    used: 456,
    validFrom: "Jan 1, 2024",
    validTo: "Mar 31, 2024",
    enabled: true,
  },
  {
    id: "2",
    code: "FLAT100",
    type: "Flat",
    value: 100,
    minOrder: 999,
    maxDiscount: null,
    usageLimit: 500,
    used: 234,
    validFrom: "Jan 1, 2024",
    validTo: "Jan 31, 2024",
    enabled: true,
  },
  {
    id: "3",
    code: "HEALTHY50",
    type: "Percentage",
    value: 50,
    minOrder: 1500,
    maxDiscount: 500,
    usageLimit: 100,
    used: 100,
    validFrom: "Dec 1, 2023",
    validTo: "Dec 31, 2023",
    enabled: false,
  },
];

const mockNotifications = [
  {
    id: "1",
    title: "Order Confirmation",
    type: "Order Update",
    channel: "Email + Push",
    sent: 12456,
    openRate: "68%",
  },
  {
    id: "2",
    title: "Weekly Promo - 20% Off",
    type: "Promotion",
    channel: "Email",
    sent: 8934,
    openRate: "42%",
  },
  {
    id: "3",
    title: "Subscription Renewal",
    type: "Reminder",
    channel: "Push",
    sent: 2341,
    openRate: "78%",
  },
];

export default function AdminMarketing() {
  const [activeTab, setActiveTab] = useState("announcements");
  const [isAddAnnouncementOpen, setIsAddAnnouncementOpen] = useState(false);
  const [isAddCouponOpen, setIsAddCouponOpen] = useState(false);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Marketing & Ads</h1>
            <p className="text-muted-foreground">Manage announcements, coupons, and notifications</p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="announcements" className="gap-2">
              <Megaphone className="w-4 h-4" />
              Announcements
            </TabsTrigger>
            <TabsTrigger value="coupons" className="gap-2">
              <Tag className="w-4 h-4" />
              Coupons
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </TabsTrigger>
          </TabsList>

          {/* Announcements Tab */}
          <TabsContent value="announcements" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Announcement Bar Manager</CardTitle>
                <Dialog open={isAddAnnouncementOpen} onOpenChange={setIsAddAnnouncementOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Announcement
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create Announcement</DialogTitle>
                      <DialogDescription>
                        Add a new announcement to the floating header bar
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div>
                        <Label htmlFor="text">Announcement Text</Label>
                        <Input id="text" placeholder="🎉 Special offer message..." />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="linkText">Link Text</Label>
                          <Input id="linkText" placeholder="Shop Now" />
                        </div>
                        <div>
                          <Label htmlFor="link">Link URL</Label>
                          <Input id="link" placeholder="/menu" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="startDate">Start Date</Label>
                          <Input id="startDate" type="date" />
                        </div>
                        <div>
                          <Label htmlFor="endDate">End Date</Label>
                          <Input id="endDate" type="date" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="priority">Priority (lower = higher priority)</Label>
                        <Input id="priority" type="number" placeholder="1" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsAddAnnouncementOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsAddAnnouncementOpen(false)}>Create</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAnnouncements.map((announcement) => (
                    <div
                      key={announcement.id}
                      className={`p-4 rounded-lg border ${
                        announcement.enabled ? "border-primary/30 bg-primary/5" : "border-border"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{announcement.text}</p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span>Link: {announcement.linkText}</span>
                            <span>Priority: {announcement.priority}</span>
                            <span>
                              {announcement.startDate} - {announcement.endDate}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Switch checked={announcement.enabled} />
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit2 className="w-4 h-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Coupons Tab */}
          <TabsContent value="coupons" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Coupon Codes</CardTitle>
                <Dialog open={isAddCouponOpen} onOpenChange={setIsAddCouponOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Coupon
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create Coupon</DialogTitle>
                      <DialogDescription>
                        Set up a new discount coupon for customers
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div>
                        <Label htmlFor="code">Coupon Code</Label>
                        <Input id="code" placeholder="SAVE20" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="type">Discount Type</Label>
                          <Input id="type" placeholder="Percentage or Flat" />
                        </div>
                        <div>
                          <Label htmlFor="value">Value</Label>
                          <Input id="value" type="number" placeholder="20" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="minOrder">Minimum Order (₹)</Label>
                          <Input id="minOrder" type="number" placeholder="500" />
                        </div>
                        <div>
                          <Label htmlFor="maxDiscount">Max Discount (₹)</Label>
                          <Input id="maxDiscount" type="number" placeholder="200" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="validFrom">Valid From</Label>
                          <Input id="validFrom" type="date" />
                        </div>
                        <div>
                          <Label htmlFor="validTo">Valid To</Label>
                          <Input id="validTo" type="date" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="usageLimit">Usage Limit</Label>
                        <Input id="usageLimit" type="number" placeholder="1000" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsAddCouponOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsAddCouponOpen(false)}>Create</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Code</TableHead>
                      <TableHead>Discount</TableHead>
                      <TableHead>Min Order</TableHead>
                      <TableHead>Usage</TableHead>
                      <TableHead>Validity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockCoupons.map((coupon) => (
                      <TableRow key={coupon.id}>
                        <TableCell className="font-mono font-medium">{coupon.code}</TableCell>
                        <TableCell>
                          {coupon.type === "Percentage" ? `${coupon.value}%` : `₹${coupon.value}`}
                          {coupon.maxDiscount && (
                            <span className="text-xs text-muted-foreground ml-1">
                              (max ₹{coupon.maxDiscount})
                            </span>
                          )}
                        </TableCell>
                        <TableCell>₹{coupon.minOrder}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {coupon.used} / {coupon.usageLimit}
                          </div>
                          <div className="w-full h-1.5 bg-muted rounded-full mt-1">
                            <div
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${(coupon.used / coupon.usageLimit) * 100}%` }}
                            />
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">
                          {coupon.validFrom} - {coupon.validTo}
                        </TableCell>
                        <TableCell>
                          <Switch checked={coupon.enabled} />
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
                                <Edit2 className="w-4 h-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
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
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Push & Email Notifications</CardTitle>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Campaign
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Channel</TableHead>
                      <TableHead>Sent</TableHead>
                      <TableHead>Open Rate</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockNotifications.map((notification) => (
                      <TableRow key={notification.id}>
                        <TableCell className="font-medium">{notification.title}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{notification.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {notification.channel.includes("Email") && (
                              <Mail className="w-4 h-4 text-muted-foreground" />
                            )}
                            {notification.channel.includes("Push") && (
                              <Bell className="w-4 h-4 text-muted-foreground" />
                            )}
                            <span className="text-sm">{notification.channel}</span>
                          </div>
                        </TableCell>
                        <TableCell>{notification.sent.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge
                            variant="secondary"
                            className={
                              parseInt(notification.openRate) > 50
                                ? "bg-success/10 text-success"
                                : "bg-warning/10 text-warning"
                            }
                          >
                            {notification.openRate}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
